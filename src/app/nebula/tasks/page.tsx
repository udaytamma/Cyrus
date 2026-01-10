"use client";

/**
 * Nebula Task Board
 *
 * Kanban-style task management with:
 * - Backlog: All tasks waiting to be worked on
 * - This Week: Tasks scheduled for current week
 * - Done: Completed tasks
 *
 * Features:
 * - Drag and drop between columns
 * - Real-time sync via Firebase
 * - Tag-based categorization
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Task,
  TaskTag,
  TaskStatus,
  getTasks,
  saveTasks,
  subscribeToTasks,
  generateTaskId,
} from "@/lib/firebase";

// =============================================================================
// Tag Configuration
// =============================================================================

const TAG_CONFIG: Record<TaskTag, { label: string; color: string; bg: string }> = {
  TechSense: {
    label: "TechSense",
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.15)",
  },
  ExecSpeak: {
    label: "ExecSpeak",
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.15)",
  },
  Resume: {
    label: "Resume",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.15)",
  },
  TPM: {
    label: "TPM",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.15)",
  },
  BizSense: {
    label: "BizSense",
    color: "#ef4444",
    bg: "rgba(239, 68, 68, 0.15)",
  },
};

const COLUMN_CONFIG: Record<TaskStatus, { title: string; icon: string; emptyText: string }> = {
  backlog: {
    title: "Backlog",
    icon: "📥",
    emptyText: "No tasks in backlog",
  },
  weekly: {
    title: "This Week",
    icon: "📅",
    emptyText: "Drag tasks here for this week",
  },
  done: {
    title: "Done",
    icon: "✓",
    emptyText: "Completed tasks appear here",
  },
};

// =============================================================================
// Task Card Component
// =============================================================================

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  isDragging?: boolean;
}

function TaskCard({ task, onEdit, onDelete, isDragging }: TaskCardProps) {
  const tagConfig = TAG_CONFIG[task.tag];

  return (
    <div
      className={`
        group relative rounded-lg border bg-card p-4
        transition-all duration-200
        ${isDragging
          ? "border-primary shadow-lg shadow-primary/20 scale-[1.02] rotate-1"
          : "border-border hover:border-primary/40 hover:shadow-md"
        }
      `}
    >
      {/* Tag Badge */}
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium mb-3"
        style={{ backgroundColor: tagConfig.bg, color: tagConfig.color }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: tagConfig.color }}
        />
        {tagConfig.label}
      </div>

      {/* Task Title */}
      <p className="text-sm text-foreground leading-relaxed pr-8">{task.title}</p>

      {/* Actions - visible on hover */}
      <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task);
          }}
          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title="Edit task"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
          className="p-1.5 rounded-md hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors"
          title="Delete task"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// Sortable Task Card
// =============================================================================

interface SortableTaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

function SortableTaskCard({ task, onEdit, onDelete }: SortableTaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard task={task} onEdit={onEdit} onDelete={onDelete} isDragging={isDragging} />
    </div>
  );
}

// =============================================================================
// Column Component
// =============================================================================

interface ColumnProps {
  status: TaskStatus;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

function Column({ status, tasks, onEdit, onDelete }: ColumnProps) {
  const config = COLUMN_CONFIG[status];
  const columnTasks = tasks.filter((t) => t.status === status).sort((a, b) => a.order - b.order);

  // Make the column a droppable zone
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div className="flex flex-col min-h-[400px]">
      {/* Column Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <span className="text-lg">{config.icon}</span>
        <h3 className="font-semibold text-foreground">{config.title}</h3>
        <span className="ml-auto text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          {columnTasks.length}
        </span>
      </div>

      {/* Tasks Container - droppable zone */}
      <div
        ref={setNodeRef}
        className={`flex-1 space-y-3 rounded-lg p-2 -m-2 transition-colors ${
          isOver ? "bg-primary/10 ring-2 ring-primary/30" : ""
        }`}
      >
        <SortableContext items={columnTasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {columnTasks.length === 0 ? (
            <div className={`flex items-center justify-center h-24 rounded-lg border-2 border-dashed text-sm text-muted-foreground transition-colors ${
              isOver ? "border-primary bg-primary/5" : "border-border"
            }`}>
              {config.emptyText}
            </div>
          ) : (
            columnTasks.map((task) => (
              <SortableTaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  );
}

// =============================================================================
// Add Task Form
// =============================================================================

interface AddTaskFormProps {
  onAdd: (title: string, tag: TaskTag) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function AddTaskForm({ onAdd, isOpen, setIsOpen }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState<TaskTag>("TPM");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), tag);
      setTitle("");
      setTag("TPM");
    }
  };

  return (
    <div className="border-t border-border bg-card/50 backdrop-blur-sm">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full border-2 border-current transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
        Add Task
      </button>

      {/* Expandable Form */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit} className="p-4 pt-0 space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">
              Task Description
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              autoFocus={isOpen}
            />
          </div>

          {/* Tag Selection */}
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TAG_CONFIG) as TaskTag[]).map((tagKey) => {
                const config = TAG_CONFIG[tagKey];
                const isSelected = tag === tagKey;
                return (
                  <button
                    key={tagKey}
                    type="button"
                    onClick={() => setTag(tagKey)}
                    className={`
                      inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium
                      transition-all duration-200
                      ${isSelected
                        ? "ring-2 ring-offset-2 ring-offset-background scale-105"
                        : "opacity-60 hover:opacity-100"
                      }
                    `}
                    style={{
                      backgroundColor: config.bg,
                      color: config.color,
                      "--tw-ring-color": isSelected ? config.color : undefined,
                    } as React.CSSProperties}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: config.color }}
                    />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!title.trim()}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Add to Backlog
          </button>
        </form>
      </div>
    </div>
  );
}

// =============================================================================
// Edit Task Modal
// =============================================================================

interface EditTaskModalProps {
  task: Task | null;
  onSave: (task: Task) => void;
  onClose: () => void;
}

function EditTaskModal({ task, onSave, onClose }: EditTaskModalProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [tag, setTag] = useState<TaskTag>(task?.tag || "TPM");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setTag(task.tag);
    }
  }, [task]);

  if (!task) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSave({ ...task, title: title.trim(), tag });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-foreground mb-4">Edit Task</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">
              Task Description
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              autoFocus
            />
          </div>

          {/* Tag Selection */}
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TAG_CONFIG) as TaskTag[]).map((tagKey) => {
                const config = TAG_CONFIG[tagKey];
                const isSelected = tag === tagKey;
                return (
                  <button
                    key={tagKey}
                    type="button"
                    onClick={() => setTag(tagKey)}
                    className={`
                      inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium
                      transition-all duration-200
                      ${isSelected
                        ? "ring-2 ring-offset-2 ring-offset-background scale-105"
                        : "opacity-60 hover:opacity-100"
                      }
                    `}
                    style={{
                      backgroundColor: config.bg,
                      color: config.color,
                      "--tw-ring-color": isSelected ? config.color : undefined,
                    } as React.CSSProperties}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: config.color }}
                    />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-muted transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =============================================================================
// Main Task Board
// =============================================================================

function TaskBoardContent() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Load tasks on mount
  useEffect(() => {
    const unsubscribe = subscribeToTasks((loadedTasks) => {
      setTasks(loadedTasks);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Save tasks helper
  const persistTasks = useCallback(async (newTasks: Task[]) => {
    setSaving(true);
    await saveTasks(newTasks);
    setSaving(false);
  }, []);

  // Add task
  const handleAddTask = useCallback(
    (title: string, tag: TaskTag) => {
      const newTask: Task = {
        id: generateTaskId(),
        title,
        tag,
        status: "backlog",
        order: tasks.filter((t) => t.status === "backlog").length,
        createdAt: Date.now(),
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      persistTasks(newTasks);
      setAddFormOpen(false);
    },
    [tasks, persistTasks]
  );

  // Edit task
  const handleEditTask = useCallback(
    (updatedTask: Task) => {
      const newTasks = tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      );
      setTasks(newTasks);
      persistTasks(newTasks);
    },
    [tasks, persistTasks]
  );

  // Delete task
  const handleDeleteTask = useCallback(
    (id: string) => {
      const newTasks = tasks.filter((t) => t.id !== id);
      setTasks(newTasks);
      persistTasks(newTasks);
    },
    [tasks, persistTasks]
  );

  // Drag handlers
  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragOver = () => {
    // Visual feedback only - handled by useDroppable's isOver
    // All state updates happen in handleDragEnd for persistence
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeTaskData = tasks.find((t) => t.id === active.id);
    if (!activeTaskData) return;

    const overId = over.id as string;

    // Determine target status and whether it's a column drop or task drop
    let targetStatus: TaskStatus;
    let overTask: Task | undefined;

    if (overId === "backlog" || overId === "weekly" || overId === "done") {
      // Dropped directly on a column
      targetStatus = overId as TaskStatus;
    } else {
      // Dropped on a task - find that task to get its status
      overTask = tasks.find((t) => t.id === overId);
      if (!overTask) return;
      targetStatus = overTask.status;
    }

    const statusChanged = activeTaskData.status !== targetStatus;

    if (statusChanged) {
      // Moving to a different column
      const targetColumnTasks = tasks.filter((t) => t.status === targetStatus && t.id !== activeTaskData.id);
      const newOrder = overTask
        ? overTask.order // Insert near the target task
        : targetColumnTasks.length; // Add to end of column

      const updatedTask: Task = {
        ...activeTaskData,
        status: targetStatus,
        order: newOrder,
        completedAt: targetStatus === "done" ? Date.now() : undefined,
      };

      // Remove completedAt if not done
      if (targetStatus !== "done") {
        delete updatedTask.completedAt;
      }

      const newTasks = tasks.map((t) => t.id === activeTaskData.id ? updatedTask : t);

      console.log("Status changed:", activeTaskData.status, "->", targetStatus);
      console.log("Persisting tasks:", newTasks.length);

      setTasks(newTasks);
      persistTasks(newTasks);
    } else if (overTask && activeTaskData.id !== overTask.id) {
      // Reorder within same column
      const columnTasks = tasks
        .filter((t) => t.status === activeTaskData.status)
        .sort((a, b) => a.order - b.order);

      const oldIndex = columnTasks.findIndex((t) => t.id === active.id);
      const newIndex = columnTasks.findIndex((t) => t.id === over.id);

      if (oldIndex !== newIndex && oldIndex !== -1 && newIndex !== -1) {
        const reordered = arrayMove(columnTasks, oldIndex, newIndex);
        const reorderedWithOrder = reordered.map((t, i) => ({ ...t, order: i }));

        const newTasks = tasks.map((t) => {
          const updated = reorderedWithOrder.find((r) => r.id === t.id);
          return updated || t;
        });

        setTasks(newTasks);
        persistTasks(newTasks);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/nebula"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Task Board</h1>
                <p className="text-sm text-muted-foreground">
                  {tasks.length} tasks total
                  {saving && <span className="ml-2 text-primary">Saving...</span>}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">
                  {tasks.filter((t) => t.status === "weekly").length}
                </div>
                <div className="text-xs text-muted-foreground">This Week</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-500">
                  {tasks.filter((t) => t.status === "done").length}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Board */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Column
                status="backlog"
                tasks={tasks}
                onEdit={setEditingTask}
                onDelete={handleDeleteTask}
              />
              <Column
                status="weekly"
                tasks={tasks}
                onEdit={setEditingTask}
                onDelete={handleDeleteTask}
              />
              <Column
                status="done"
                tasks={tasks}
                onEdit={setEditingTask}
                onDelete={handleDeleteTask}
              />
            </div>

            {/* Drag Overlay */}
            <DragOverlay>
              {activeTask ? (
                <TaskCard
                  task={activeTask}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  isDragging
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </main>

      {/* Add Task Form */}
      <AddTaskForm
        onAdd={handleAddTask}
        isOpen={addFormOpen}
        setIsOpen={setAddFormOpen}
      />

      {/* Edit Modal */}
      <EditTaskModal
        task={editingTask}
        onSave={handleEditTask}
        onClose={() => setEditingTask(null)}
      />
    </div>
  );
}

export default function TaskBoardPage() {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Task Board">
      <TaskBoardContent />
    </AuthGate>
  );
}
