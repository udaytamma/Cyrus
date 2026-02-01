"use client";

import { useState } from "react";
import { GTMLayout, StatusBadge } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { Story, StoryCategory, STORY_CATEGORY_CONFIG } from "@/types/gtm";
import { getTodayString } from "@/lib/gtm-utils";

const categoryOptions: StoryCategory[] = [
  "leadership",
  "conflict",
  "failure",
  "impact",
  "ambiguity",
  "technical",
  "stakeholder",
  "delivery",
];

function StoriesContent() {
  const { data, addStory, updateStory, deleteStory } = useGTM();
  const [showForm, setShowForm] = useState(false);
  const [editingStory, setEditingStory] = useState<Story | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "leadership" as StoryCategory,
    situation: "",
    task: "",
    action: "",
    result: "",
    shortVersion: "",
    metrics: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      category: "leadership",
      situation: "",
      task: "",
      action: "",
      result: "",
      shortVersion: "",
      metrics: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storyData = {
      ...formData,
      metrics: formData.metrics.split(",").map((m) => m.trim()).filter(Boolean),
      practiceCount: editingStory?.practiceCount || 0,
      lastPracticed: editingStory?.lastPracticed || null,
    };

    if (editingStory) {
      updateStory(editingStory.id, storyData);
    } else {
      addStory(storyData);
    }
    setShowForm(false);
    setEditingStory(null);
    resetForm();
  };

  const handleEdit = (story: Story) => {
    setEditingStory(story);
    setFormData({
      title: story.title,
      category: story.category,
      situation: story.situation,
      task: story.task,
      action: story.action,
      result: story.result,
      shortVersion: story.shortVersion,
      metrics: story.metrics.join(", "),
    });
    setShowForm(true);
  };

  const handlePractice = (story: Story) => {
    updateStory(story.id, {
      practiceCount: story.practiceCount + 1,
      lastPracticed: getTodayString(),
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this story?")) {
      deleteStory(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">STAR Stories</h1>
          <p className="text-muted-foreground mt-1">
            {data.stories.length} / 10 stories &middot; Build your behavioral interview arsenal
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingStory(null);
            setShowForm(true);
          }}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          + Add Story
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingStory ? "Edit Story" : "Add STAR Story"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="e.g., Led SRE transformation at scale"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((cat) => {
                    const config = STORY_CATEGORY_CONFIG[cat];
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                          formData.category === cat
                            ? `${config.bg} ${config.text} border-current`
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {config.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Situation</label>
                <textarea
                  required
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="Context and background..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Task</label>
                <textarea
                  required
                  value={formData.task}
                  onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="What you needed to accomplish..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Action</label>
                <textarea
                  required
                  value={formData.action}
                  onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="What you did..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Result</label>
                <textarea
                  required
                  value={formData.result}
                  onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="Outcome and impact..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Short Version (60-90s)
                </label>
                <textarea
                  value={formData.shortVersion}
                  onChange={(e) => setFormData({ ...formData, shortVersion: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="Condensed version for initial delivery..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Key Metrics (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.metrics}
                  onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="e.g., MTTR -42%, $1.5M revenue"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingStory(null);
                    resetForm();
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  {editingStory ? "Update Story" : "Add Story"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stories List */}
      {data.stories.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <div className="text-4xl mb-4">📖</div>
          <div className="text-lg font-medium text-foreground mb-2">No stories yet</div>
          <div className="text-muted-foreground mb-4">
            Add 8-10 STAR stories covering different categories
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Add Your First Story
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {data.stories.map((story) => (
            <div
              key={story.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => setExpandedId(expandedId === story.id ? null : story.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <StatusBadge type="story" status={story.category} />
                      <span className="text-sm text-muted-foreground">
                        Practiced {story.practiceCount}x
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground">{story.title}</h3>
                    {story.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {story.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs bg-emerald-500/15 text-emerald-400 rounded"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePractice(story);
                      }}
                      className="px-3 py-1.5 text-sm font-medium text-primary border border-primary/30 rounded-md hover:bg-primary/10"
                    >
                      Practice
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(story);
                      }}
                      className="p-1.5 text-muted-foreground hover:text-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(story.id);
                      }}
                      className="p-1.5 text-muted-foreground hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {expandedId === story.id && (
                <div className="px-4 pb-4 border-t border-border pt-4 space-y-3">
                  <div>
                    <div className="text-sm font-medium text-primary">Situation</div>
                    <p className="text-sm text-foreground mt-1">{story.situation}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Task</div>
                    <p className="text-sm text-foreground mt-1">{story.task}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Action</div>
                    <p className="text-sm text-foreground mt-1">{story.action}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Result</div>
                    <p className="text-sm text-foreground mt-1">{story.result}</p>
                  </div>
                  {story.shortVersion && (
                    <div className="pt-3 border-t border-border">
                      <div className="text-sm font-medium text-amber-500">Short Version (60-90s)</div>
                      <p className="text-sm text-foreground mt-1">{story.shortVersion}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StoriesPage() {
  return (
    <GTMLayout>
      <StoriesContent />
    </GTMLayout>
  );
}
