"use client";

import { useState } from "react";
import { GTMLayout, StatusBadge } from "@/components/gtm";
import { ApplicationForm } from "@/components/gtm/ApplicationForm";
import { useGTM } from "@/context/GTMContext";
import { Application, ApplicationStatus, APPLICATION_STATUS_CONFIG } from "@/types/gtm";
import { formatDate } from "@/lib/gtm-utils";

type FilterStatus = ApplicationStatus | "all" | "active";

function ApplicationsContent() {
  const { data, addApplication, updateApplication, deleteApplication } = useGTM();
  const [showForm, setShowForm] = useState(false);
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter applications
  const filteredApplications = data.applications.filter((app) => {
    // Status filter
    if (filterStatus === "active") {
      if (app.status === "rejected" || app.status === "withdrawn") return false;
    } else if (filterStatus !== "all") {
      if (app.status !== filterStatus) return false;
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        app.company.toLowerCase().includes(query) ||
        app.role.toLowerCase().includes(query) ||
        (app.team?.toLowerCase().includes(query) ?? false)
      );
    }

    return true;
  });

  // Sort by last update (newest first)
  const sortedApplications = [...filteredApplications].sort(
    (a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
  );

  const handleSubmit = (appData: Omit<Application, "id" | "createdAt">) => {
    if (editingApp) {
      updateApplication(editingApp.id, appData);
    } else {
      addApplication(appData);
    }
    setShowForm(false);
    setEditingApp(null);
  };

  const handleEdit = (app: Application) => {
    setEditingApp(app);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      deleteApplication(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingApp(null);
  };

  // Count by status
  const statusCounts = data.applications.reduce(
    (acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const activeCount = data.applications.filter(
    (a) => a.status !== "rejected" && a.status !== "withdrawn"
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-1">
            {data.applications.length} total &middot; {activeCount} active
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          + Add Application
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingApp ? "Edit Application" : "Add Application"}
              </h2>
            </div>
            <div className="p-6">
              <ApplicationForm
                application={editingApp || undefined}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search company, role, team..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
              filterStatus === "all"
                ? "bg-primary/10 text-primary border-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            All ({data.applications.length})
          </button>
          <button
            onClick={() => setFilterStatus("active")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
              filterStatus === "active"
                ? "bg-primary/10 text-primary border-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            Active ({activeCount})
          </button>
          {(Object.keys(APPLICATION_STATUS_CONFIG) as ApplicationStatus[]).map((status) => {
            const config = APPLICATION_STATUS_CONFIG[status];
            const count = statusCounts[status] || 0;
            if (count === 0) return null;
            return (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                  filterStatus === status
                    ? `${config.bg} ${config.text} border-current`
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {config.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Applications Table */}
      {sortedApplications.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <div className="text-4xl mb-4">💼</div>
          <div className="text-lg font-medium text-foreground mb-2">No applications yet</div>
          <div className="text-muted-foreground mb-4">Start by adding your first application</div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Add Application
          </button>
        </div>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Applied
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Referral
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sortedApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{app.company}</div>
                      {app.team && (
                        <div className="text-xs text-muted-foreground">{app.team}</div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-foreground">{app.role}</div>
                      {app.jobUrl && (
                        <a
                          href={app.jobUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          View Job &rarr;
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge type="application" status={app.status} />
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {formatDate(app.appliedDate)}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground max-w-[150px] truncate">
                      {app.referralPath || "-"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(app)}
                          className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                          title="Edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(app.id)}
                          className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApplicationsPage() {
  return (
    <GTMLayout>
      <ApplicationsContent />
    </GTMLayout>
  );
}
