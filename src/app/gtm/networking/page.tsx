"use client";

import { useState } from "react";
import { GTMLayout, StatusBadge } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import {
  NetworkingContact,
  NetworkingStatus,
  ConnectionType,
  NETWORKING_STATUS_CONFIG,
} from "@/types/gtm";
import { formatDate, getTodayString } from "@/lib/gtm-utils";

const statusOptions: NetworkingStatus[] = [
  "identified",
  "reached-out",
  "responded",
  "scheduled",
  "completed",
  "follow-up",
];

const connectionTypes: { value: ConnectionType; label: string }[] = [
  { value: "recruiter", label: "Recruiter" },
  { value: "hiring-manager", label: "Hiring Manager" },
  { value: "employee", label: "Employee" },
  { value: "alumni", label: "Alumni" },
];

function NetworkingContent() {
  const { data, addNetworking, updateNetworking, deleteNetworking } = useGTM();
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState<NetworkingContact | null>(null);
  const [filterStatus, setFilterStatus] = useState<NetworkingStatus | "all">("all");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    status: "identified" as NetworkingStatus,
    linkedinUrl: "",
    email: "",
    connectionType: "employee" as ConnectionType,
    notes: "",
    lastContact: null as string | null,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      role: "",
      status: "identified",
      linkedinUrl: "",
      email: "",
      connectionType: "employee",
      notes: "",
      lastContact: null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = {
      ...formData,
      linkedinUrl: formData.linkedinUrl || null,
      email: formData.email || null,
    };

    if (editingContact) {
      updateNetworking(editingContact.id, contactData);
    } else {
      addNetworking(contactData);
    }
    setShowForm(false);
    setEditingContact(null);
    resetForm();
  };

  const handleEdit = (contact: NetworkingContact) => {
    setEditingContact(contact);
    setFormData({
      name: contact.name,
      company: contact.company,
      role: contact.role,
      status: contact.status,
      linkedinUrl: contact.linkedinUrl || "",
      email: contact.email || "",
      connectionType: contact.connectionType,
      notes: contact.notes,
      lastContact: contact.lastContact,
    });
    setShowForm(true);
  };

  const handleStatusChange = (id: string, status: NetworkingStatus) => {
    updateNetworking(id, {
      status,
      lastContact: status !== "identified" ? getTodayString() : null,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteNetworking(id);
    }
  };

  // Filter contacts
  const filteredContacts = data.networking.filter((contact) => {
    if (filterStatus === "all") return true;
    return contact.status === filterStatus;
  });

  // Sort by last contact (newest first), then by created date
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (a.lastContact && b.lastContact) {
      return new Date(b.lastContact).getTime() - new Date(a.lastContact).getTime();
    }
    if (a.lastContact) return -1;
    if (b.lastContact) return 1;
    return b.createdAt - a.createdAt;
  });

  // Count by status
  const statusCounts = data.networking.reduce(
    (acc, contact) => {
      acc[contact.status] = (acc[contact.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Networking</h1>
          <p className="text-muted-foreground mt-1">
            {data.networking.length} contacts &middot; Build your referral network
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setEditingContact(null);
            setShowForm(true);
          }}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          + Add Contact
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {editingContact ? "Edit Contact" : "Add Contact"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    placeholder="Google"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                    placeholder="Senior TPM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Type</label>
                  <select
                    value={formData.connectionType}
                    onChange={(e) =>
                      setFormData({ ...formData, connectionType: e.target.value as ConnectionType })
                    }
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  >
                    {connectionTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => {
                    const config = NETWORKING_STATUS_CONFIG[status];
                    return (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFormData({ ...formData, status })}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                          formData.status === status
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
                <label className="block text-sm font-medium text-foreground mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder="How you know them, conversation notes..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingContact(null);
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
                  {editingContact ? "Update Contact" : "Add Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterStatus("all")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
            filterStatus === "all"
              ? "bg-primary/10 text-primary border-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          All ({data.networking.length})
        </button>
        {statusOptions.map((status) => {
          const config = NETWORKING_STATUS_CONFIG[status];
          const count = statusCounts[status] || 0;
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

      {/* Contacts List */}
      {sortedContacts.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <div className="text-4xl mb-4">🤝</div>
          <div className="text-lg font-medium text-foreground mb-2">No contacts yet</div>
          <div className="text-muted-foreground mb-4">
            Add contacts to track your networking outreach
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Add Your First Contact
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {sortedContacts.map((contact) => (
            <div
              key={contact.id}
              className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-foreground">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {contact.role} at {contact.company}
                  </p>
                </div>
                <StatusBadge type="networking" status={contact.status} />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                  {connectionTypes.find((t) => t.value === contact.connectionType)?.label}
                </span>
                {contact.lastContact && (
                  <span className="text-xs text-muted-foreground">
                    Last: {formatDate(contact.lastContact)}
                  </span>
                )}
              </div>

              {contact.notes && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{contact.notes}</p>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex gap-2">
                  {contact.linkedinUrl && (
                    <a
                      href={contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs text-primary hover:underline"
                    >
                      Email
                    </a>
                  )}
                </div>
                <div className="flex gap-1">
                  <select
                    value={contact.status}
                    onChange={(e) =>
                      handleStatusChange(contact.id, e.target.value as NetworkingStatus)
                    }
                    className="text-xs px-2 py-1 rounded border border-border bg-background text-foreground"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {NETWORKING_STATUS_CONFIG[status].label}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleEdit(contact)}
                    className="p-1 text-muted-foreground hover:text-primary text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="p-1 text-muted-foreground hover:text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NetworkingPage() {
  return (
    <GTMLayout>
      <NetworkingContent />
    </GTMLayout>
  );
}
