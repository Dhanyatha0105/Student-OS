'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { currentUser } from '@/data/mock';

const navItems = [
    { label: 'Dashboard', icon: '📊', href: '/dashboard' },
    { section: 'PILLARS' },
    { label: 'Career Atlas', icon: '🗺️', href: '/dashboard/atlas' },
    { label: 'Study Engine', icon: '📚', href: '/dashboard/study' },
    { label: 'Opportunity Radar', icon: '📡', href: '/dashboard/radar' },
    { label: 'Social', icon: '🤝', href: '/dashboard/social' },
    { label: 'Resume Builder', icon: '📄', href: '/dashboard/resume' },
    { section: 'ACCOUNT' },
    { label: 'Profile', icon: '👤', href: '/dashboard/profile' },
] as const;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <span style={{ fontSize: '1.5rem' }}>🎓</span>
                    <h1>Student OS</h1>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item, i) => {
                        if ('section' in item) {
                            return <div key={i} className="nav-section-title">{item.section}</div>;
                        }
                        const isActive = item.href === '/dashboard'
                            ? pathname === '/dashboard'
                            : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="sidebar-profile">
                    <div className="sidebar-avatar">{currentUser.avatar}</div>
                    <div className="sidebar-profile-info">
                        <div className="sidebar-profile-name">{currentUser.name}</div>
                        <div className="sidebar-profile-role">{currentUser.branch} • Year {currentUser.year}</div>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}
