// ═══════════════════════════════════════════════════════════════
// Student OS — Mock Data for All Pillars
// Realistic placeholder data for the entire platform
// ═══════════════════════════════════════════════════════════════

// ── USER ─────────────────────────────────────────────────────

export const currentUser = {
    id: 'user-1',
    name: 'Dhanyatha Corry',
    email: 'dhanyatha.corry@gmail.com',
    avatar: 'SV',
    college: 'MIT Bangalore',
    branch: 'Computer Science (AI/ML)',
    year: 3,
    cgpa: 8.7,
    skills: ['Python', 'React', 'TypeScript', 'Machine Learning', 'Node.js', 'SQL', 'Docker', 'Git'],
    interests: ['AI/ML', 'Full Stack', 'System Design', 'Open Source'],
    joinedDate: '2024-08-15',
};

// ── ROADMAP (ATLAS) ──────────────────────────────────────────

export const roadmapNodes = [
    { id: '1', type: 'custom', position: { x: 50, y: 40 }, data: { label: 'Start: 1st Year CSE', status: 'COMPLETED', nodeType: 'CHECKPOINT', desc: 'Begin your CS journey', duration: '' } },
    { id: '2', type: 'custom', position: { x: 300, y: 40 }, data: { label: 'Learn Python & C++', status: 'COMPLETED', nodeType: 'SKILL', desc: 'Master the fundamentals', duration: '3 months' } },
    { id: '3', type: 'custom', position: { x: 550, y: 40 }, data: { label: 'DSA Foundations', status: 'COMPLETED', nodeType: 'SKILL', desc: 'Arrays, Linked Lists, Trees', duration: '4 months' } },
    { id: '4', type: 'custom', position: { x: 300, y: 180 }, data: { label: 'Build Portfolio Site', status: 'COMPLETED', nodeType: 'PROJECT', desc: 'Full-stack personal site', duration: '3 weeks' } },
    { id: '5', type: 'custom', position: { x: 550, y: 180 }, data: { label: 'Advanced DSA', status: 'COMPLETED', nodeType: 'SKILL', desc: 'Graphs, DP, Advanced Trees', duration: '4 months' } },
    { id: '6', type: 'custom', position: { x: 800, y: 40 }, data: { label: 'ML Fundamentals', status: 'IN_PROGRESS', nodeType: 'SKILL', desc: 'Supervised/Unsupervised Learning', duration: '3 months' } },
    { id: '7', type: 'custom', position: { x: 800, y: 180 }, data: { label: 'System Design Basics', status: 'IN_PROGRESS', nodeType: 'SKILL', desc: 'Scalability, Load Balancing', duration: '2 months' } },
    { id: '8', type: 'custom', position: { x: 550, y: 320 }, data: { label: 'Open Source Contrib', status: 'NOT_STARTED', nodeType: 'PROJECT', desc: 'Contribute to 2+ repos', duration: '3 months' } },
    { id: '9', type: 'custom', position: { x: 800, y: 320 }, data: { label: 'AI/ML Project', status: 'NOT_STARTED', nodeType: 'PROJECT', desc: 'End-to-end ML pipeline', duration: '6 weeks' } },
    { id: '10', type: 'custom', position: { x: 1050, y: 40 }, data: { label: 'Deep Learning', status: 'NOT_STARTED', nodeType: 'SKILL', desc: 'CNNs, Transformers, LLMs', duration: '4 months' } },
    { id: '11', type: 'custom', position: { x: 1050, y: 180 }, data: { label: 'Hackathons (3+)', status: 'IN_PROGRESS', nodeType: 'EVENT', desc: 'Build, compete, network', duration: 'Ongoing' } },
    { id: '12', type: 'custom', position: { x: 1050, y: 320 }, data: { label: 'Maintain CGPA > 8.5', status: 'IN_PROGRESS', nodeType: 'MILESTONE', desc: 'Consistent academics', duration: 'Ongoing' } },
    { id: '13', type: 'custom', position: { x: 1300, y: 180 }, data: { label: 'Microsoft SDE Intern', status: 'NOT_STARTED', nodeType: 'APPLICATION', desc: 'Apply via referral + on-campus', duration: 'July 2027' } },
];

export const roadmapEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: false },
    { id: 'e2-3', source: '2', target: '3', animated: false },
    { id: 'e2-4', source: '2', target: '4', animated: false },
    { id: 'e3-5', source: '3', target: '5', animated: false },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e5-7', source: '5', target: '7', animated: true },
    { id: 'e5-8', source: '5', target: '8' },
    { id: 'e6-9', source: '6', target: '9' },
    { id: 'e6-10', source: '6', target: '10' },
    { id: 'e7-11', source: '7', target: '11', animated: true },
    { id: 'e5-12', source: '5', target: '12', animated: true },
    { id: 'e10-13', source: '10', target: '13' },
    { id: 'e9-13', source: '9', target: '13' },
    { id: 'e11-13', source: '11', target: '13' },
    { id: 'e12-13', source: '12', target: '13' },
];

export const careerGoal = {
    title: 'Microsoft SDE Intern',
    category: 'Software Engineering',
    targetTimeline: 'End of 3rd Year (July 2027)',
    progress: 46,
    nodesCompleted: 5,
    nodesTotal: 13,
};

// ── STUDY ENGINE ─────────────────────────────────────────────

export const studySubjects = [
    {
        id: 's1',
        title: 'Operating Systems',
        code: 'CS301',
        topics: 12,
        completed: 8,
        progress: 67,
        color: '#0fb8a8',
        materials: [
            { id: 'm1', name: 'Process Management Notes.pdf', pages: 42, uploaded: '2026-02-28' },
            { id: 'm2', name: 'Memory Management Slides.pptx', pages: 56, uploaded: '2026-03-01' },
        ],
        generated: {
            mindmaps: 3,
            audios: 2,
            flashcards: 48,
            quizzes: 5,
        },
    },
    {
        id: 's2',
        title: 'Machine Learning',
        code: 'AI401',
        topics: 15,
        completed: 6,
        progress: 40,
        color: '#ffb800',
        materials: [
            { id: 'm3', name: 'Supervised Learning Notes.pdf', pages: 38, uploaded: '2026-03-02' },
            { id: 'm4', name: 'Neural Networks Handwritten.jpg', pages: 12, uploaded: '2026-03-05' },
        ],
        generated: {
            mindmaps: 2,
            audios: 1,
            flashcards: 35,
            quizzes: 3,
        },
    },
    {
        id: 's3',
        title: 'Database Systems',
        code: 'CS302',
        topics: 10,
        completed: 10,
        progress: 100,
        color: '#10b981',
        materials: [
            { id: 'm5', name: 'SQL & Normalization.pdf', pages: 30, uploaded: '2026-01-15' },
        ],
        generated: {
            mindmaps: 2,
            audios: 2,
            flashcards: 40,
            quizzes: 4,
        },
    },
    {
        id: 's4',
        title: 'Computer Networks',
        code: 'CS303',
        topics: 14,
        completed: 3,
        progress: 21,
        color: '#3b82f6',
        materials: [],
        generated: {
            mindmaps: 0,
            audios: 0,
            flashcards: 0,
            quizzes: 0,
        },
    },
];

export const flashcardsData = [
    { front: 'What is a deadlock in OS?', back: 'A deadlock is a situation where two or more processes are blocked forever, each waiting for the other to release a resource they need.' },
    { front: 'What are the 4 conditions for deadlock?', back: '1. Mutual Exclusion\n2. Hold & Wait\n3. No Preemption\n4. Circular Wait\nAll four must be present simultaneously.' },
    { front: 'Explain virtual memory', back: 'Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources, creating the illusion of a very large main memory using disk space as secondary storage.' },
    { front: 'What is a page fault?', back: 'A page fault occurs when a running program accesses a page that is mapped in virtual address space, but not loaded in physical memory. The OS must fetch the page from disk.' },
    { front: 'Difference between process and thread?', back: 'A process is an independent program in execution with its own address space. A thread is a lightweight unit of execution within a process, sharing the same address space and resources.' },
];

export const mindmapData = {
    title: 'Process Management — OS',
    nodes: [
        { id: 'mm1', label: 'Process Management', x: 400, y: 50, level: 0 },
        { id: 'mm2', label: 'Process States', x: 200, y: 150, level: 1 },
        { id: 'mm3', label: 'Scheduling', x: 400, y: 150, level: 1 },
        { id: 'mm4', label: 'Synchronization', x: 600, y: 150, level: 1 },
        { id: 'mm5', label: 'New', x: 80, y: 260, level: 2 },
        { id: 'mm6', label: 'Ready', x: 180, y: 260, level: 2 },
        { id: 'mm7', label: 'Running', x: 280, y: 260, level: 2 },
        { id: 'mm8', label: 'Waiting', x: 180, y: 340, level: 2 },
        { id: 'mm9', label: 'FCFS', x: 340, y: 260, level: 2 },
        { id: 'mm10', label: 'SJF', x: 420, y: 260, level: 2 },
        { id: 'mm11', label: 'Round Robin', x: 500, y: 260, level: 2 },
        { id: 'mm12', label: 'Priority', x: 420, y: 340, level: 2 },
        { id: 'mm13', label: 'Mutex', x: 540, y: 260, level: 2 },
        { id: 'mm14', label: 'Semaphore', x: 640, y: 260, level: 2 },
        { id: 'mm15', label: 'Deadlock', x: 600, y: 340, level: 2 },
    ],
    edges: [
        { from: 'mm1', to: 'mm2' }, { from: 'mm1', to: 'mm3' }, { from: 'mm1', to: 'mm4' },
        { from: 'mm2', to: 'mm5' }, { from: 'mm2', to: 'mm6' }, { from: 'mm2', to: 'mm7' }, { from: 'mm2', to: 'mm8' },
        { from: 'mm3', to: 'mm9' }, { from: 'mm3', to: 'mm10' }, { from: 'mm3', to: 'mm11' }, { from: 'mm3', to: 'mm12' },
        { from: 'mm4', to: 'mm13' }, { from: 'mm4', to: 'mm14' }, { from: 'mm4', to: 'mm15' },
    ],
};

// ── OPPORTUNITY RADAR ────────────────────────────────────────

export const opportunities = [
    { id: 'o1', title: 'Microsoft Engage 2026', type: 'INTERNSHIP', org: 'Microsoft', deadline: '2026-04-15', url: '#', skills: ['DSA', 'System Design', 'C++'], location: 'Bangalore/Hyderabad', isRemote: false, relevance: 95, status: 'open', stipend: '₹60,000/month', description: 'SDE internship program for pre-final year students. Includes 6-week mentorship with Microsoft engineers.' },
    { id: 'o2', title: 'Smart India Hackathon 2026', type: 'HACKATHON', org: 'Government of India', deadline: '2026-03-30', url: '#', skills: ['Full Stack', 'AI/ML', 'Cloud'], location: 'Multiple Cities', isRemote: false, relevance: 88, status: 'open', stipend: '₹1,00,000 prize', description: 'India\'s biggest hackathon. Build solutions for real-world government problems.' },
    { id: 'o3', title: 'Google Summer of Code 2026', type: 'OPEN_SOURCE', org: 'Google', deadline: '2026-04-02', url: '#', skills: ['Python', 'Open Source', 'Git'], location: 'Remote', isRemote: true, relevance: 82, status: 'open', stipend: '$3,000 stipend', description: '12-week open source development program. Contribute to major open source organizations.' },
    { id: 'o4', title: 'Amazon ML School', type: 'WORKSHOP', org: 'Amazon', deadline: '2026-03-25', url: '#', skills: ['Machine Learning', 'Python', 'Statistics'], location: 'Online', isRemote: true, relevance: 79, status: 'open', stipend: 'Free', description: '4-week intensive ML program covering Supervised, Unsupervised, and Deep Learning.' },
    { id: 'o5', title: 'Flipkart GRiD 6.0', type: 'COMPETITION', org: 'Flipkart', deadline: '2026-04-10', url: '#', skills: ['DSA', 'System Design', 'Java'], location: 'Remote → Onsite Finals', isRemote: true, relevance: 76, status: 'open', stipend: '₹3,00,000 prize + PPIs', description: 'Multi-phase engineering challenge. Top performers get pre-placement interviews.' },
    { id: 'o6', title: 'MITACS Globalink Research', type: 'SCHOLARSHIP', org: 'MITACS Canada', deadline: '2026-03-20', url: '#', skills: ['Research', 'AI/ML', 'Python'], location: 'Canada', isRemote: false, relevance: 71, status: 'closing_soon', stipend: 'CAD $6,000 + flights', description: '12-week research internship in Canadian universities. Fully funded.' },
    { id: 'o7', title: 'HackMIT 2026', type: 'HACKATHON', org: 'MIT', deadline: '2026-05-01', url: '#', skills: ['Full Stack', 'AI/ML', 'Design'], location: 'Cambridge, MA', isRemote: false, relevance: 68, status: 'open', stipend: 'Travel grant available', description: 'Premier university hackathon. 36 hours to build anything.' },
    { id: 'o8', title: 'Adobe GenSolve 2026', type: 'COMPETITION', org: 'Adobe', deadline: '2026-04-20', url: '#', skills: ['Problem Solving', 'Mathematics', 'Coding'], location: 'Remote', isRemote: true, relevance: 65, status: 'open', stipend: '₹2,00,000 prize', description: 'Problem-solving competition focused on creativity and computational thinking.' },
];

// ── SOCIAL ───────────────────────────────────────────────────

export const cohorts = [
    { id: 'c1', name: 'Microsoft SDE 2027', goal: 'Land Microsoft SDE Internship by July 2027', members: 47, progress: 38, avatar: '🎯', active: true },
    { id: 'c2', name: 'ML Engineers Club', goal: 'Master ML & get into AI/ML roles', members: 132, progress: 52, avatar: '🤖', active: true },
    { id: 'c3', name: 'MIT-B DSA Warriors', goal: 'Complete 500+ LeetCode problems together', members: 89, progress: 44, avatar: '⚔️', active: true },
    { id: 'c4', name: 'Open Source India', goal: 'Contribute to major OSS projects', members: 256, progress: 31, avatar: '🌏', active: false },
];

export const socialFeed = [
    { id: 'f1', user: 'Arjun Kumar', avatar: 'AK', action: 'completed', target: 'Advanced DSA', type: 'milestone', time: '2 hours ago', likes: 12, cohort: 'MIT-B DSA Warriors' },
    { id: 'f2', user: 'Priya Sharma', avatar: 'PS', action: 'uploaded', target: 'ML Week 8 Notes', type: 'study', time: '4 hours ago', likes: 8, cohort: 'ML Engineers Club' },
    { id: 'f3', user: 'Rahul Verma', avatar: 'RV', action: 'applied', target: 'Google Summer of Code', type: 'opportunity', time: '5 hours ago', likes: 24, cohort: 'Open Source India' },
    { id: 'f4', user: 'Sneha Reddy', avatar: 'SR', action: 'completed', target: 'System Design Basics', type: 'milestone', time: '8 hours ago', likes: 15, cohort: 'Microsoft SDE 2027' },
    { id: 'f5', user: 'Karthik M', avatar: 'KM', action: 'generated', target: 'OS Mindmap', type: 'study', time: '12 hours ago', likes: 6, cohort: 'MIT-B DSA Warriors' },
    { id: 'f6', user: 'Ananya Gupta', avatar: 'AG', action: 'joined', target: 'ML Engineers Club', type: 'social', time: '1 day ago', likes: 18, cohort: 'ML Engineers Club' },
];

export const mentors = [
    { id: 'mn1', name: 'Vikram S', role: 'SDE @ Microsoft', avatar: 'VS', batch: '2024', college: 'MIT Bangalore', skills: ['DSA', 'System Design', 'C++'], mentees: 3, rating: 4.9 },
    { id: 'mn2', name: 'Anisha R', role: 'ML Engineer @ Google', avatar: 'AR', batch: '2023', college: 'MIT Bangalore', skills: ['ML', 'Python', 'TensorFlow'], mentees: 5, rating: 4.8 },
    { id: 'mn3', name: 'Rohit P', role: 'SDE II @ Amazon', avatar: 'RP', batch: '2023', college: 'MIT Bangalore', skills: ['Full Stack', 'AWS', 'Java'], mentees: 4, rating: 4.7 },
];

// ── RESUME ───────────────────────────────────────────────────

export const resumeData = {
    personalInfo: { fullName: 'Dhanyatha Corry', email: 'dhanyatha.corry@gmail.com', phone: '+91 98765 43210', location: 'Bangalore, India', linkedin: 'linkedin.com/in/dhanyatha-corry', github: 'github.com/Dhanyatha0105', website: 'dhanyatha.dev' },
    education: [
        { institution: 'MIT Bangalore', degree: 'B.Tech', field: 'Computer Science (AI/ML)', startDate: '2024', endDate: '2028', cgpa: 8.7 },
    ],
    experience: [
        { company: 'CityMind (Personal Project)', position: 'Full Stack Developer', dates: 'Jan 2026 – Present', bullets: ['Built urban planning AI platform using AMD architecture', 'Implemented real-time data visualization with React Flow', 'Designed microservices backend with Node.js and PostgreSQL'] },
    ],
    projects: [
        { title: 'Student OS', tech: ['Next.js', 'React Flow', 'Neo4j', 'Gemini AI'], bullets: ['Building a graph-based career platform for students', 'AI-powered study engine generating mindmaps, audio, and flashcards'] },
        { title: 'AI Resume Builder', tech: ['Next.js', 'Prisma', 'Gemini AI', 'TypeScript'], bullets: ['Deep GitHub repo analysis for AI-powered resume generation', 'TF-IDF job matching with 80+ skill database'] },
        { title: 'Velosta', tech: ['Python', 'OpenCV', 'TensorFlow'], bullets: ['Real-time object detection and tracking system', 'Achieved 94% accuracy on custom dataset'] },
    ],
    skills: { languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL'], frameworks: ['React', 'Next.js', 'Node.js', 'FastAPI', 'TensorFlow'], tools: ['Docker', 'Git', 'PostgreSQL', 'Neo4j', 'Redis', 'AWS'] },
};

// ── DASHBOARD STATS ──────────────────────────────────────────

export const dashboardStats = {
    roadmapProgress: 46,
    studyStreak: 12,
    flashcardsReviewed: 156,
    opportunitiesTracked: 8,
    cohortRank: 7,
    totalStudyHours: 84,
};

export const activityTimeline = [
    {
        date: 'Today', items: [
            { time: '10:30 AM', action: 'Reviewed 15 OS flashcards', type: 'study', icon: '📚' },
            { time: '9:00 AM', action: 'Completed ML Week 8 lecture notes', type: 'study', icon: '✅' },
        ]
    },
    {
        date: 'Yesterday', items: [
            { time: '8:00 PM', action: 'Bookmarked Smart India Hackathon', type: 'opportunity', icon: '📡' },
            { time: '3:00 PM', action: 'Generated Audio Summary for OS Ch. 5', type: 'study', icon: '🎧' },
            { time: '11:00 AM', action: 'Solved 3 LeetCode problems (Trees)', type: 'milestone', icon: '🏆' },
        ]
    },
    {
        date: 'Mar 10', items: [
            { time: '6:00 PM', action: 'Joined cohort: Microsoft SDE 2027', type: 'social', icon: '🤝' },
            { time: '2:00 PM', action: 'Updated roadmap: System Design in progress', type: 'atlas', icon: '🗺️' },
        ]
    },
];
