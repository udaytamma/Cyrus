import { MindGamesDocsLayout } from "@/components/MindGamesDocsLayout";

export const metadata = {
  title: "Testing | MindGames",
  description: "Test suite, testing strategy, and coverage details for MindGames mental math training application.",
};

export default function TestingPage() {
  return (
    <MindGamesDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing</h1>

        <p className="lead">
          MindGames uses Jest and React Testing Library for comprehensive testing. This document outlines the testing strategy, test structure, and coverage metrics.
        </p>

        <hr />

        <h2>Test Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Tool</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Version</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Jest</td>
                <td className="px-4 py-3">Test runner and assertion library</td>
                <td className="px-4 py-3 font-mono text-sm">30.x</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">React Testing Library</td>
                <td className="px-4 py-3">Component testing utilities</td>
                <td className="px-4 py-3 font-mono text-sm">14.x</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ts-jest</td>
                <td className="px-4 py-3">TypeScript preprocessor for Jest</td>
                <td className="px-4 py-3 font-mono text-sm">29.x</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">jest-environment-jsdom</td>
                <td className="px-4 py-3">DOM simulation for Node.js</td>
                <td className="px-4 py-3 font-mono text-sm">29.x</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Running Tests</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Run all tests
npm test

# Run in watch mode (re-runs on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage`}
        </pre>

        <hr />

        <h2>Test Structure</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`src/__tests__/
├── problem-generator.test.ts   # Unit tests for core algorithm
├── GameContext.test.tsx        # Integration tests for state
└── OperationMixSlider.test.tsx # Component tests for UI`}
        </pre>

        <hr />

        <h2>Test Categories</h2>

        <h3>1. Unit Tests: Problem Generator</h3>

        <p>
          Tests the core problem generation algorithm including chain generation, operation selection, and bounds validation.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`describe('generateChain', () => {
  it('should create problems where each result feeds into the next', () => {
    const chain = generateChain(DEFAULT_CONFIG);

    let currentValue = chain!.startingNumber;
    for (const problem of chain!.problems) {
      expect(problem.startValue).toBe(currentValue);
      currentValue = problem.result;
    }
  });

  it('should produce clean division results (no decimals)', () => {
    const config = {
      ...DEFAULT_CONFIG,
      operationMix: { add: 0, subtract: 0, multiply: 0, divide: 100 },
    };

    const chain = generateChain(config);
    for (const problem of chain!.problems) {
      if (problem.operation === 'divide') {
        expect(Number.isInteger(problem.result)).toBe(true);
      }
    }
  });
});`}
        </pre>

        <p><strong>Coverage includes:</strong></p>
        <ul>
          <li>Chain generation with various configurations</li>
          <li>Worksheet generation (multiple chains)</li>
          <li>Operation mix selection and weighting</li>
          <li>Bounds validation (maxResult, allowNegativeResults)</li>
          <li>Utility functions (formatNumber, sumOfDigits)</li>
        </ul>

        <h3>2. Integration Tests: GameContext</h3>

        <p>
          Tests the state management flow including worksheet generation, session handling, and answer submission.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`describe('Session Management', () => {
  it('should calculate score on session end', () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    act(() => {
      result.current.generateNewWorksheet();
      result.current.startSession();
    });

    const firstProblem = result.current.state.worksheet!.chains[0].problems[0];
    act(() => {
      result.current.submitAnswer(firstProblem.id, firstProblem.result);
    });

    act(() => {
      result.current.endSession();
    });

    expect(result.current.state.session!.score.correct).toBe(1);
    expect(result.current.state.session!.score.percentage).toBe(100);
  });
});`}
        </pre>

        <p><strong>Coverage includes:</strong></p>
        <ul>
          <li>Initial state verification</li>
          <li>Worksheet generation and storage</li>
          <li>Session start/end lifecycle</li>
          <li>Answer submission and validation</li>
          <li>Chain navigation (next/previous)</li>
          <li>Configuration changes</li>
          <li>Statistics calculation</li>
        </ul>

        <h3>3. Component Tests: OperationMixSlider</h3>

        <p>
          Tests the UI component behavior including preset selection, slider interactions, and constraint enforcement.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`describe('Presets', () => {
  it('should apply Basic preset (40/40/10/10)', () => {
    render(<OperationMixSlider value={defaultMix} onChange={mockOnChange} />);

    fireEvent.click(screen.getByText('Basic'));

    expect(mockOnChange).toHaveBeenCalledWith({
      add: 40,
      subtract: 40,
      multiply: 10,
      divide: 10,
    });
  });

  it('should highlight selected preset', () => {
    const randomMix = { add: 25, subtract: 25, multiply: 25, divide: 25 };
    render(<OperationMixSlider value={randomMix} onChange={mockOnChange} />);

    const randomButton = screen.getByText('Random').closest('button');
    expect(randomButton).toHaveClass('bg-primary-500');
  });
});`}
        </pre>

        <p><strong>Coverage includes:</strong></p>
        <ul>
          <li>Rendering all controls correctly</li>
          <li>Preset button click handling</li>
          <li>Increment/decrement button behavior</li>
          <li>Slider drag interactions</li>
          <li>Minimum (10%) and maximum constraints</li>
          <li>Visual feedback for selected presets</li>
        </ul>

        <hr />

        <h2>Test Configuration</h2>

        <h3>jest.config.js</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
      },
    }],
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};`}
        </pre>

        <h3>jest.setup.ts</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import '@testing-library/jest-dom';

// Mock canvas-confetti (browser API not available in Node)
jest.mock('canvas-confetti', () => jest.fn());

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));`}
        </pre>

        <hr />

        <h2>Coverage Metrics</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Current</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Tests Passing</td>
                <td className="px-4 py-3">100%</td>
                <td className="px-4 py-3">63/63 (100%)</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Pass</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Branches</td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">~75%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Pass</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Functions</td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">~80%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Pass</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Lines</td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">~78%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Pass</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Statements</td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">~78%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Pass</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Testing Best Practices</h2>

        <h3>1. Use act() for State Updates</h3>

        <p>
          Always wrap state-changing operations in <code>act()</code> to ensure React processes updates before assertions:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`act(() => {
  result.current.generateNewWorksheet();
});`}
        </pre>

        <h3>2. Isolate Hook Tests with Wrapper</h3>

        <p>
          Provide context providers when testing hooks that depend on them:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const wrapper = ({ children }) => (
  <GameProvider>{children}</GameProvider>
);

const { result } = renderHook(() => useGame(), { wrapper });`}
        </pre>

        <h3>3. Test User Behavior, Not Implementation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Good: Test what user sees
expect(screen.getByText('Basic')).toBeInTheDocument();

// Avoid: Testing internal state directly
expect(component.state.selectedPreset).toBe('basic');`}
        </pre>

        <h3>4. Use Descriptive Test Names</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`it('should apply Basic preset (40/40/10/10)', () => {});
it('should highlight selected preset', () => {});
it('should respect minimum percentage constraint', () => {});`}
        </pre>

        <hr />

        <h2>Adding New Tests</h2>

        <ol>
          <li>Create test file in <code>src/__tests__/</code></li>
          <li>Import testing utilities and the component/module under test</li>
          <li>Group related tests with <code>describe</code> blocks</li>
          <li>Write individual tests with <code>it</code> blocks</li>
          <li>Run <code>npm test</code> to verify</li>
        </ol>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`}
        </pre>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/mindgames/roadmap"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Roadmap →</div>
            <div className="text-sm text-muted-foreground">Future enhancements</div>
          </a>
          <a
            href="/docs/mindgames"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">← Overview</div>
            <div className="text-sm text-muted-foreground">Back to project overview</div>
          </a>
        </div>
      </article>
    </MindGamesDocsLayout>
  );
}
