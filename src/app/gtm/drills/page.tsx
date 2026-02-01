"use client";

import { useState } from "react";
import { GTMLayout } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { Drill, DRILL_ELEMENTS, Rating } from "@/types/gtm";
import { formatDate, getTodayString } from "@/lib/gtm-utils";

function DrillsContent() {
  const { data, addDrill, updateDrill, deleteDrill } = useGTM();
  const [showForm, setShowForm] = useState(false);
  const [editingDrill, setEditingDrill] = useState<Drill | null>(null);

  const [formData, setFormData] = useState({
    prompt: "",
    date: getTodayString(),
    duration: 45,
    elementsCompleted: [] as string[],
    selfRating: 3 as Rating,
    feedback: "",
  });

  const resetForm = () => {
    setFormData({
      prompt: "",
      date: getTodayString(),
      duration: 45,
      elementsCompleted: [],
      selfRating: 3,
      feedback: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDrill) {
      updateDrill(editingDrill.id, formData);
    } else {
      addDrill(formData);
    }
    setShowForm(false);
    setEditingDrill(null);
    resetForm();
  };

  const handleEdit = (drill: Drill) => {
    setEditingDrill(drill);
    setFormData({
      prompt: drill.prompt,
      date: drill.date,
      duration: drill.duration,
      elementsCompleted: drill.elementsCompleted,
      selfRating: drill.selfRating,
      feedback: drill.feedback,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this drill?")) {
      deleteDrill(id);
    }
  };

  const toggleElement = (element: string) => {
    setFormData((prev) => ({
      ...prev,
      elementsCompleted: prev.elementsCompleted.includes(element)
        ? prev.elementsCompleted.filter((e) => e !== element)
        : [...prev.elementsCompleted, element],
    }));
  };

  // Sort by date (newest first)
  const sortedDrills = [...data.drills].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate stats
  const avgRating = data.drills.length > 0
    ? (data.drills.reduce((sum, d) => sum + d.selfRating, 0) / data.drills.length).toFixed(1)
    : "-";

  const avgElements = data.drills.length > 0
    ? (data.drills.reduce((sum, d) => sum + d.elementsCompleted.length, 0) / data.drills.length).toFixed(1)
    : "-";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Design Drills</h1>
          <p className="text-muted-foreground mt-1">
            {data.drills.length} completed &middot; Avg rating: {avgRating}/5 &middot; Avg elements: {avgElements}
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingDrill(null);
            setShowForm(true);
          }}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          + Add Drill
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingDrill ? "Edit Drill" : "Log System Design Drill"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Prompt / Problem
                </label>
                <textarea
                  required
                  value={formData.prompt}
                  onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="e.g., Design an incident management platform for a global SaaS"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Duration (min)
                  </label>
                  <input
                    type="number"
                    required
                    min={15}
                    max={120}
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Elements Covered
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DRILL_ELEMENTS.map((element) => (
                    <button
                      key={element}
                      type="button"
                      onClick={() => toggleElement(element)}
                      className={`px-3 py-2 rounded-md text-sm text-left border transition-colors ${
                        formData.elementsCompleted.includes(element)
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <span className="mr-2">
                        {formData.elementsCompleted.includes(element) ? "✓" : "○"}
                      </span>
                      {element}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Self Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, selfRating: rating as Rating })}
                      className={`w-10 h-10 rounded-md text-sm font-medium border transition-colors ${
                        formData.selfRating === rating
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Notes / Feedback
                </label>
                <textarea
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="What went well? What needs improvement?"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingDrill(null);
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
                  {editingDrill ? "Update Drill" : "Log Drill"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Drills List */}
      {data.drills.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <div className="text-4xl mb-4">🔧</div>
          <div className="text-lg font-medium text-foreground mb-2">No drills logged yet</div>
          <div className="text-muted-foreground mb-4">
            Complete 2-3 system design drills per week
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Log Your First Drill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedDrills.map((drill) => (
            <div
              key={drill.id}
              className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-muted-foreground">{formatDate(drill.date)}</span>
                    <span className="text-sm text-muted-foreground">{drill.duration} min</span>
                    <span className="px-2 py-0.5 text-xs bg-violet-500/15 text-violet-400 rounded">
                      {drill.elementsCompleted.length} / {DRILL_ELEMENTS.length} elements
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{drill.prompt}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{drill.selfRating}</div>
                    <div className="text-xs text-muted-foreground">/ 5</div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(drill)}
                      className="p-1.5 text-muted-foreground hover:text-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(drill.id)}
                      className="p-1.5 text-muted-foreground hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {drill.elementsCompleted.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {drill.elementsCompleted.map((element, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-emerald-500/15 text-emerald-400 rounded"
                    >
                      {element}
                    </span>
                  ))}
                </div>
              )}

              {drill.feedback && (
                <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-border">
                  {drill.feedback}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DrillsPage() {
  return (
    <GTMLayout>
      <DrillsContent />
    </GTMLayout>
  );
}
