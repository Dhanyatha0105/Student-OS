// ============================================================
// Student OS — Graph Visualization Package
// React Flow wrapper components for roadmaps and mindmaps
// ============================================================

// Re-export React Flow essentials
export { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
export type { Node, Edge, NodeTypes, EdgeTypes } from '@xyflow/react';

// ── Custom Node Types ────────────────────────────────────────
// These will be built out as graph visualization develops

// Roadmap Node — color-coded by status, interactive
// export { RoadmapNode } from './nodes/RoadmapNode';

// Mindmap Node — for study engine concept maps
// export { MindmapNode } from './nodes/MindmapNode';

// Skill Node — shows skill level and requirements
// export { SkillNode } from './nodes/SkillNode';

// Milestone Node — checkpoint visualization
// export { MilestoneNode } from './nodes/MilestoneNode';

// ── Custom Edge Types ────────────────────────────────────────
// export { PrerequisiteEdge } from './edges/PrerequisiteEdge';
// export { AlternativeEdge } from './edges/AlternativeEdge';

// ── Layout Utilities ─────────────────────────────────────────
// export { autoLayout } from './layout/autoLayout';
// export { dagLayout } from './layout/dagLayout';

// ── Constants ────────────────────────────────────────────────

export const GRAPH_CONFIG = {
    roadmap: {
        nodeSpacingX: 250,
        nodeSpacingY: 120,
        nodeWidth: 200,
        nodeHeight: 80,
    },
    mindmap: {
        nodeSpacingX: 180,
        nodeSpacingY: 100,
        nodeWidth: 160,
        nodeHeight: 60,
    },
} as const;
