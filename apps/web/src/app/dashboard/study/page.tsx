'use client';

import { useState } from 'react';
import { studySubjects, flashcardsData, mindmapData } from '@/data/mock';

type Tab = 'overview' | 'mindmap' | 'flashcards' | 'audio';

export default function StudyPage() {
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    const [activeSubject, setActiveSubject] = useState(studySubjects[0]);
    const [cardIndex, setCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [uploadDragActive, setUploadDragActive] = useState(false);

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">📚 Study Engine</div>
                <div className="topbar-actions">
                    <span className="badge badge-accent">🔥 12 day streak</span>
                    <button className="btn btn-primary btn-sm">+ Upload Notes</button>
                </div>
            </div>

            <div className="page-content">
                {/* Subject Tabs */}
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '24px' }}>
                    {studySubjects.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActiveSubject(s)}
                            style={{
                                padding: '12px 20px',
                                borderRadius: '12px',
                                border: activeSubject.id === s.id ? `2px solid ${s.color}` : '1px solid var(--border)',
                                background: activeSubject.id === s.id ? `${s.color}12` : 'var(--surface-card)',
                                color: activeSubject.id === s.id ? s.color : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                                minWidth: 'fit-content',
                            }}
                        >
                            <div>{s.title}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '2px' }}>{s.code} • {s.progress}%</div>
                        </button>
                    ))}
                </div>

                {/* Subject Progress Header */}
                <div className="card animate-fade-in" style={{ borderColor: activeSubject.color + '40' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>{activeSubject.title}</h2>
                            <p className="text-secondary text-sm">{activeSubject.code} • {activeSubject.completed}/{activeSubject.topics} topics covered</p>
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: activeSubject.color }}>{activeSubject.progress}%</div>
                    </div>
                    <div className="progress-bar" style={{ height: '8px', marginTop: '16px' }}>
                        <div className="fill" style={{ width: `${activeSubject.progress}%`, background: activeSubject.color }}></div>
                    </div>
                    <div className="stat-grid" style={{ marginTop: '20px' }}>
                        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{activeSubject.generated.mindmaps}</div><div className="text-xs text-muted">Mindmaps</div></div>
                        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{activeSubject.generated.audios}</div><div className="text-xs text-muted">Audio Summaries</div></div>
                        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{activeSubject.generated.flashcards}</div><div className="text-xs text-muted">Flashcards</div></div>
                        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>{activeSubject.generated.quizzes}</div><div className="text-xs text-muted">Quizzes</div></div>
                    </div>
                </div>

                {/* Content Tabs */}
                <div className="tabs" style={{ marginTop: '24px' }}>
                    {(['overview', 'mindmap', 'flashcards', 'audio'] as Tab[]).map((t) => (
                        <button key={t} className={`tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
                            {t === 'overview' ? '📋 Overview' : t === 'mindmap' ? '🧠 Mindmap' : t === 'flashcards' ? '🃏 Flashcards' : '🎧 Audio'}
                        </button>
                    ))}
                </div>

                {/* ── Tab: Overview ──────────────────────────── */}
                {activeTab === 'overview' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* Upload Area */}
                        <div
                            className="card"
                            onDragOver={(e) => { e.preventDefault(); setUploadDragActive(true); }}
                            onDragLeave={() => setUploadDragActive(false)}
                            onDrop={() => setUploadDragActive(false)}
                            style={{
                                border: uploadDragActive ? '2px dashed var(--primary-400)' : '2px dashed var(--border)',
                                background: uploadDragActive ? 'rgba(15,184,168,0.05)' : 'transparent',
                                textAlign: 'center',
                                padding: '48px 24px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📤</div>
                            <div className="font-display font-semibold">Drop your study materials here</div>
                            <p className="text-secondary text-sm" style={{ marginTop: '8px' }}>PDF, Images, Slides — AI generates mindmaps, audio, flashcards & quizzes</p>
                            <button className="btn btn-primary" style={{ marginTop: '16px' }}>Choose Files</button>
                        </div>

                        {/* Materials List */}
                        <div className="card">
                            <div className="card-title" style={{ marginBottom: '16px' }}>📁 Uploaded Materials</div>
                            {activeSubject.materials.length > 0 ? activeSubject.materials.map((m) => (
                                <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px', background: 'var(--surface)', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>📄</span>
                                    <div style={{ flex: 1 }}>
                                        <div className="text-sm font-semibold">{m.name}</div>
                                        <div className="text-xs text-muted">{m.pages} pages • {m.uploaded}</div>
                                    </div>
                                    <button className="btn btn-ghost btn-sm">🤖 Generate</button>
                                </div>
                            )) : (
                                <div className="text-secondary text-sm" style={{ padding: '24px', textAlign: 'center' }}>No materials uploaded yet for {activeSubject.title}</div>
                            )}
                        </div>

                        {/* Topic Checklist */}
                        <div className="card" style={{ gridColumn: 'span 2' }}>
                            <div className="card-title" style={{ marginBottom: '16px' }}>✅ Topic Checklist</div>
                            <div className="grid-3">
                                {Array.from({ length: activeSubject.topics }, (_, i) => {
                                    const completed = i < activeSubject.completed;
                                    return (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: completed ? 'rgba(16,185,129,0.08)' : 'var(--surface)', border: `1px solid ${completed ? 'rgba(16,185,129,0.2)' : 'var(--border-subtle)'}` }}>
                                            <span style={{ color: completed ? 'var(--success)' : 'var(--text-muted)', fontSize: '1rem' }}>{completed ? '✅' : '⬜'}</span>
                                            <span className="text-sm" style={{ color: completed ? 'var(--success)' : 'var(--text-secondary)' }}>Topic {i + 1}{completed ? '' : ' (pending)'}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Tab: Mindmap ────────────────────────────── */}
                {activeTab === 'mindmap' && (
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="font-semibold text-sm">🧠 {mindmapData.title}</div>
                            <button className="btn btn-ghost btn-sm">⟳ Regenerate</button>
                        </div>
                        <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'auto', background: 'radial-gradient(circle at 50% 50%, rgba(15,184,168,0.03), transparent 70%)' }}>
                            <svg style={{ position: 'absolute', top: 0, left: 0, width: '800px', height: '400px', pointerEvents: 'none' }}>
                                {mindmapData.edges.map((e, i) => {
                                    const from = mindmapData.nodes.find(n => n.id === e.from);
                                    const to = mindmapData.nodes.find(n => n.id === e.to);
                                    if (!from || !to) return null;
                                    return <line key={i} x1={from.x} y1={from.y + 15} x2={to.x} y2={to.y} stroke="var(--primary-700)" strokeWidth={1.5} opacity={0.4} />;
                                })}
                            </svg>
                            {mindmapData.nodes.map((node) => {
                                const colors = [
                                    { bg: 'var(--primary-500)', text: 'white' },
                                    { bg: 'rgba(15,184,168,0.15)', text: 'var(--primary-300)' },
                                    { bg: 'var(--surface-elevated)', text: 'var(--text-secondary)' },
                                ];
                                const style = colors[node.level] || colors[2];
                                return (
                                    <div key={node.id} style={{
                                        position: 'absolute', left: node.x - 50, top: node.y,
                                        padding: node.level === 0 ? '10px 20px' : '6px 14px',
                                        borderRadius: node.level === 0 ? '12px' : '8px',
                                        background: style.bg, color: style.text,
                                        fontSize: node.level === 0 ? '0.9rem' : '0.75rem',
                                        fontWeight: node.level === 0 ? 700 : 500,
                                        fontFamily: node.level === 0 ? 'var(--font-display)' : 'var(--font-body)',
                                        whiteSpace: 'nowrap',
                                        border: node.level > 0 ? '1px solid var(--border)' : 'none',
                                    }}>
                                        {node.label}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* ── Tab: Flashcards ─────────────────────────── */}
                {activeTab === 'flashcards' && (
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <span className="text-sm text-muted">Card {cardIndex + 1} of {flashcardsData.length}</span>
                            <div className="progress-bar" style={{ marginTop: '8px' }}>
                                <div className="fill" style={{ width: `${((cardIndex + 1) / flashcardsData.length) * 100}%` }}></div>
                            </div>
                        </div>

                        <div
                            onClick={() => setFlipped(!flipped)}
                            style={{
                                background: flipped ? 'linear-gradient(135deg, rgba(15,184,168,0.1), rgba(255,184,0,0.05))' : 'var(--surface-card)',
                                border: `2px solid ${flipped ? 'var(--primary-500)' : 'var(--border)'}`,
                                borderRadius: '20px',
                                padding: '48px 32px',
                                minHeight: '280px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s',
                                boxShadow: flipped ? 'var(--glow-primary)' : 'none',
                            }}
                        >
                            <div className="text-xs font-mono text-muted" style={{ marginBottom: '16px' }}>{flipped ? 'ANSWER' : 'QUESTION'}</div>
                            <div style={{
                                fontFamily: flipped ? 'var(--font-body)' : 'var(--font-display)',
                                fontSize: flipped ? '1rem' : '1.2rem',
                                fontWeight: flipped ? 400 : 600,
                                lineHeight: 1.6,
                                color: flipped ? 'var(--text-secondary)' : 'var(--text-primary)',
                                whiteSpace: 'pre-line',
                            }}>
                                {flipped ? flashcardsData[cardIndex].back : flashcardsData[cardIndex].front}
                            </div>
                            <div className="text-xs text-muted" style={{ marginTop: '24px' }}>Click to {flipped ? 'see question' : 'reveal answer'}</div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
                            <button className="btn btn-ghost" onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setFlipped(false); }} disabled={cardIndex === 0}>← Previous</button>
                            <button className="btn btn-ghost" style={{ background: 'var(--error-soft)', color: 'var(--error)', borderColor: 'transparent' }}>😕 Hard</button>
                            <button className="btn btn-ghost" style={{ background: 'var(--warning-soft)', color: 'var(--warning)', borderColor: 'transparent' }}>🤔 Medium</button>
                            <button className="btn btn-ghost" style={{ background: 'var(--success-soft)', color: 'var(--success)', borderColor: 'transparent' }}>😊 Easy</button>
                            <button className="btn btn-primary" onClick={() => { setCardIndex(Math.min(flashcardsData.length - 1, cardIndex + 1)); setFlipped(false); }} disabled={cardIndex === flashcardsData.length - 1}>Next →</button>
                        </div>
                    </div>
                )}

                {/* ── Tab: Audio ──────────────────────────────── */}
                {activeTab === 'audio' && (
                    <div className="grid-2">
                        {activeSubject.generated.audios > 0 ? (
                            <>
                                <div className="card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>🎧</div>
                                        <div>
                                            <div className="font-semibold">Ch 1-3: Process Management</div>
                                            <div className="text-xs text-muted">8 min • Generated from Process Management Notes.pdf</div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '16px', background: 'var(--surface)', borderRadius: '12px', padding: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-500)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}>▶</button>
                                            <div style={{ flex: 1 }}>
                                                <div className="progress-bar" style={{ height: '4px' }}><div className="fill" style={{ width: '35%' }}></div></div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}><span className="text-xs text-muted">2:48</span><span className="text-xs text-muted">8:12</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--accent-500), var(--accent-700))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>🎧</div>
                                        <div>
                                            <div className="font-semibold">Ch 4-6: Memory Management</div>
                                            <div className="text-xs text-muted">11 min • Generated from Memory Management Slides.pptx</div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '16px', background: 'var(--surface)', borderRadius: '12px', padding: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-500)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--text-inverse)' }}>▶</button>
                                            <div style={{ flex: 1 }}>
                                                <div className="progress-bar" style={{ height: '4px' }}><div className="fill accent" style={{ width: '0%' }}></div></div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}><span className="text-xs text-muted">0:00</span><span className="text-xs text-muted">11:34</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="card" style={{ gridColumn: 'span 2', textAlign: 'center', padding: '48px' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎧</div>
                                <div className="font-display font-semibold">No audio summaries yet</div>
                                <p className="text-secondary text-sm" style={{ marginTop: '8px' }}>Upload study materials and generate audio summaries to listen on the go</p>
                                <button className="btn btn-primary" style={{ marginTop: '16px' }}>Upload Materials First</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
