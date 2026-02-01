"use client";

import { useState } from "react";
import { GTMLayout, StatusBadge } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { MockInterview, MockType, MOCK_TYPE_CONFIG, Rating } from "@/types/gtm";
import { formatDate, getTodayString } from "@/lib/gtm-utils";

const mockTypes: MockType[] = ["behavioral", "system-design", "product", "case"];

function MocksContent() {
  const { data, addMock, updateMock, deleteMock } = useGTM();
  const [showForm, setShowForm] = useState(false);
  const [editingMock, setEditingMock] = useState<MockInterview | null>(null);

  const [formData, setFormData] = useState({
    type: "behavioral" as MockType,
    date: getTodayString(),
    partner: "",
    topic: "",
    duration: 45,
    feedback: "",
    rating: 3 as Rating,
    areasToImprove: "",
  });

  const resetForm = () => {
    setFormData({
      type: "behavioral",
      date: getTodayString(),
      partner: "",
      topic: "",
      duration: 45,
      feedback: "",
      rating: 3,
      areasToImprove: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockData = {
      ...formData,
      areasToImprove: formData.areasToImprove.split(",").map((a) => a.trim()).filter(Boolean),
    };

    if (editingMock) {
      updateMock(editingMock.id, mockData);
    } else {
      addMock(mockData);
    }
    setShowForm(false);
    setEditingMock(null);
    resetForm();
  };

  const handleEdit = (mock: MockInterview) => {
    setEditingMock(mock);
    setFormData({
      type: mock.type,
      date: mock.date,
      partner: mock.partner,
      topic: mock.topic,
      duration: mock.duration,
      feedback: mock.feedback,
      rating: mock.rating,
      areasToImprove: mock.areasToImprove.join(", "),
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this mock?")) {
      deleteMock(id);
    }
  };

  // Sort by date (newest first)
  const sortedMocks = [...data.mocks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate averages
  const avgRating = data.mocks.length > 0
    ? (data.mocks.reduce((sum, m) => sum + m.rating, 0) / data.mocks.length).toFixed(1)
    : "-";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mock Interviews</h1>
          <p className="text-muted-foreground mt-1">
            {data.mocks.length} completed &middot; Avg rating: {avgRating}/5
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingMock(null);
            setShowForm(true);
          }}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          + Log Mock
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingMock ? "Edit Mock" : "Log Mock Interview"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type</label>
                <div className="flex flex-wrap gap-2">
                  {mockTypes.map((type) => {
                    const config = MOCK_TYPE_CONFIG[type];
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                          formData.type === type
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
                <label className="block text-sm font-medium text-foreground mb-1">Partner</label>
                <input
                  type="text"
                  required
                  value={formData.partner}
                  onChange={(e) => setFormData({ ...formData, partner: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="Who conducted the mock?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Topic</label>
                <input
                  type="text"
                  required
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="e.g., Leadership & conflict resolution"
                />
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
                      onClick={() => setFormData({ ...formData, rating: rating as Rating })}
                      className={`w-10 h-10 rounded-md text-sm font-medium border transition-colors ${
                        formData.rating === rating
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
                <label className="block text-sm font-medium text-foreground mb-1">Feedback</label>
                <textarea
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="Key feedback received..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Areas to Improve (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.areasToImprove}
                  onChange={(e) => setFormData({ ...formData, areasToImprove: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="e.g., Story length, Cloud framing"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingMock(null);
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
                  {editingMock ? "Update Mock" : "Log Mock"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mocks List */}
      {data.mocks.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <div className="text-4xl mb-4">🎭</div>
          <div className="text-lg font-medium text-foreground mb-2">No mocks logged yet</div>
          <div className="text-muted-foreground mb-4">
            Complete 2-3 mocks per week for best results
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Log Your First Mock
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedMocks.map((mock) => (
            <div
              key={mock.id}
              className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <StatusBadge type="mock" status={mock.type} />
                    <span className="text-sm text-muted-foreground">{formatDate(mock.date)}</span>
                    <span className="text-sm text-muted-foreground">{mock.duration} min</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{mock.topic}</h3>
                  <p className="text-sm text-muted-foreground mt-1">with {mock.partner}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{mock.rating}</div>
                    <div className="text-xs text-muted-foreground">/ 5</div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(mock)}
                      className="p-1.5 text-muted-foreground hover:text-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(mock.id)}
                      className="p-1.5 text-muted-foreground hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {mock.feedback && (
                <p className="text-sm text-foreground mt-3 pt-3 border-t border-border">
                  {mock.feedback}
                </p>
              )}

              {mock.areasToImprove.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {mock.areasToImprove.map((area, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-amber-500/15 text-amber-400 rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MocksPage() {
  return (
    <GTMLayout>
      <MocksContent />
    </GTMLayout>
  );
}
