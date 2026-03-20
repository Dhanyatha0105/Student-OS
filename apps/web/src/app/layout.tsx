import './globals.css';

export const metadata = {
    title: 'Student OS — Your Career Atlas',
    description: 'Instagram is for creators. LinkedIn is for professionals. Student OS is for students.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
