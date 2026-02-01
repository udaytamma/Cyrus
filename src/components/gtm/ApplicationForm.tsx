"use client";

import { useState, useEffect } from "react";
import { Application, ApplicationStatus, APPLICATION_STATUS_CONFIG } from "@/types/gtm";
import { getTodayString } from "@/lib/gtm-utils";

interface ApplicationFormProps {
  application?: Application;
  onSubmit: (data: Omit<Application, "id" | "createdAt">) => void;
  onCancel: () => void;
}

const statusOptions: ApplicationStatus[] = [
  "researching",
  "applied",
  "screen",
  "technical",
  "loop",
  "offer",
  "rejected",
  "withdrawn",
];

export function ApplicationForm({ application, onSubmit, onCancel }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    team: "",
    status: "researching" as ApplicationStatus,
    appliedDate: null as string | null,
    referralPath: "",
    hiringManager: "",
    jobUrl: "",
    notes: "",
    storyFit: "",
  });

  useEffect(() => {
    if (application) {
      setFormData({
        company: application.company,
        role: application.role,
        team: application.team || "",
        status: application.status,
        appliedDate: application.appliedDate,
        referralPath: application.referralPath || "",
        hiringManager: application.hiringManager || "",
        jobUrl: application.jobUrl || "",
        notes: application.notes,
        storyFit: application.storyFit || "",
      });
    }
  }, [application]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      referralPath: formData.referralPath || null,
      jobUrl: formData.jobUrl || null,
      lastUpdate: new Date().toISOString(),
    });
  };

  const handleStatusChange = (status: ApplicationStatus) => {
    setFormData((prev) => {
      const updates: Partial<typeof formData> = { status };
      // Auto-set applied date when status changes to applied
      if (status === "applied" && !prev.appliedDate) {
        updates.appliedDate = getTodayString();
      }
      return { ...prev, ...updates };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Company and Role */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="e.g., Google"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Role <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="e.g., Senior TPM"
          />
        </div>
      </div>

      {/* Team and Hiring Manager */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Team / Org</label>
          <input
            type="text"
            value={formData.team}
            onChange={(e) => setFormData({ ...formData, team: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="e.g., Cloud Infrastructure"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Hiring Manager</label>
          <input
            type="text"
            value={formData.hiringManager}
            onChange={(e) => setFormData({ ...formData, hiringManager: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="e.g., Jane Doe"
          />
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Status</label>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => {
            const config = APPLICATION_STATUS_CONFIG[status];
            const isSelected = formData.status === status;
            return (
              <button
                key={status}
                type="button"
                onClick={() => handleStatusChange(status)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                  isSelected
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

      {/* Applied Date and Job URL */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Applied Date</label>
          <input
            type="date"
            value={formData.appliedDate || ""}
            onChange={(e) => setFormData({ ...formData, appliedDate: e.target.value || null })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Job URL</label>
          <input
            type="url"
            value={formData.jobUrl}
            onChange={(e) => setFormData({ ...formData, jobUrl: e.target.value })}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Referral Path */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Referral Path</label>
        <input
          type="text"
          value={formData.referralPath}
          onChange={(e) => setFormData({ ...formData, referralPath: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="e.g., Former colleague at company"
        />
      </div>

      {/* Story Fit */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Key Story Fit</label>
        <input
          type="text"
          value={formData.storyFit}
          onChange={(e) => setFormData({ ...formData, storyFit: e.target.value })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="e.g., SRE transformation, FinOps"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="Interview notes, feedback, next steps..."
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t border-border">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {application ? "Update Application" : "Add Application"}
        </button>
      </div>
    </form>
  );
}
