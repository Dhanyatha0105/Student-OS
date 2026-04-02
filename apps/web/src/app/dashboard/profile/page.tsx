'use client';

import { useState } from 'react';
import { currentUser, careerGoal, dashboardStats, studySubjects } from '@/data/mock';

export default function ProfilePage() {
    const [editing, setEditing] = useState(false);

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">👤 Profile</div>
                <div className="topbar-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : '✏️ Edit'}</button>
                    {editing && <button className="btn btn-primary btn-sm" onClick={() => setEditing(false)}>Save Changes</button>}
                </div>
            </div>
            <div className="page-content">
                {/* Profile Header */}
                <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: 'white', margin: '0 auto 16px', boxShadow: '0 0 30px rgba(15,184,168,0.3)' }}>
                        {currentUser.avatar}
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>{currentUser.name}</h2>
                    <div className="text-secondary" style={{ marginTop: '4px' }}>{currentUser.branch} • Year {currentUser.year}</div>
                    <div className="text-muted text-sm" style={{ marginTop: '2px' }}>{currentUser.college}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px' }}>
                        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--primary-400)' }}>{currentUser.cgpa}</div><div className="text-xs text-muted">CGPA</div></div>
                        <div style={{ width: '1px', background: 'var(--border)' }}></div>
                        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--accent-400)' }}>{careerGoal.progress}%</div><div className="text-xs text-muted">Roadmap</div></div>
                        <div style={{ width: '1px', background: 'var(--border)' }}></div>
                        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--success)' }}>{dashboardStats.studyStreak}</div><div className="text-xs text-muted">Day Streak</div></div>
                        <div style={{ width: '1px', background: 'var(--border)' }}></div>
                        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--info)' }}>#{dashboardStats.cohortRank}</div><div className="text-xs text-muted">Cohort Rank</div></div>
                    </div>
                </div>

                <div className="grid-2" style={{ marginTop: '20px' }}>
                    {/* Personal Info */}
                    <div className="card animate-fade-in stagger-1">
                        <div className="card-title" style={{ marginBottom: '16px' }}>📋 Personal Information</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Full Name', value: currentUser.name },
                                { label: 'Email', value: currentUser.email },
                                { label: 'College', value: currentUser.college },
                                { label: 'Branch', value: currentUser.branch },
                                { label: 'Year', value: `Year ${currentUser.year}` },
                                { label: 'CGPA', value: currentUser.cgpa.toString() },
                                { label: 'Member Since', value: new Date(currentUser.joinedDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }) },
                            ].map(f => (
                                <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="text-sm text-muted">{f.label}</span>
                                    {editing ? <input className="input" defaultValue={f.value} style={{ width: '60%' }} /> : <span className="text-sm font-semibold">{f.value}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills & Interests */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div className="card animate-fade-in stagger-2">
                            <div className="card-title" style={{ marginBottom: '12px' }}>⚡ Skills</div>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {currentUser.skills.map(s => <span key={s} className="badge badge-primary">{s}</span>)}
                                {editing && <button className="btn btn-ghost btn-sm">+ Add Skill</button>}
                            </div>
                        </div>
                        <div className="card animate-fade-in stagger-3">
                            <div className="card-title" style={{ marginBottom: '12px' }}>💡 Interests</div>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {currentUser.interests.map(s => <span key={s} className="badge badge-accent">{s}</span>)}
                                {editing && <button className="btn btn-ghost btn-sm">+ Add Interest</button>}
                            </div>
                        </div>
                        <div className="card animate-fade-in stagger-4">
                            <div className="card-title" style={{ marginBottom: '12px' }}>📊 Study Stats</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {studySubjects.map(s => (
                                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span className="text-sm" style={{ width: '120px' }}>{s.title}</span>
                                        <div className="progress-bar" style={{ flex: 1 }}>
                                            <div className="fill" style={{ width: `${s.progress}%`, background: s.color }}></div>
                                        </div>
                                        <span className="text-xs font-semibold" style={{ color: s.color, width: '35px', textAlign: 'right' }}>{s.progress}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career Goal */}
                <div className="card animate-fade-in stagger-5" style={{ marginTop: '20px' }}>
                    <div className="card-header">
                        <div><div className="card-title">🎯 Active Career Goal</div><div className="text-sm text-secondary" style={{ marginTop: '2px' }}>{careerGoal.title} — {careerGoal.category}</div></div>
                        <span className="badge badge-primary">{careerGoal.progress}% complete</span>
                    </div>
                    <div className="progress-bar" style={{ height: '8px' }}>
                        <div className="fill" style={{ width: `${careerGoal.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between mt-sm">
                        <span className="text-xs text-muted">{careerGoal.nodesCompleted} of {careerGoal.nodesTotal} milestones</span>
                        <span className="text-xs text-muted">Target: {careerGoal.targetTimeline}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
