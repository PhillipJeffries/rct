import { createRoot } from 'react-dom/client';

import { App } from './App/App';

// import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './App/providers/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </>
);
