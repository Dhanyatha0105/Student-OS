'use client';

import Link from 'next/link';

const pillars = [
    { icon: '🗺️', title: 'Career Atlas', desc: 'AI-generated, graph-based career roadmaps personalized to YOUR goals, skills, and timeline.', color: '#0fb8a8', gradient: 'linear-gradient(135deg, #0fb8a8, #0d9e91)' },
    { icon: '📚', title: 'Study Engine', desc: 'Upload notes → Get mindmaps, audio summaries, video explanations, flashcards, and practice quizzes.', color: '#ffb800', gradient: 'linear-gradient(135deg, #ffb800, #cc9300)' },
    { icon: '📡', title: 'Opportunity Radar', desc: 'Live feed of hackathons, internships, scholarships, and competitions — matched to your roadmap.', color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    { icon: '🤝', title: 'Social Layer', desc: 'Goal-based cohorts, mentorship from seniors, accountability partners, and campus communities.', color: '#a78bfa', gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
    { icon: '📄', title: 'Resume Builder', desc: 'AI-powered resume generation auto-populated from your journey, projects, and achievements.', color: '#f472b6', gradient: 'linear-gradient(135deg, #f472b6, #ec4899)' },
];

const stats = [
    { value: '370M+', label: 'Students in India', icon: '🇮🇳' },
    { value: '100%', label: 'Free to Start', icon: '🎉' },
    { value: '5', label: 'Integrated Pillars', icon: '🏛️' },
    { value: 'AI', label: 'Powered by Gemini', icon: '🤖' },
];

export default function LandingPage() {
    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text-primary)', minHeight: '100vh' }}>
            {/* ── Navbar ─────────────────────────────────── */}
            <nav style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 48px', borderBottom: '1px solid var(--border-subtle)',
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                background: 'rgba(6,10,19,0.85)', backdropFilter: 'blur(16px)',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎓</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', background: 'linear-gradient(135deg, #0fb8a8, #ffb800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Student OS</span>
                </div>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <a href="#pillars" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Features</a>
                    <a href="#how" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>How It Works</a>
                    <a href="#stats" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Market</a>
                    <Link href="/dashboard" style={{ padding: '8px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #0fb8a8, #0d9e91)', color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>Open Dashboard →</Link>
                </div>
            </nav>

            {/* ── Hero ───────────────────────────────────── */}
            <section style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Background effects */}
                <div style={{ position: 'absolute', top: '20%', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,184,168,0.06) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', top: '30%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,184,0,0.04) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(15,184,168,0.1)', border: '1px solid rgba(15,184,168,0.2)', marginBottom: '24px', fontSize: '0.8rem', color: 'var(--primary-400)' }}>
                        ✨ The future of student platforms is here
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-2px',
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #0fb8a8 40%, #ffb800 80%, #f1f5f9 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        animation: 'shimmer 4s ease-in-out infinite',
                    }}>
                        Your Career Atlas.
                        <br />Built for Students.
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '24px auto 0', lineHeight: 1.7 }}>
                        Instagram is for creators. LinkedIn is for professionals.
                        <br /><strong style={{ color: 'var(--primary-400)' }}>Student OS is for students.</strong>
                    </p>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '36px' }}>
                        <Link href="/dashboard" style={{ padding: '14px 32px', borderRadius: '12px', background: 'linear-gradient(135deg, #0fb8a8, #0d9e91)', color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-display)', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 0 30px rgba(15,184,168,0.25)' }}>
                            Launch Dashboard 🚀
                        </Link>
                        <a href="#pillars" style={{ padding: '14px 32px', borderRadius: '12px', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1rem', fontFamily: 'var(--font-display)' }}>
                            Explore Features
                        </a>
                    </div>
                </div>

                <style>{`@keyframes shimmer { 0% { background-position: 0% center; } 50% { background-position: 100% center; } 100% { background-position: 0% center; } }`}</style>
            </section>

            {/* ── Tagline Strip ─────────────────────────── */}
            <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)', padding: '20px 0', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', padding: '0 48px' }}>
                    {['Graph-Based Roadmaps', 'AI Study Tools', 'Live Opportunities', 'Goal-Based Social', 'Auto-Generated Resumes'].map(t => (
                        <span key={t} style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', whiteSpace: 'nowrap', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
                    ))}
                </div>
            </section>

            {/* ── Five Pillars ──────────────────────────── */}
            <section id="pillars" style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px' }}>The Five Pillars</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>Everything a student needs in one platform. Each pillar feeds into the others.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
                    {pillars.map((p, i) => (
                        <div key={p.title} style={{
                            background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px',
                            transition: 'all 0.3s', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = p.color + '50'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${p.color}15`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>{p.icon}</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '8px' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ──────────────────────────── */}
            <section id="how" style={{ padding: '80px 48px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px' }}>How It Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginTop: '48px' }}>
                        {[
                            { step: '01', title: 'Set Your Goal', desc: '"I want to intern at Microsoft by end of 3rd year"', icon: '🎯' },
                            { step: '02', title: 'Get Your Atlas', desc: 'AI generates a personalized, node-by-node career roadmap', icon: '🗺️' },
                            { step: '03', title: 'Study & Build', desc: 'Upload notes for AI study tools, complete projects on the roadmap', icon: '📚' },
                            { step: '04', title: 'Land It', desc: 'Apply to matched opportunities with an auto-generated resume', icon: '🚀' },
                        ].map(s => (
                            <div key={s.step} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{s.icon}</div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--primary-400)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '8px' }}>STEP {s.step}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats ─────────────────────────────────── */}
            <section id="stats" style={{ padding: '80px 48px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
                    {stats.map(s => (
                        <div key={s.label} style={{ textAlign: 'center', padding: '24px' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-400)', letterSpacing: '-1px' }}>{s.value}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────── */}
            <section style={{ padding: '100px 48px', textAlign: 'center', background: 'linear-gradient(180deg, transparent 0%, rgba(15,184,168,0.05) 100%)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-1px' }}>Ready to map your future?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '12px' }}>Join the platform built exclusively for students.</p>
                <Link href="/dashboard" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #0fb8a8, #ffb800)', color: 'var(--text-inverse)', fontWeight: 800, fontSize: '1.1rem',
                    fontFamily: 'var(--font-display)', marginTop: '32px', boxShadow: '0 0 40px rgba(15,184,168,0.2), 0 0 40px rgba(255,184,0,0.1)',
                }}>
                    Get Started — It&apos;s Free 🎓
                </Link>
            </section>

            {/* ── Footer ────────────────────────────────── */}
            <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🎓</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Student OS</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Built with ambition from India 🇮🇳</div>
            </footer>
        </div>
    );
}
