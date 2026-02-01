// ============================================================
// Student OS — Shared Types
// Core type definitions used across all pillars
// ============================================================

// ── User & Auth ──────────────────────────────────────────────

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    college?: string;
    branch?: string;
    year?: number;
    cgpa?: number;
    skills: string[];
    interests: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface UserProfile extends User {
    bio?: string;
    linkedinUrl?: string;
    githubUrl?: string;
    websiteUrl?: string;
    location?: string;
}

// ── Career Roadmap (Atlas) ───────────────────────────────────

export type RoadmapNodeType =
    | 'SKILL'
    | 'PROJECT'
    | 'MILESTONE'
    | 'APPLICATION'
    | 'EVENT'
    | 'CHECKPOINT';

export type RoadmapEdgeType =
    | 'PREREQUISITE'
    | 'RECOMMENDED'
    | 'ALTERNATIVE'
    | 'CONCURRENT';

export type NodeStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED';

export interface RoadmapNode {
    id: string;
    title: string;
    description: string;
    type: RoadmapNodeType;
    status: NodeStatus;
    estimatedDuration?: string;
    difficulty: 1 | 2 | 3 | 4 | 5;
    resources: string[];
    position: { x: number; y: number };
}

export interface RoadmapEdge {
    id: string;
    source: string;
    target: string;
    type: RoadmapEdgeType;
}

export interface Roadmap {
    id: string;
    userId: string;
    goalTitle: string;
    goalCategory: string;
    nodes: RoadmapNode[];
    edges: RoadmapEdge[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CareerGoal {
    id: string;
    title: string;
    category: string;
    targetCompany?: string;
    targetRole?: string;
    targetTimeline?: string;
}

// ── AI Study Engine ──────────────────────────────────────────

export type GeneratedContentType =
    | 'MINDMAP'
    | 'AUDIO'
    | 'VIDEO'
    | 'FLASHCARD'
    | 'QUIZ'
    | 'SUMMARY';

export interface StudyMaterial {
    id: string;
    userId: string;
    title: string;
    fileUrl: string;
    subject?: string;
    uploadDate: Date;
}

export interface GeneratedContent {
    id: string;
    materialId: string;
    type: GeneratedContentType;
    contentUrl: string;
    metadata?: Record<string, unknown>;
    createdAt: Date;
}

export interface Flashcard {
    id: string;
    front: string;
    back: string;
    difficulty: 1 | 2 | 3 | 4 | 5;
    nextReview?: Date;
    interval?: number;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface StudyProgress {
    id: string;
    userId: string;
    materialId: string;
    checklist: { topic: string; completed: boolean }[];
    percentComplete: number;
}

// ── Opportunity Radar ────────────────────────────────────────

export type OpportunityType =
    | 'HACKATHON'
    | 'INTERNSHIP'
    | 'SCHOLARSHIP'
    | 'COMPETITION'
    | 'WORKSHOP'
    | 'JOB'
    | 'OPEN_SOURCE';

export interface Opportunity {
    id: string;
    title: string;
    type: OpportunityType;
    organization: string;
    description: string;
    deadline?: Date;
    url: string;
    skills: string[];
    location?: string;
    isRemote?: boolean;
    source: string;
    relevanceScore?: number;
    createdAt: Date;
}

// ── Social Layer ─────────────────────────────────────────────

export interface Cohort {
    id: string;
    name: string;
    goalDescription: string;
    memberCount: number;
    createdAt: Date;
}

export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    createdAt: Date;
    readAt?: Date;
}

export interface MilestonePost {
    id: string;
    userId: string;
    roadmapNodeId: string;
    content: string;
    type: 'NODE_COMPLETED' | 'GOAL_SET' | 'ACHIEVEMENT' | 'TEXT';
    likes: number;
    createdAt: Date;
}

// ── Resume Builder ───────────────────────────────────────────

export interface ResumeData {
    userId: string;
    templateId: string;
    personalInfo: {
        fullName: string;
        email: string;
        phone?: string;
        location?: string;
        linkedinUrl?: string;
        websiteUrl?: string;
    };
    summary?: string;
    education: EducationEntry[];
    experience: ExperienceEntry[];
    projects: ProjectEntry[];
    skills: string[];
    certifications?: string[];
}

export interface EducationEntry {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate?: string;
    cgpa?: number;
}

export interface ExperienceEntry {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string;
    achievements?: string[];
}

export interface ProjectEntry {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    outcomes?: string[];
}

// ── Shared Utilities ─────────────────────────────────────────

export type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: string };

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}
