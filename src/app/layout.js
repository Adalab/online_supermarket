import './styles/globals.css';
import CookieConsent from './components/CookieConsent/CookieConsent';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
