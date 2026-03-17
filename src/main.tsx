import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './indexBaseUI.css'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Base UIs root */}
    <div className="root">
      <App />
    </div>
  </StrictMode>,
)

// BASE UI DOCUMENTATION
// ### Portals
// Base UI uses portals for components that render popups, such as Dialog and Popover.
// To make portaled components always appear on top of the entire page, add the following style to your application layout root:

// ```tsx title="layout.tsx"
// <body>
//   <div className="root">
//     {children}
//   </div>
// </body>
// ```

// ```css title="styles.css"
// .root {
//   isolation: isolate;
// }
// ```

// This style creates a separate stacking context for your application's `.root` element.
// This way, popups always appear above the page contents, and any `z-index` property in your styles won't interfere with them.

// ### iOS 26+ Safari

// Starting with iOS 26, Safari allows content beneath the UI chrome to be visible. Backdrops such as those used by dialogs must use `position: absolute` instead of `position: fixed` to cover the entire visual viewport. For this to work after the page is scrolled, the following style must be added to your global styles:

// ```css title="styles.css"
// body {
//   position: relative;
// }
// ```