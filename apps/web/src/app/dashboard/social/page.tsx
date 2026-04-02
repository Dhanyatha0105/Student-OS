'use client';

import { useState } from 'react';
import { cohorts, socialFeed, mentors } from '@/data/mock';

type Tab = 'feed' | 'cohorts' | 'mentors';
const actionIcons: Record<string, string> = { completed: '🏆', uploaded: '📤', applied: '🚀', generated: '🤖', joined: '🤝' };

export default function SocialPage() {
    const [tab, setTab] = useState<Tab>('feed');
    const [joined, setJoined] = useState<Set<string>>(new Set(['c1', 'c3']));

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">🤝 Social</div>
                <div className="topbar-actions">
                    <span className="badge badge-success">👥 {joined.size} Cohorts Joined</span>
                </div>
            </div>
            <div className="page-content">
                <div className="tabs">
                    {(['feed', 'cohorts', 'mentors'] as Tab[]).map(t => (
                        <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                            {t === 'feed' ? '📰 Activity Feed' : t === 'cohorts' ? '👥 Cohorts' : '🎓 Mentors'}
                        </button>
                    ))}
                </div>

                {/* ── Feed ────────────────────────────────────── */}
                {tab === 'feed' && (
                    <div style={{ maxWidth: '700px' }}>
                        {/* Compose */}
                        <div className="card" style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'white', flexShrink: 0 }}>SV</div>
                                <div style={{ flex: 1 }}>
                                    <input className="input" placeholder="Share a milestone or update..." style={{ marginBottom: '10px' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex gap-sm"><button className="btn btn-ghost btn-sm">📸 Photo</button><button className="btn btn-ghost btn-sm">🏆 Milestone</button></div>
                                        <button className="btn btn-primary btn-sm">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feed Items */}
                        {socialFeed.map((item, i) => (
                            <div key={item.id} className="card animate-fade-in" style={{ marginBottom: '12px', animationDelay: `${i * 0.05}s`, opacity: 0 }}>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'var(--primary-300)', flexShrink: 0 }}>{item.avatar}</div>
                                    <div style={{ flex: 1 }}>
                                        <div><span className="font-semibold text-sm">{item.user}</span> <span className="text-sm text-secondary">{item.action}</span> <span className="text-sm font-semibold" style={{ color: 'var(--primary-400)' }}>{item.target}</span></div>
                                        <div className="flex items-center gap-sm" style={{ marginTop: '4px' }}>
                                            <span className="text-xs text-muted">{item.time}</span>
                                            <span className="text-xs text-muted">•</span>
                                            <span className="text-xs text-muted">{item.cohort}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                                            <button className="btn btn-ghost btn-sm">❤️ {item.likes}</button>
                                            <button className="btn btn-ghost btn-sm">💬 Reply</button>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '1.2rem' }}>{actionIcons[item.action] || '📌'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Cohorts ─────────────────────────────────── */}
                {tab === 'cohorts' && (
                    <div className="grid-2">
                        {cohorts.map((c, i) => {
                            const isJoined = joined.has(c.id);
                            return (
                                <div key={c.id} className="card animate-fade-in" style={{ animationDelay: `${i * 0.06}s`, opacity: 0, borderColor: isJoined ? 'var(--primary-700)' : 'var(--border)' }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: isJoined ? 'rgba(15,184,168,0.12)' : 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>{c.avatar}</div>
                                        <div style={{ flex: 1 }}>
                                            <div className="font-display font-bold">{c.name}</div>
                                            <div className="text-sm text-secondary" style={{ marginTop: '4px' }}>{c.goal}</div>
                                            <div className="flex items-center gap-md" style={{ marginTop: '12px' }}>
                                                <span className="text-xs text-muted">👥 {c.members} members</span>
                                                <span className="text-xs text-muted">📊 {c.progress}% avg progress</span>
                                            </div>
                                            <div className="progress-bar" style={{ marginTop: '10px' }}>
                                                <div className="fill" style={{ width: `${c.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                                        <button className={`btn btn-sm w-full ${isJoined ? 'btn-ghost' : 'btn-primary'}`} onClick={() => { const next = new Set(joined); isJoined ? next.delete(c.id) : next.add(c.id); setJoined(next); }}>
                                            {isJoined ? '✓ Joined' : 'Join Cohort'}
                                        </button>
                                        <button className="btn btn-ghost btn-sm">View →</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ── Mentors ─────────────────────────────────── */}
                {tab === 'mentors' && (
                    <div className="grid-3">
                        {mentors.map((m, i) => (
                            <div key={m.id} className="card animate-fade-in" style={{ animationDelay: `${i * 0.06}s`, opacity: 0, textAlign: 'center' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-700), var(--primary-400))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', color: 'white', margin: '0 auto 12px' }}>{m.avatar}</div>
                                <div className="font-display font-bold">{m.name}</div>
                                <div className="text-sm" style={{ color: 'var(--primary-400)', marginTop: '2px' }}>{m.role}</div>
                                <div className="text-xs text-muted" style={{ marginTop: '4px' }}>Batch {m.batch} • {m.college}</div>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
                                    <span className="badge badge-accent">⭐ {m.rating}</span>
                                    <span className="badge badge-primary">👥 {m.mentees} mentees</span>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '12px' }}>
                                    {m.skills.map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                                <button className="btn btn-primary btn-sm w-full" style={{ marginTop: '16px' }}>Request Mentorship</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
