'use client';

import { currentUser, dashboardStats, careerGoal, activityTimeline, studySubjects, opportunities, cohorts } from '@/data/mock';
import Link from 'next/link';

export default function DashboardPage() {
    return (
        <>
            <div className="topbar">
                <div className="topbar-title">Welcome back, {currentUser.name.split(' ')[0]} 👋</div>
                <div className="topbar-actions">
                    <span className="badge badge-primary">🔥 {dashboardStats.studyStreak}-day streak</span>
                </div>
            </div>

            <div className="page-content">
                {/* ── Stats Grid ─────────────────────────────── */}
                <div className="stat-grid animate-fade-in">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'rgba(15,184,168,0.12)' }}>🗺️</div>
                        <div className="stat-value" style={{ color: 'var(--primary-400)' }}>{careerGoal.progress}%</div>
                        <div className="stat-label">Roadmap Progress</div>
                        <div className="stat-change positive">↑ 8% this month</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'rgba(255,184,0,0.12)' }}>📚</div>
                        <div className="stat-value" style={{ color: 'var(--accent-400)' }}>{dashboardStats.totalStudyHours}h</div>
                        <div className="stat-label">Study Hours</div>
                        <div className="stat-change positive">↑ 12h this week</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>🃏</div>
                        <div className="stat-value" style={{ color: 'var(--success)' }}>{dashboardStats.flashcardsReviewed}</div>
                        <div className="stat-label">Flashcards Reviewed</div>
                        <div className="stat-change positive">↑ 23 today</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'rgba(59,130,246,0.12)' }}>📡</div>
                        <div className="stat-value" style={{ color: 'var(--info)' }}>{dashboardStats.opportunitiesTracked}</div>
                        <div className="stat-label">Tracked Opportunities</div>
                        <div className="stat-change positive">3 closing soon</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginTop: '24px' }}>
                    {/* ── Career Goal Card ──────────────────────── */}
                    <div className="card animate-fade-in stagger-1">
                        <div className="card-header">
                            <div>
                                <div className="card-title">🎯 {careerGoal.title}</div>
                                <div className="card-description" style={{ marginTop: '4px' }}>Target: {careerGoal.targetTimeline}</div>
                            </div>
                            <Link href="/dashboard/atlas" className="btn btn-ghost btn-sm">View Atlas →</Link>
                        </div>
                        <div className="progress-bar" style={{ height: '10px', marginTop: '8px' }}>
                            <div className="fill" style={{ width: `${careerGoal.progress}%` }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                            <span className="text-xs text-muted">{careerGoal.nodesCompleted} of {careerGoal.nodesTotal} milestones completed</span>
                            <span className="text-xs font-semibold" style={{ color: 'var(--primary-400)' }}>{careerGoal.progress}%</span>
                        </div>
                    </div>

                    {/* ── Study Streak ─────────────────────────── */}
                    <div className="card animate-fade-in stagger-2" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '4px' }}>🔥</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-400)' }}>{dashboardStats.studyStreak}</div>
                        <div className="text-muted text-sm">Day Streak</div>
                        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '12px' }}>
                            {[...Array(7)].map((_, i) => (
                                <div key={i} style={{
                                    width: '28px', height: '28px', borderRadius: '6px',
                                    background: i < 5 ? 'var(--accent-500)' : i < 6 ? 'var(--primary-500)' : 'var(--surface)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'var(--text-inverse)', fontWeight: 700,
                                }}>
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
                    {/* ── Study Subjects ────────────────────────── */}
                    <div className="card animate-fade-in stagger-3">
                        <div className="card-header">
                            <div className="card-title">📚 Study Progress</div>
                            <Link href="/dashboard/study" className="btn btn-ghost btn-sm">View All →</Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {studySubjects.map((s) => (
                                <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: s.color, flexShrink: 0 }}>{s.code.slice(0, 2)}</div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span className="text-sm font-semibold truncate">{s.title}</span>
                                            <span className="text-xs font-semibold" style={{ color: s.color }}>{s.progress}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className="fill" style={{ width: `${s.progress}%`, background: s.color }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Upcoming Opportunities ────────────────── */}
                    <div className="card animate-fade-in stagger-4">
                        <div className="card-header">
                            <div className="card-title">📡 Upcoming Deadlines</div>
                            <Link href="/dashboard/radar" className="btn btn-ghost btn-sm">View All →</Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {opportunities.slice(0, 4).map((o) => {
                                const daysLeft = Math.ceil((new Date(o.deadline).getTime() - new Date('2026-03-12').getTime()) / 86400000);
                                return (
                                    <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '10px', background: 'var(--surface)', border: '1px solid var(--border-subtle)' }}>
                                        <div style={{ fontSize: '1.2rem' }}>{o.type === 'INTERNSHIP' ? '💼' : o.type === 'HACKATHON' ? '🏆' : o.type === 'OPEN_SOURCE' ? '🌐' : '📋'}</div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div className="text-sm font-semibold truncate">{o.title}</div>
                                            <div className="text-xs text-muted">{o.org}</div>
                                        </div>
                                        <span className={`badge ${daysLeft <= 14 ? 'badge-error' : daysLeft <= 21 ? 'badge-warning' : 'badge-primary'}`}>
                                            {daysLeft}d left
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ── Activity Timeline ──────────────────────── */}
                <div className="card animate-fade-in stagger-5" style={{ marginTop: '24px' }}>
                    <div className="card-header">
                        <div className="card-title">🕒 Recent Activity</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {activityTimeline.map((day) => (
                            <div key={day.date}>
                                <div className="text-xs font-mono font-semibold text-muted" style={{ marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{day.date}</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', borderLeft: '2px solid var(--border)' }}>
                                    {day.items.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                                            <span className="text-sm">{item.action}</span>
                                            <span className="text-xs text-muted" style={{ marginLeft: 'auto' }}>{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
