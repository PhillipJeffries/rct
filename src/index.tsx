import { createRoot } from 'react-dom/client';

import { App } from './App/App';

// import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './App/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'App/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <ErrorBoundary fallback={<h1>something wrong</h1>}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>

        </BrowserRouter>
    </>
);
