"use client";

import { useState, useRef } from "react";
import { GTMLayout } from "@/components/gtm";
import { useGTM } from "@/context/GTMContext";
import { formatDateFull, getCurrentWeek } from "@/lib/gtm-utils";
import { DEFAULT_GTM_SETTINGS } from "@/types/gtm";

function SettingsContent() {
  const { data, updateSettings, exportData, importData, clearAllData } = useGTM();
  const [showImportModal, setShowImportModal] = useState(false);
  const [importJson, setImportJson] = useState("");
  const [importError, setImportError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { settings } = data;
  const currentWeek = getCurrentWeek(settings.startDate);

  const handleExport = () => {
    const jsonData = exportData();
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gtm-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    setImportError("");
    const success = importData(importJson);
    if (success) {
      setShowImportModal(false);
      setImportJson("");
    } else {
      setImportError("Invalid JSON format. Please check your backup file.");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportJson(content);
    };
    reader.readAsText(file);
  };

  const handleClearData = () => {
    if (
      confirm(
        "Are you sure you want to clear ALL data? This action cannot be undone. Consider exporting a backup first."
      )
    ) {
      if (confirm("This will delete all applications, stories, mocks, drills, and contacts. Proceed?")) {
        clearAllData();
      }
    }
  };

  const handleResetSettings = () => {
    if (confirm("Reset all settings to defaults?")) {
      updateSettings(DEFAULT_GTM_SETTINGS);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Configure your GTM campaign</p>
      </div>

      {/* Campaign Settings */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Campaign Settings</h2>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Campaign Start Date
          </label>
          <input
            type="date"
            value={settings.startDate}
            onChange={(e) => updateSettings({ startDate: e.target.value })}
            className="w-full max-w-xs px-3 py-2 rounded-md border border-border bg-background text-foreground"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Currently in Week {currentWeek} (started {formatDateFull(settings.startDate)})
          </p>
        </div>
      </div>

      {/* Weekly Targets */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Weekly Targets</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Applications</label>
            <input
              type="number"
              min={1}
              max={50}
              value={settings.weeklyTargets.applications}
              onChange={(e) =>
                updateSettings({
                  weeklyTargets: {
                    ...settings.weeklyTargets,
                    applications: parseInt(e.target.value) || 12,
                  },
                })
              }
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended: 10-15</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Mock Interviews</label>
            <input
              type="number"
              min={1}
              max={20}
              value={settings.weeklyTargets.mocks}
              onChange={(e) =>
                updateSettings({
                  weeklyTargets: {
                    ...settings.weeklyTargets,
                    mocks: parseInt(e.target.value) || 3,
                  },
                })
              }
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended: 2-3</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              System Design Drills
            </label>
            <input
              type="number"
              min={1}
              max={20}
              value={settings.weeklyTargets.drills}
              onChange={(e) =>
                updateSettings({
                  weeklyTargets: {
                    ...settings.weeklyTargets,
                    drills: parseInt(e.target.value) || 3,
                  },
                })
              }
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended: 2-3</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Networking Outreaches
            </label>
            <input
              type="number"
              min={1}
              max={30}
              value={settings.weeklyTargets.networking}
              onChange={(e) =>
                updateSettings({
                  weeklyTargets: {
                    ...settings.weeklyTargets,
                    networking: parseInt(e.target.value) || 7,
                  },
                })
              }
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended: 5-10</p>
          </div>
        </div>

        <button
          onClick={handleResetSettings}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Reset to defaults
        </button>
      </div>

      {/* Data Management */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Data Management</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-medium text-foreground mb-2">Export Backup</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Download all your data as a JSON file
            </p>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Export Data
            </button>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-medium text-foreground mb-2">Import Backup</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Restore from a previous backup file
            </p>
            <button
              onClick={() => setShowImportModal(true)}
              className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary/10"
            >
              Import Data
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="font-medium text-red-500 mb-2">Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-3">
            This action is irreversible. All your data will be permanently deleted.
          </p>
          <button
            onClick={handleClearData}
            className="px-4 py-2 text-sm font-medium border border-red-500 text-red-500 rounded-md hover:bg-red-500/10"
          >
            Clear All Data
          </button>
        </div>
      </div>

      {/* Storage Info */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Storage Info</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">{data.applications.length}</div>
            <div className="text-sm text-muted-foreground">Applications</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{data.stories.length}</div>
            <div className="text-sm text-muted-foreground">Stories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{data.mocks.length}</div>
            <div className="text-sm text-muted-foreground">Mocks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{data.drills.length}</div>
            <div className="text-sm text-muted-foreground">Drills</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{data.networking.length}</div>
            <div className="text-sm text-muted-foreground">Contacts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{data.dailyRhythm.length}</div>
            <div className="text-sm text-muted-foreground">Rhythm Days</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Last updated: {new Date(data.lastUpdated).toLocaleString()}
        </p>
      </div>

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-lg m-4">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Import Backup</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload JSON file
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Or paste JSON content
                </label>
                <textarea
                  value={importJson}
                  onChange={(e) => setImportJson(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground font-mono text-xs resize-none"
                  placeholder='{"applications": [], "stories": [], ...}'
                />
              </div>

              {importError && <p className="text-sm text-red-500">{importError}</p>}

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => {
                    setShowImportModal(false);
                    setImportJson("");
                    setImportError("");
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImport}
                  disabled={!importJson}
                  className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <GTMLayout>
      <SettingsContent />
    </GTMLayout>
  );
}
