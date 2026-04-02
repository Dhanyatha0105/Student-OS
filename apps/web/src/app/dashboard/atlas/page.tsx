'use client';

import { useState } from 'react';
import { careerGoal, roadmapNodes, roadmapEdges } from '@/data/mock';

const statusColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    COMPLETED: { bg: '#10b98118', border: '#10b981', text: '#10b981', glow: '0 0 12px rgba(16,185,129,0.3)' },
    IN_PROGRESS: { bg: '#0fb8a818', border: '#0fb8a8', text: '#0fb8a8', glow: '0 0 12px rgba(15,184,168,0.3)' },
    NOT_STARTED: { bg: '#1e293b', border: '#334155', text: '#94a3b8', glow: 'none' },
};

const typeIcons: Record<string, string> = {
    SKILL: '⚡', PROJECT: '🛠️', MILESTONE: '🏆', APPLICATION: '📨', EVENT: '🎪', CHECKPOINT: '📍',
};

export default function AtlasPage() {
    const [selectedNode, setSelectedNode] = useState<typeof roadmapNodes[0] | null>(null);

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">🗺️ Career Atlas</div>
                <div className="topbar-actions">
                    <span className="badge badge-primary">{careerGoal.nodesCompleted}/{careerGoal.nodesTotal} completed</span>
                    <button className="btn btn-primary btn-sm">✨ Adapt Roadmap</button>
                </div>
            </div>

            <div className="page-content">
                {/* Goal Banner */}
                <div className="card animate-fade-in" style={{ background: 'linear-gradient(135deg, rgba(15,184,168,0.08), rgba(255,184,0,0.05))', borderColor: 'var(--primary-700)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700 }}>🎯 {careerGoal.title}</div>
                            <div className="text-sm text-secondary" style={{ marginTop: '4px' }}>{careerGoal.category} • Target: {careerGoal.targetTimeline}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-400)' }}>{careerGoal.progress}%</div>
                            <div className="text-xs text-muted">Overall Progress</div>
                        </div>
                    </div>
                    <div className="progress-bar" style={{ height: '8px', marginTop: '16px' }}>
                        <div className="fill" style={{ width: `${careerGoal.progress}%` }}></div>
                    </div>
                </div>

                {/* Interactive Graph Canvas */}
                <div className="card" style={{ marginTop: '20px', padding: 0, overflow: 'hidden', minHeight: '500px', position: 'relative' }}>
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="text-sm font-semibold">Interactive Roadmap Graph</div>
                        <div className="flex gap-md items-center">
                            <span className="flex items-center gap-xs text-xs"><span style={{ width: 10, height: 10, borderRadius: 3, background: '#10b981', display: 'inline-block' }}></span> Completed</span>
                            <span className="flex items-center gap-xs text-xs"><span style={{ width: 10, height: 10, borderRadius: 3, background: '#0fb8a8', display: 'inline-block', animation: 'pulse 2s infinite' }}></span> In Progress</span>
                            <span className="flex items-center gap-xs text-xs"><span style={{ width: 10, height: 10, borderRadius: 3, background: '#334155', display: 'inline-block' }}></span> Not Started</span>
                        </div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: '450px', overflow: 'auto', background: 'radial-gradient(circle at 30% 40%, rgba(15,184,168,0.03) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,184,0,0.02) 0%, transparent 60%)' }}>
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '1500px', height: '420px', pointerEvents: 'none' }}>
                            {roadmapEdges.map((edge) => {
                                const source = roadmapNodes.find(n => n.id === edge.source);
                                const target = roadmapNodes.find(n => n.id === edge.target);
                                if (!source || !target) return null;
                                const sx = source.position.x + 90;
                                const sy = source.position.y + 30;
                                const tx = target.position.x + 90;
                                const ty = target.position.y + 30;
                                const sourceStatus = source.data.status;
                                const color = sourceStatus === 'COMPLETED' ? '#10b981' : sourceStatus === 'IN_PROGRESS' ? '#0fb8a8' : '#334155';
                                return (
                                    <line key={edge.id} x1={sx} y1={sy} x2={tx} y2={ty} stroke={color} strokeWidth={2} strokeDasharray={edge.animated ? '8,4' : 'none'} opacity={0.5}>
                                        {edge.animated && <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />}
                                    </line>
                                );
                            })}
                        </svg>

                        {roadmapNodes.map((node) => {
                            const s = statusColors[node.data.status] || statusColors.NOT_STARTED;
                            return (
                                <div
                                    key={node.id}
                                    onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                                    style={{
                                        position: 'absolute',
                                        left: node.position.x,
                                        top: node.position.y,
                                        width: '180px',
                                        padding: '12px 14px',
                                        background: s.bg,
                                        border: `1.5px solid ${s.border}`,
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s',
                                        boxShadow: selectedNode?.id === node.id ? s.glow : 'none',
                                        transform: selectedNode?.id === node.id ? 'scale(1.05)' : 'scale(1)',
                                        zIndex: selectedNode?.id === node.id ? 10 : 1,
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                        <span style={{ fontSize: '0.9rem' }}>{typeIcons[node.data.nodeType] || '📍'}</span>
                                        <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: s.text, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{node.data.nodeType}</span>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: s.text, lineHeight: 1.3 }}>{node.data.label}</div>
                                    {node.data.duration && <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '4px' }}>{node.data.duration}</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Node Detail Panel */}
                {selectedNode && (
                    <div className="card animate-fade-in" style={{ marginTop: '16px', borderColor: statusColors[selectedNode.data.status].border }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '1.3rem' }}>{typeIcons[selectedNode.data.nodeType]}</span>
                                    <div className="font-display font-bold" style={{ fontSize: '1.1rem' }}>{selectedNode.data.label}</div>
                                </div>
                                <p className="text-secondary text-sm" style={{ marginTop: '8px' }}>{selectedNode.data.desc}</p>
                                {selectedNode.data.duration && <div className="text-xs text-muted mt-sm">⏱ Estimated: {selectedNode.data.duration}</div>}
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {selectedNode.data.status === 'NOT_STARTED' && <button className="btn btn-primary btn-sm">Start This →</button>}
                                {selectedNode.data.status === 'IN_PROGRESS' && <button className="btn btn-accent btn-sm">Mark Complete ✓</button>}
                                {selectedNode.data.status === 'COMPLETED' && <span className="badge badge-success">✅ Completed</span>}
                            </div>
                        </div>
                        <div className="flex gap-sm mt-md">
                            <span className="tag">📚 3 Resources</span>
                            <span className="tag">👥 12 students on this node</span>
                            <span className="tag">🗓️ Recommended: Semester {selectedNode.data.nodeType === 'APPLICATION' ? '6' : '4'}</span>
                        </div>
                    </div>
                )}

                {/* Quick Stats */}
                <div className="grid-4" style={{ marginTop: '20px' }}>
                    {[
                        { icon: '✅', label: 'Completed', value: roadmapNodes.filter(n => n.data.status === 'COMPLETED').length, color: 'var(--success)' },
                        { icon: '🔄', label: 'In Progress', value: roadmapNodes.filter(n => n.data.status === 'IN_PROGRESS').length, color: 'var(--primary-400)' },
                        { icon: '⏳', label: 'Upcoming', value: roadmapNodes.filter(n => n.data.status === 'NOT_STARTED').length, color: 'var(--text-muted)' },
                        { icon: '📊', label: 'Completion', value: `${careerGoal.progress}%`, color: 'var(--accent-400)' },
                    ].map((s, i) => (
                        <div key={i} className="stat-card animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                            <div style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{s.icon}</div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                            <div className="text-xs text-muted">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
