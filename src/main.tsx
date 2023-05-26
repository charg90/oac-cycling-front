import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { ThemeConfig } from './theme/theme.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppProvider>
            <ThemeConfig>
                <RouterProvider router={router} />
            </ThemeConfig>
        </AppProvider>
    </React.StrictMode>
)
