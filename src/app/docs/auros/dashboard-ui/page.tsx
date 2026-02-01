import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Dashboard UI | Auros",
  description: "React dashboard design and components for Auros job search tracker",
};

export default function DashboardUIPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Dashboard UI</h1>

        <p className="lead">
          The Auros dashboard is a React application built with Vite and TypeScript. It provides
          job listing, filtering, status tracking, charts, and CSV export functionality.
        </p>

        <hr />

        <h2>Component Architecture</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph App["App Shell"]
        HEADER[Header]
        MAIN[Main Content]
    end

    subgraph Header
        LOGO[Logo]
        STATS[Quick Stats]
        TRIGGER[Trigger Scan Button]
        SCAN_STATUS[Scan Status Indicator]
    end

    subgraph Main["Main Content"]
        FILTER[FilterBar]
        TABLE[JobTable]
        CHARTS[Charts Section]
    end

    subgraph FilterBar
        SEARCH[Search Input]
        COMPANY_F[Company Filter]
        STATUS_F[Status Filter]
        SCORE_F[Score Range]
        EXPORT[Export CSV]
    end

    subgraph JobTable
        SORT[Sort Headers]
        ROWS[JobRow Components]
        PAGINATION[Pagination]
    end

    subgraph JobRow
        TITLE[Job Title + Link]
        COMPANY[Company Name]
        SCORE_BADGE[Match Score Badge]
        SALARY_CELL[SalaryCell]
        MODE_BADGE[Work Mode Badge]
        STATUS_SELECT[Status Dropdown]
    end

    subgraph Charts
        COMPANY_CHART[Jobs by Company]
        SCORE_DIST[Score Distribution]
        TIMELINE[Jobs Over Time]
    end

    App --> Header
    App --> Main
    FilterBar --> TABLE
    TABLE --> JobRow
    Main --> CHARTS`}
        />

        <h2>Project Structure</h2>

        <CopyableCodeBlock
          language="text"
          title="ui/ directory structure"
          code={`ui/
├── src/
│   ├── main.tsx                    # Entry point
│   ├── App.tsx                     # Root component
│   ├── api/
│   │   └── client.ts               # API client (fetch wrapper)
│   ├── components/
│   │   ├── Header.tsx              # App header with stats
│   │   ├── FilterBar.tsx           # Search and filter controls
│   │   ├── JobTable.tsx            # Main job listing table
│   │   ├── JobRow.tsx              # Individual job row
│   │   ├── SalaryCell.tsx          # Salary with source tooltip
│   │   ├── StatusBadge.tsx         # Status indicator badges
│   │   ├── ScoreBadge.tsx          # Match score badge
│   │   ├── WorkModeBadge.tsx       # Remote/Hybrid/Onsite badge
│   │   ├── Charts.tsx              # Charts container
│   │   ├── Pagination.tsx          # Table pagination
│   │   └── ExportButton.tsx        # CSV export button
│   ├── hooks/
│   │   ├── useJobs.ts              # Job data fetching
│   │   ├── useStats.ts             # Dashboard stats
│   │   └── useScanStatus.ts        # Scan status polling
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   └── utils/
│       └── format.ts               # Formatting utilities
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js`}
        />

        <h2>Type Definitions</h2>

        <CopyableCodeBlock
          language="typescript"
          title="types/index.ts"
          code={`export interface Job {
  id: string;
  company_id: string;
  company_name: string;
  title: string;
  primary_function: 'TPM' | 'PM' | 'Platform' | 'SRE' | 'AI/ML' | 'Other';
  url: string;
  yoe_min: number | null;
  yoe_max: number | null;
  yoe_source: 'extracted' | 'inferred' | null;
  salary_min: number | null;
  salary_max: number | null;
  salary_source: 'jd' | 'levels' | 'glassdoor' | 'ai' | null;
  salary_confidence: number | null;
  work_mode: 'remote' | 'hybrid' | 'onsite' | 'unclear';
  location: string | null;
  match_score: number;
  status: 'new' | 'bookmarked' | 'applied' | 'hidden';
  first_seen: string;
  last_seen: string;
}

export interface Company {
  id: string;
  name: string;
  careers_url: string;
  tier: 1 | 2 | 3;
  enabled: boolean;
  last_scraped: string | null;
}

export interface DashboardStats {
  total_jobs: number;
  new_jobs: number;
  bookmarked: number;
  applied: number;
  hidden: number;
  last_scan: string | null;
  by_company: Record<string, number>;
  score_buckets: Record<string, number>;
  new_jobs_by_day: Record<string, number>;
}

export interface ScanStatus {
  status: 'idle' | 'running' | 'completed' | 'cancelled';
  started_at: string | null;
  completed_at: string | null;
  companies_scanned: number;
  jobs_found: number;
  jobs_new: number;
  errors: string[];
}

export interface JobFilters {
  search: string;
  company_id: string | null;
  status: string | null;
  min_score: number;
  work_mode: string | null;
}

export type SortField = 'match_score' | 'first_seen' | 'salary_max' | 'company_name';
export type SortDirection = 'asc' | 'desc';`}
        />

        <h2>API Client</h2>

        <CopyableCodeBlock
          language="typescript"
          title="api/client.ts"
          code={`const API_BASE = 'http://localhost:8008';

class ApiClient {
  private async fetch<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(\`\${API_BASE}\${path}\`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(\`API error: \${response.status}\`);
    }

    return response.json();
  }

  // Jobs
  async getJobs(params?: URLSearchParams): Promise<Job[]> {
    const query = params ? \`?\${params.toString()}\` : '';
    return this.fetch<Job[]>(\`/jobs\${query}\`);
  }

  async getJob(id: string): Promise<Job> {
    return this.fetch<Job>(\`/jobs/\${id}\`);
  }

  async updateJobStatus(
    id: string,
    status: Job['status']
  ): Promise<Job> {
    return this.fetch<Job>(\`/jobs/\${id}/status\`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async exportJobsCsv(): Promise<Blob> {
    const response = await fetch(\`\${API_BASE}/jobs/export/csv\`);
    return response.blob();
  }

  // Search
  async triggerScan(): Promise<{ status: 'started' | 'running' }> {
    return this.fetch<{ status: 'started' | 'running' }>('/search/trigger', {
      method: 'POST',
    });
  }

  async getScanStatus(): Promise<ScanStatus> {
    return this.fetch<ScanStatus>('/search/status');
  }

  // Companies
  async getCompanies(): Promise<Company[]> {
    return this.fetch<Company[]>('/companies');
  }

  async toggleCompany(
    id: string,
    enabled: boolean
  ): Promise<Company> {
    return this.fetch<Company>(\`/companies/\${id}\`, {
      method: 'PATCH',
      body: JSON.stringify({ enabled }),
    });
  }

  // Stats
  async getStats(): Promise<DashboardStats> {
    return this.fetch<DashboardStats>('/stats');
  }

  // Health
  async getHealth(): Promise<{
    status: string;
    components: Record<string, boolean>;
  }> {
    return this.fetch('/health');
  }
}

export const api = new ApiClient();`}
        />

        <h2>Data Fetching Hooks</h2>

        <CopyableCodeBlock
          language="typescript"
          title="hooks/useJobs.ts"
          code={`import { useState, useEffect, useCallback } from 'react';
import { api } from '../api/client';
import type { Job, JobFilters, SortField, SortDirection } from '../types';

interface UseJobsReturn {
  jobs: Job[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  updateStatus: (id: string, status: Job['status']) => Promise<void>;
}

export function useJobs(
  filters: JobFilters,
  sort: { field: SortField; direction: SortDirection }
): UseJobsReturn {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();

      if (filters.search) {
        params.set('search', filters.search);
      }
      if (filters.company_id) {
        params.set('company_id', filters.company_id);
      }
      if (filters.status) {
        params.set('status', filters.status);
      }
      if (filters.min_score > 0) {
        params.set('min_score', filters.min_score.toString());
      }
      if (filters.work_mode) {
        params.set('work_mode', filters.work_mode);
      }

      params.set('sort_by', sort.field);
      params.set('sort_dir', sort.direction);

      const data = await api.getJobs(params);
      setJobs(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch jobs'));
    } finally {
      setLoading(false);
    }
  }, [filters, sort]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const updateStatus = async (id: string, status: Job['status']) => {
    try {
      const updated = await api.updateJobStatus(id, status);
      setJobs((prev) =>
        prev.map((job) => (job.id === id ? updated : job))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
      throw err;
    }
  };

  return { jobs, loading, error, refetch: fetchJobs, updateStatus };
}`}
        />

        <CopyableCodeBlock
          language="typescript"
          title="hooks/useScanStatus.ts"
          code={`import { useState, useEffect, useRef } from 'react';
import { api } from '../api/client';
import type { ScanStatus } from '../types';

interface UseScanStatusReturn {
  status: ScanStatus | null;
  isRunning: boolean;
  triggerScan: () => Promise<void>;
}

export function useScanStatus(pollInterval = 2000): UseScanStatusReturn {
  const [status, setStatus] = useState<ScanStatus | null>(null);
  const intervalRef = useRef<number | null>(null);

  const fetchStatus = async () => {
    try {
      const data = await api.getScanStatus();
      setStatus(data);
      return data.is_running;
    } catch (err) {
      console.error('Failed to fetch scan status:', err);
      return false;
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchStatus().then((isRunning) => {
      if (isRunning) {
        // Start polling if scan is running
        intervalRef.current = window.setInterval(async () => {
          const stillRunning = await fetchStatus();
          if (!stillRunning && intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }, pollInterval);
      }
    });

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [pollInterval]);

  const triggerScan = async () => {
    try {
      await api.triggerScan();

      // Start polling
      intervalRef.current = window.setInterval(async () => {
        const stillRunning = await fetchStatus();
        if (!stillRunning && intervalRef.current) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }, pollInterval);
    } catch (err) {
      console.error('Failed to trigger scan:', err);
      throw err;
    }
  };

  return {
    status,
    isRunning: status?.is_running ?? false,
    triggerScan,
  };
}`}
        />

        <h2>Core Components</h2>

        <h3>JobTable</h3>

        <CopyableCodeBlock
          language="tsx"
          title="components/JobTable.tsx"
          code={`import { useState } from 'react';
import { JobRow } from './JobRow';
import { Pagination } from './Pagination';
import type { Job, SortField, SortDirection } from '../types';

interface JobTableProps {
  jobs: Job[];
  loading: boolean;
  sort: { field: SortField; direction: SortDirection };
  onSort: (field: SortField) => void;
  onStatusChange: (id: string, status: Job['status']) => Promise<void>;
}

const ITEMS_PER_PAGE = 25;

export function JobTable({
  jobs,
  loading,
  sort,
  onSort,
  onStatusChange,
}: JobTableProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleJobs = jobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderSortHeader = (field: SortField, label: string) => {
    const isActive = sort.field === field;
    const arrow = isActive
      ? sort.direction === 'asc' ? ' ↑' : ' ↓'
      : '';

    return (
      <th
        className="px-4 py-3 text-left cursor-pointer hover:bg-gray-100"
        onClick={() => onSort(field)}
      >
        {label}{arrow}
      </th>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b">
            {renderSortHeader('match_score', 'Score')}
            <th className="px-4 py-3 text-left">Title</th>
            {renderSortHeader('company_name', 'Company')}
            {renderSortHeader('salary_max', 'Salary')}
            <th className="px-4 py-3 text-left">YOE</th>
            <th className="px-4 py-3 text-left">Mode</th>
            <th className="px-4 py-3 text-left">Location</th>
            {renderSortHeader('first_seen', 'Found')}
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleJobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onStatusChange={onStatusChange}
            />
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}`}
        />

        <h3>JobRow</h3>

        <CopyableCodeBlock
          language="tsx"
          title="components/JobRow.tsx"
          code={`import { ScoreBadge } from './ScoreBadge';
import { SalaryCell } from './SalaryCell';
import { WorkModeBadge } from './WorkModeBadge';
import type { Job } from '../types';

interface JobRowProps {
  job: Job;
  onStatusChange: (id: string, status: Job['status']) => Promise<void>;
}

export function JobRow({ job, onStatusChange }: JobRowProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const formatYoe = () => {
    if (!job.yoe_min && !job.yoe_max) return '-';
    if (job.yoe_min === job.yoe_max) return \`\${job.yoe_min}y\`;
    return \`\${job.yoe_min || '?'}-\${job.yoe_max || '?'}y\`;
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <ScoreBadge score={job.match_score} />
      </td>
      <td className="px-4 py-3">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          {job.title}
        </a>
        <div className="text-xs text-gray-500 mt-1">
          {job.primary_function}
        </div>
      </td>
      <td className="px-4 py-3">{job.company_name}</td>
      <td className="px-4 py-3">
        <SalaryCell
          min={job.salary_min}
          max={job.salary_max}
          source={job.salary_source}
          confidence={job.salary_confidence}
        />
      </td>
      <td className="px-4 py-3">
        <span className={job.yoe_source === 'inferred' ? 'italic text-gray-500' : ''}>
          {formatYoe()}
        </span>
        {job.yoe_source === 'inferred' && (
          <span className="ml-1 text-xs text-gray-400">*</span>
        )}
      </td>
      <td className="px-4 py-3">
        <WorkModeBadge mode={job.work_mode} />
      </td>
      <td className="px-4 py-3 text-sm">{job.location || '-'}</td>
      <td className="px-4 py-3 text-sm text-gray-500">
        {formatDate(job.first_seen)}
      </td>
      <td className="px-4 py-3">
        <select
          value={job.status}
          onChange={(e) => onStatusChange(job.id, e.target.value as Job['status'])}
          className="text-sm border rounded px-2 py-1"
        >
          <option value="new">New</option>
          <option value="bookmarked">Bookmarked</option>
          <option value="applied">Applied</option>
          <option value="hidden">Hidden</option>
        </select>
      </td>
    </tr>
  );
}`}
        />

        <h3>SalaryCell</h3>

        <CopyableCodeBlock
          language="tsx"
          title="components/SalaryCell.tsx"
          code={`interface SalaryCellProps {
  min: number | null;
  max: number | null;
  source: 'jd' | 'levels' | 'glassdoor' | 'ai' | null;
  confidence: number | null;
}

const SOURCE_LABELS: Record<string, { label: string; color: string }> = {
  jd: { label: 'JD', color: 'bg-green-100 text-green-800' },
  levels: { label: 'Levels', color: 'bg-blue-100 text-blue-800' },
  glassdoor: { label: 'GD', color: 'bg-purple-100 text-purple-800' },
  ai: { label: 'AI', color: 'bg-yellow-100 text-yellow-800' },
};

export function SalaryCell({ min, max, source, confidence }: SalaryCellProps) {
  // Don't show if below confidence threshold
  if (source === 'ai' && confidence !== null && confidence < 0.6) {
    return <span className="text-gray-400">-</span>;
  }

  if (!min && !max) {
    return <span className="text-gray-400">-</span>;
  }

  const formatSalary = (value: number) => {
    if (value >= 1000) {
      return \`$\${Math.round(value / 1000)}k\`;
    }
    return \`$\${value}k\`;
  };

  const salaryText = min && max
    ? \`\${formatSalary(min)} - \${formatSalary(max)}\`
    : min
    ? \`\${formatSalary(min)}+\`
    : \`Up to \${formatSalary(max!)}\`;

  const sourceInfo = source ? SOURCE_LABELS[source] : null;

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-sm">{salaryText}</span>
      {sourceInfo && (
        <span
          className={\`text-xs px-1.5 py-0.5 rounded \${sourceInfo.color}\`}
          title={\`Source: \${source}\${confidence ? \` (conf: \${Math.round(confidence * 100)}%)\` : ''}\`}
        >
          {sourceInfo.label}
        </span>
      )}
    </div>
  );
}`}
        />

        <h3>ScoreBadge</h3>

        <CopyableCodeBlock
          language="tsx"
          title="components/ScoreBadge.tsx"
          code={`interface ScoreBadgeProps {
  score: number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  const percentage = Math.round(score * 100);

  const getColor = () => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 70) return 'bg-yellow-500';
    if (percentage >= 50) return 'bg-orange-500';
    return 'bg-gray-400';
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={\`w-10 h-2 rounded-full bg-gray-200 overflow-hidden\`}
      >
        <div
          className={\`h-full \${getColor()} transition-all\`}
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
      <span className="text-sm font-mono w-10">{percentage}%</span>
    </div>
  );
}`}
        />

        <h3>FilterBar</h3>

        <CopyableCodeBlock
          language="tsx"
          title="components/FilterBar.tsx"
          code={`import { useState, useEffect } from 'react';
import { api } from '../api/client';
import { ExportButton } from './ExportButton';
import type { JobFilters, Company } from '../types';

interface FilterBarProps {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
}

export function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    api.getCompanies().then(setCompanies);
  }, []);

  const updateFilter = <K extends keyof JobFilters>(
    key: K,
    value: JobFilters[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
      {/* Search */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={filters.search}
        onChange={(e) => updateFilter('search', e.target.value)}
        className="px-3 py-2 border rounded-lg w-64"
      />

      {/* Company Filter */}
      <select
        value={filters.company_id || ''}
        onChange={(e) => updateFilter('company_id', e.target.value || null)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">All Companies</option>
        {companies.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {/* Status Filter */}
      <select
        value={filters.status || ''}
        onChange={(e) => updateFilter('status', e.target.value || null)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">All Statuses</option>
        <option value="new">New</option>
        <option value="bookmarked">Bookmarked</option>
        <option value="applied">Applied</option>
        <option value="hidden">Hidden</option>
      </select>

      {/* Work Mode Filter */}
      <select
        value={filters.work_mode || ''}
        onChange={(e) => updateFilter('work_mode', e.target.value || null)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">Any Mode</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
        <option value="onsite">Onsite</option>
      </select>

      {/* Min Score */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Min Score:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.min_score * 100}
          onChange={(e) =>
            updateFilter('min_score', parseInt(e.target.value) / 100)
          }
          className="w-24"
        />
        <span className="text-sm font-mono w-10">
          {Math.round(filters.min_score * 100)}%
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Export */}
      <ExportButton />
    </div>
  );
}`}
        />

        <h2>State Flow</h2>

        <MermaidDiagram
          chart={`stateDiagram-v2
    [*] --> Idle

    state Idle {
        [*] --> Loading
        Loading --> Displaying: Data fetched
        Displaying --> Loading: Filters changed
        Displaying --> Updating: Status change
        Updating --> Displaying: Update complete
    }

    state Scanning {
        [*] --> InProgress
        InProgress --> InProgress: Poll status
        InProgress --> Complete: Scan finished
    }

    Idle --> Scanning: Trigger scan
    Scanning --> Idle: Scan complete`}
        />

        <h2>Dashboard Layout</h2>

        <CopyableCodeBlock
          language="tsx"
          title="pages/Dashboard.tsx"
          code={`import { useState, useCallback } from 'react';
import { Header } from '../components/Header';
import { FilterBar } from '../components/FilterBar';
import { JobTable } from '../components/JobTable';
import { Charts } from '../components/Charts';
import { useJobs } from '../hooks/useJobs';
import { useStats } from '../hooks/useStats';
import { useScanStatus } from '../hooks/useScanStatus';
import type { JobFilters, SortField, SortDirection } from '../types';

const DEFAULT_FILTERS: JobFilters = {
  search: '',
  company_id: null,
  status: null,
  min_score: 0,
  work_mode: null,
};

export function Dashboard() {
  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<{
    field: SortField;
    direction: SortDirection;
  }>({
    field: 'match_score',
    direction: 'desc',
  });

  const { jobs, loading, refetch, updateStatus } = useJobs(filters, sort);
  const { stats, refetch: refetchStats } = useStats();
  const { status: scanStatus, isRunning, triggerScan } = useScanStatus();

  const handleSort = useCallback((field: SortField) => {
    setSort((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }, []);

  const handleScanTrigger = async () => {
    await triggerScan();
    // Refetch data when scan completes
    setTimeout(() => {
      refetch();
      refetchStats();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        stats={stats}
        scanStatus={scanStatus}
        isScanning={isRunning}
        onTriggerScan={handleScanTrigger}
      />

      <main className="container mx-auto px-4 py-6">
        <FilterBar filters={filters} onFiltersChange={setFilters} />

        <div className="mt-6 bg-white rounded-lg shadow">
          <JobTable
            jobs={jobs}
            loading={loading}
            sort={sort}
            onSort={handleSort}
            onStatusChange={updateStatus}
          />
        </div>

        <div className="mt-6">
          <Charts jobs={jobs} />
        </div>
      </main>
    </div>
  );
}`}
        />

        <h2>Charts</h2>

        <p>
          The dashboard includes three visualization charts using a lightweight charting
          library (e.g., Recharts or Chart.js):
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Chart</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Jobs by Company</td>
                <td className="px-4 py-3">Bar Chart</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Horizontal bar chart showing job count per company
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Score Distribution</td>
                <td className="px-4 py-3">Histogram</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Distribution of match scores in 10% buckets
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Jobs Over Time</td>
                <td className="px-4 py-3">Line Chart</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Cumulative new jobs found per day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>CSV Export</h2>

        <CopyableCodeBlock
          language="tsx"
          title="components/ExportButton.tsx"
          code={`import { useState } from 'react';
import { api } from '../api/client';

export function ExportButton() {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);

    try {
      const blob = await api.exportJobsCsv();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = \`auros-jobs-\${new Date().toISOString().split('T')[0]}.csv\`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? 'Exporting...' : 'Export CSV'}
    </button>
  );
}`}
        />

        <h2>Styling</h2>

        <p>
          The dashboard uses Tailwind CSS for styling with a clean, professional design.
          Key design principles:
        </p>

        <ul>
          <li>
            <strong>Card-based layout:</strong> Content grouped in white cards with shadows
          </li>
          <li>
            <strong>Color coding:</strong> Match scores use green/yellow/orange gradient
          </li>
          <li>
            <strong>Source badges:</strong> Salary sources clearly indicated
          </li>
          <li>
            <strong>Responsive:</strong> Works on desktop and tablet viewports
          </li>
          <li>
            <strong>Loading states:</strong> Spinners and skeleton loaders for async data
          </li>
        </ul>

        <h2>Vite Configuration</h2>

        <CopyableCodeBlock
          language="typescript"
          title="vite.config.ts"
          code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
});`}
        />

        <h2>Dependencies</h2>

        <CopyableCodeBlock
          language="json"
          title="package.json (relevant sections)"
          code={`{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.10.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}`}
        />
      </article>
    </AurosDocsLayout>
  );
}
