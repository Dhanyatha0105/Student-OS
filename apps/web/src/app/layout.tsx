import './globals.css';

export const metadata = {
    title: 'Student OS — Your Career Atlas',
    description: 'Instagram is for creators. LinkedIn is for professionals. Student OS is for students.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
                <div style={{
                    position: 'fixed', bottom: 12, right: 12, zIndex: 9999,
                    background: 'rgba(17,24,39,0.9)', color: '#fbbf24',
                    border: '1px solid rgba(251,191,36,0.4)', borderRadius: 8,
                    padding: '6px 11px', font: "600 11px/1.2 system-ui, sans-serif",
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)', pointerEvents: 'none',
                }}>
                    Demo · sample data
                </div>
            </body>
        </html>
    );
}
