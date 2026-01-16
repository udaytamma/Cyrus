# Cyrus Project - Design Rules & Patterns

> Project-specific design conventions and component patterns for the Cyrus portfolio site.

## Page Layout Patterns

### Sidebar Layouts (Knowledge Base, System Design)

Pages with sidebars follow these consistent patterns:

1. **Desktop Sidebar**
   - Width: 280px (open), 60px (collapsed)
   - Sticky positioning: `sticky top-[60px] h-[calc(100vh-60px)]`
   - Background: `bg-muted/50`
   - Border: `border-r border-border`

2. **Mobile Sidebar**
   - Full-width horizontal layout OR slide-out overlay
   - No collapse button on mobile (always visible or overlay)

3. **Collapse Button**
   - Use shared `SidebarCollapseButton` component (`/src/components/SidebarCollapseButton.tsx`)
   - Two position modes:
     - `position="edge"` - sits on sidebar edge (System Design style)
     - `position="fixed"` - fixed position with configurable `openLeftOffset` (Knowledge Base style)
   - Consistent styling: circular, 24px, with chevron icon

### Navigation Components

1. **Bottom Navigation Links**
   - Include prev/next document navigation where applicable
   - "Back to [Parent]" link centered below prev/next
   - Styling: subtle border-top, muted background
   - Chevron icons for prev (left) and next (right)

2. **Scroll Progress**
   - Global horizontal progress bar at top of page
   - Located in `layout.tsx` - do NOT duplicate in individual pages
   - Removed duplicate from `SystemDesignLayout.tsx`

## Shared Components

### Universal Components (use these, don't recreate)

| Component | Location | Usage |
|-----------|----------|-------|
| `SidebarCollapseButton` | `/src/components/SidebarCollapseButton.tsx` | Sidebar expand/collapse toggle |
| `ScrollProgress` | `/src/components/ScrollProgress.tsx` | Global progress bar (in layout.tsx) |
| `AuthGate` | `/src/components/AuthGate.tsx` | Password protection wrapper |

### Component Guidelines

- When adding sidebar collapse functionality, import `SidebarCollapseButton` rather than creating inline buttons
- Progress indicators are handled globally - individual pages should not add their own
- Mobile responsiveness should use slide-out overlays or horizontal layouts for sidebars

## Mobile Responsiveness

### Breakpoints

- Mobile: `< 768px` (detected via `useIsMobile()` hook pattern)
- Desktop: `>= 768px`

### Sidebar Behavior

**Knowledge Base Pattern:**
- Mobile: Slide-out overlay from left, close button in header
- Desktop: Collapsible with `SidebarCollapseButton`

**System Design Pattern:**
- Mobile: Horizontal nav bar at top (pills/chips layout)
- Desktop: Vertical sidebar with collapse button

### Table Responsiveness

In markdown content, tables should:
- Use `overflow-x: auto` on wrapper div
- Apply `whitespace-nowrap` to prevent text wrapping
- Min-width on cells for readability

## Content Organization

### Knowledge Base Documents

Interview Questions should be consolidated at the end of each document:
- Extract from individual sections during synthesis
- Organize by topic/section with `### [Section Name]` headers
- Single `## Interview Questions` section at document end

### Document Structure

```
# Title

[Main content sections]

---

## Interview Questions

### Topic 1
[Questions]

### Topic 2
[Questions]

---

## Key Takeaways
[Summary points]
```

## File Locations

| Purpose | Path |
|---------|------|
| Shared components | `/src/components/` |
| Layout components | `/src/components/*Layout.tsx` |
| Page-specific components | Within page directory |
| Knowledge Base docs | `/gemini-responses/` (synced to `/src/data/`) |
| System Design content | `/src/app/nebula/system-design/` |

## Style Conventions

### Colors

- Primary: Goldenrod (`#DAA520`)
- Active state: `border-primary bg-primary/10 text-primary`
- Muted: `text-muted-foreground`
- Hover: `hover:text-primary hover:bg-primary/10`

### Transitions

- Standard duration: `transition-all duration-300`
- Sidebar collapse: `transition-all duration-300`
- Button hover: `transition-colors`

### Spacing

- Page padding (desktop): `p-8`
- Page padding (mobile): `p-4`
- Section gaps: `gap-4` or `space-y-4`
