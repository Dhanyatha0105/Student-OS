'use client';

import { useState } from 'react';
import { opportunities } from '@/data/mock';

const typeFilters = ['All', 'INTERNSHIP', 'HACKATHON', 'COMPETITION', 'OPEN_SOURCE', 'WORKSHOP', 'SCHOLARSHIP'] as const;
const typeLabels: Record<string, string> = { INTERNSHIP: '💼 Internship', HACKATHON: '🏆 Hackathon', COMPETITION: '🎯 Competition', OPEN_SOURCE: '🌐 Open Source', WORKSHOP: '📋 Workshop', SCHOLARSHIP: '🎓 Scholarship' };
const typeColors: Record<string, string> = { INTERNSHIP: 'var(--primary-400)', HACKATHON: 'var(--accent-400)', COMPETITION: 'var(--info)', OPEN_SOURCE: 'var(--success)', WORKSHOP: '#a78bfa', SCHOLARSHIP: '#f472b6' };

export default function RadarPage() {
    const [filter, setFilter] = useState<string>('All');
    const [search, setSearch] = useState('');
    const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());

    const filtered = opportunities
        .filter(o => filter === 'All' || o.type === filter)
        .filter(o => search === '' || o.title.toLowerCase().includes(search.toLowerCase()) || o.org.toLowerCase().includes(search.toLowerCase()));

    const toggle = (id: string) => {
        const next = new Set(bookmarked);
        next.has(id) ? next.delete(id) : next.add(id);
        setBookmarked(next);
    };

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">📡 Opportunity Radar</div>
                <div className="topbar-actions">
                    <span className="badge badge-warning">⚠️ 2 closing this week</span>
                </div>
            </div>
            <div className="page-content">
                {/* Search + Filters */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="search-box" style={{ flex: 1, minWidth: '200px' }}>
                        <span className="search-icon">🔍</span>
                        <input className="input" placeholder="Search opportunities..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {typeFilters.map(f => (
                            <button key={f} onClick={() => setFilter(f)} className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`}>
                                {f === 'All' ? '🌐 All' : typeLabels[f] || f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="stat-grid" style={{ marginBottom: '24px' }}>
                    <div className="stat-card"><div className="stat-value" style={{ color: 'var(--primary-400)' }}>{opportunities.length}</div><div className="stat-label">Active Opportunities</div></div>
                    <div className="stat-card"><div className="stat-value" style={{ color: 'var(--accent-400)' }}>{opportunities.filter(o => { const d = Math.ceil((new Date(o.deadline).getTime() - new Date('2026-03-12').getTime()) / 86400000); return d <= 14; }).length}</div><div className="stat-label">Closing Soon (&lt;2 weeks)</div></div>
                    <div className="stat-card"><div className="stat-value" style={{ color: 'var(--success)' }}>{bookmarked.size}</div><div className="stat-label">Bookmarked</div></div>
                    <div className="stat-card"><div className="stat-value" style={{ color: 'var(--info)' }}>85%</div><div className="stat-label">Avg Match Score</div></div>
                </div>

                {/* Opportunity Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {filtered.map((o, i) => {
                        const daysLeft = Math.ceil((new Date(o.deadline).getTime() - new Date('2026-03-12').getTime()) / 86400000);
                        const isBookmarked = bookmarked.has(o.id);
                        return (
                            <div key={o.id} className="card animate-fade-in" style={{ animationDelay: `${i * 0.04}s`, opacity: 0, borderLeft: `3px solid ${typeColors[o.type]}` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                                            <span className="badge" style={{ background: `${typeColors[o.type]}18`, color: typeColors[o.type] }}>
                                                {typeLabels[o.type]}
                                            </span>
                                            <span className="badge badge-primary">{o.relevance}% match</span>
                                            {daysLeft <= 14 && <span className="badge badge-error">🔥 {daysLeft} days left</span>}
                                        </div>
                                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>{o.title}</h3>
                                        <div className="text-sm text-secondary">{o.org} • {o.location}{o.isRemote ? ' (Remote)' : ''}</div>
                                        <p className="text-sm text-secondary" style={{ marginTop: '8px', lineHeight: 1.5 }}>{o.description}</p>
                                        <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
                                            {o.skills.map(s => <span key={s} className="tag">{s}</span>)}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', minWidth: '120px', marginLeft: '20px' }}>
                                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-400)' }}>{o.stipend}</div>
                                        <div className="text-xs text-muted" style={{ marginTop: '4px' }}>Deadline: {new Date(o.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'flex-end' }}>
                                            <button className={`btn btn-sm ${isBookmarked ? 'btn-accent' : 'btn-ghost'}`} onClick={() => toggle(o.id)}>
                                                {isBookmarked ? '⭐' : '☆'}
                                            </button>
                                            <button className="btn btn-primary btn-sm">Apply →</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '48px' }}><div style={{ fontSize: '3rem' }}>🔍</div><div className="text-secondary mt-sm">No opportunities match your filters</div></div>
                )}
            </div>
        </>
    );
}
