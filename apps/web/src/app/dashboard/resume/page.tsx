'use client';

import { useState } from 'react';
import { resumeData } from '@/data/mock';

const templates = ['Modern', 'Classic', 'Technical', 'Minimal', 'Student'];
const templateColors = ['var(--primary-400)', 'var(--text-secondary)', 'var(--info)', 'var(--text-muted)', 'var(--accent-400)'];

export default function ResumePage() {
    const [activeTemplate, setActiveTemplate] = useState(0);
    const [showAutoFill, setShowAutoFill] = useState(false);

    const r = resumeData;

    return (
        <>
            <div className="topbar">
                <div className="topbar-title">📄 Resume Builder</div>
                <div className="topbar-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => setShowAutoFill(!showAutoFill)}>🤖 Auto-Fill</button>
                    <button className="btn btn-ghost btn-sm">📥 Export DOCX</button>
                    <button className="btn btn-primary btn-sm">📤 Export PDF</button>
                </div>
            </div>
            <div className="page-content">
                {/* Auto-fill Banner */}
                {showAutoFill && (
                    <div className="card animate-fade-in" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, rgba(15,184,168,0.08), rgba(255,184,0,0.05))', borderColor: 'var(--primary-700)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <div className="font-display font-bold">🤖 Auto-Fill from Student OS</div>
                                <p className="text-sm text-secondary" style={{ marginTop: '4px' }}>Automatically populate your resume from your roadmap progress, projects, and skills.</p>
                            </div>
                            <div className="flex gap-sm">
                                <button className="btn btn-primary btn-sm" onClick={() => setShowAutoFill(false)}>Auto-Fill Now</button>
                                <button className="btn btn-ghost btn-sm" onClick={() => setShowAutoFill(false)}>✕</button>
                            </div>
                        </div>
                        <div className="flex gap-sm" style={{ marginTop: '12px' }}>
                            <span className="tag">✅ 8 Skills from Roadmap</span>
                            <span className="tag">✅ 3 Projects from GitHub</span>
                            <span className="tag">✅ 1 Experience</span>
                            <span className="tag">✅ CGPA: 8.7</span>
                        </div>
                    </div>
                )}

                {/* Template Selector */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', overflowX: 'auto' }}>
                    {templates.map((t, i) => (
                        <button key={t} onClick={() => setActiveTemplate(i)} style={{
                            padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', fontFamily: 'var(--font-body)', transition: 'all 0.2s',
                            background: activeTemplate === i ? `${templateColors[i]}18` : 'var(--surface)',
                            border: `1.5px solid ${activeTemplate === i ? templateColors[i] : 'var(--border)'}`,
                            color: activeTemplate === i ? templateColors[i] : 'var(--text-secondary)',
                        }}>
                            {t}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    {/* ── Editor Panel ─────────────────────────── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div className="card"><div className="card-title" style={{ marginBottom: '12px' }}>👤 Personal Info</div>
                            <div className="grid-2" style={{ gap: '10px' }}><input className="input" defaultValue={r.personalInfo.fullName} placeholder="Full Name" /><input className="input" defaultValue={r.personalInfo.email} placeholder="Email" /><input className="input" defaultValue={r.personalInfo.phone} placeholder="Phone" /><input className="input" defaultValue={r.personalInfo.location} placeholder="Location" /><input className="input" defaultValue={r.personalInfo.linkedin} placeholder="LinkedIn" /><input className="input" defaultValue={r.personalInfo.github} placeholder="GitHub" /></div>
                        </div>
                        <div className="card"><div className="card-title" style={{ marginBottom: '12px' }}>🎓 Education</div>
                            {r.education.map((e, i) => (<div key={i} className="grid-2" style={{ gap: '10px' }}><input className="input" defaultValue={e.institution} placeholder="Institution" /><input className="input" defaultValue={e.degree + ' ' + e.field} placeholder="Degree" /><input className="input" defaultValue={`${e.startDate} – ${e.endDate}`} placeholder="Duration" /><input className="input" defaultValue={`CGPA: ${e.cgpa}`} placeholder="CGPA" /></div>))}
                        </div>
                        <div className="card"><div className="card-header"><div className="card-title">💼 Experience</div><button className="btn btn-ghost btn-sm">+ Add</button></div>
                            {r.experience.map((e, i) => (<div key={i}><div className="grid-2" style={{ gap: '10px', marginBottom: '10px' }}><input className="input" defaultValue={e.company} placeholder="Company" /><input className="input" defaultValue={e.position} placeholder="Position" /></div>{e.bullets.map((b, j) => <input key={j} className="input" defaultValue={b} style={{ marginBottom: '6px' }} />)}</div>))}
                        </div>
                        <div className="card"><div className="card-header"><div className="card-title">🛠️ Projects</div><button className="btn btn-ghost btn-sm">+ Add</button></div>
                            {r.projects.map((p, i) => (<div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < r.projects.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}><input className="input" defaultValue={p.title} placeholder="Project Title" style={{ marginBottom: '8px' }} /><div className="flex gap-xs" style={{ flexWrap: 'wrap', marginBottom: '8px' }}>{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>{p.bullets.map((b, j) => <input key={j} className="input" defaultValue={b} style={{ marginBottom: '6px' }} />)}</div>))}
                        </div>
                    </div>

                    {/* ── Preview Panel ────────────────────────── */}
                    <div className="card" style={{ position: 'sticky', top: 'calc(var(--topbar-height) + 16px)', height: 'fit-content', background: '#ffffff', color: '#1a1a2e', padding: '40px 36px', borderRadius: '4px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
                        <div style={{ borderBottom: '2px solid #1a1a2e', paddingBottom: '12px', marginBottom: '16px' }}>
                            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#1a1a2e', letterSpacing: '-0.5px' }}>{r.personalInfo.fullName}</h1>
                            <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '4px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <span>{r.personalInfo.email}</span><span>•</span><span>{r.personalInfo.phone}</span><span>•</span><span>{r.personalInfo.location}</span>
                            </div>
                            <div style={{ fontSize: '0.7rem', color: '#777', marginTop: '2px' }}>{r.personalInfo.linkedin} | {r.personalInfo.github}</div>
                        </div>

                        <section style={{ marginBottom: '14px' }}>
                            <h2 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a2e', borderBottom: '1px solid #ddd', paddingBottom: '3px', marginBottom: '8px' }}>Education</h2>
                            {r.education.map((e, i) => (<div key={i}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontWeight: 700, fontSize: '0.8rem' }}>{e.institution}</span><span style={{ fontSize: '0.7rem', color: '#555' }}>{e.startDate}–{e.endDate}</span></div><div style={{ fontSize: '0.75rem', color: '#555' }}>{e.degree} in {e.field} • CGPA: {e.cgpa}</div></div>))}
                        </section>

                        <section style={{ marginBottom: '14px' }}>
                            <h2 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a2e', borderBottom: '1px solid #ddd', paddingBottom: '3px', marginBottom: '8px' }}>Experience</h2>
                            {r.experience.map((e, i) => (<div key={i}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontWeight: 700, fontSize: '0.8rem' }}>{e.position}</span><span style={{ fontSize: '0.7rem', color: '#555' }}>{e.dates}</span></div><div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '4px' }}>{e.company}</div><ul style={{ fontSize: '0.72rem', color: '#333', paddingLeft: '16px', lineHeight: 1.5 }}>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul></div>))}
                        </section>

                        <section style={{ marginBottom: '14px' }}>
                            <h2 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a2e', borderBottom: '1px solid #ddd', paddingBottom: '3px', marginBottom: '8px' }}>Projects</h2>
                            {r.projects.map((p, i) => (<div key={i} style={{ marginBottom: '10px' }}><div style={{ fontWeight: 700, fontSize: '0.8rem' }}>{p.title} <span style={{ fontWeight: 400, fontSize: '0.7rem', color: '#777' }}>| {p.tech.join(', ')}</span></div><ul style={{ fontSize: '0.72rem', color: '#333', paddingLeft: '16px', lineHeight: 1.5 }}>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul></div>))}
                        </section>

                        <section>
                            <h2 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a2e', borderBottom: '1px solid #ddd', paddingBottom: '3px', marginBottom: '8px' }}>Skills</h2>
                            <div style={{ fontSize: '0.72rem', color: '#333', lineHeight: 1.6 }}>
                                <strong>Languages:</strong> {r.skills.languages.join(', ')}<br />
                                <strong>Frameworks:</strong> {r.skills.frameworks.join(', ')}<br />
                                <strong>Tools:</strong> {r.skills.tools.join(', ')}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
