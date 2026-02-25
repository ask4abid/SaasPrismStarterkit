# 🏗️ Saas Prism - Starter Kit

**The multi-faceted dashboard engine for high-performance enterprise applications.**

Saas Prism is a premium, production-ready React starter kit engineered for developers who demand more than just a basic template. While free templates provide the "what," Prism UI provides the "how"—delivering a robust architecture, seamless data integration, and a refined design system that scales.

🚀 **[Live Demo](https://saas-prism-starterkit.vercel.app/)**

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | MUI v7 (Material UI) |
| **Language** | TypeScript (Strict Mode) |
| **Data Viz** | @mui/x-charts |
| **Data Grid** | @mui/x-data-grid |
| **Icons** | Lucide React |
| **Animation** | Motion (Framer Motion) |

---

## ✨ High-Level Features

- **Advanced Design System**: Leveraging MUI `CssVarsProvider` for a zero-FOUC (Flash of Unstyled Content) dark mode experience. Your users get a flicker-free transition between themes.
- **Clean Architecture**: Organized using a feature-based folder structure that promotes modularity and prevents the "spaghetti code" common in large-scale SaaS projects.
- **Enterprise Components**: Seamless, out-of-the-box integration of `@mui/x-data-grid` for complex data management and `@mui/x-charts` for multi-faceted analytics.
- **Accessibility (A11y)**: Built with inclusivity in mind. Every component is audited for WCAG compliance, ensuring a professional experience for all users.
- **Responsive Precision**: A layout that doesn't just "work" on mobile but is meticulously crafted for every breakpoint.

---

## 🏗️ Project Structure

The `/src` directory is organized to support rapid development and long-term maintainability:

```text
src/
├── components/          # Shared UI components (Buttons, Cards, Inputs)
│   ├── Common/          # Reusable cross-feature components (Search, Modals)
│   └── Layout/          # Core layout structures (Sidebar, TopBar, Footer)
├── features/            # Domain-specific logic and components
│   ├── analytics/       # Analytics-specific charts and data logic
│   ├── customers/       # Customer management modules
│   └── transactions/    # Financial tracking and history
├── theme/               # Design system configuration
│   ├── theme.ts         # Global MUI theme overrides and CSS variables
│   └── palette.ts       # Custom color tokens and semantic naming
├── pages/               # Page-level components and route definitions
├── services/            # API clients and external service integrations
└── types/               # Global TypeScript definitions and interfaces
```

---

## 🛠️ Developer Guide

### Customizing the Theme

Saas Prism is built on a "Theme-First" philosophy. All global styles are centralized in `src/theme/theme.ts`.

- **Global Changes**: Update the `theme.ts` file to modify border radii, primary colors, or typography across the entire application instantly.
- **CSS Variables**: We use MUI's CSS variables support, allowing you to tweak styles in the browser console and see real-time updates without a full rebuild.
- **Component Overrides**: Every MUI component has been pre-styled to match the Prism aesthetic, but can be easily adjusted via the `components` key in the theme object.

```typescript
// Example: src/theme/theme.ts
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  colorSchemes: {
    light: { palette: { primary: { main: '#0F172A' } } },
    dark: { palette: { primary: { main: '#F8FAFC' } } }
  }
});
```

---

## 🚀 Deployment

Deploying Saas Prism to Vercel is a one-click process:

1. Push your code to a GitHub repository.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

For manual deployment:
```bash
npm run build
npm run start
```

---

## 📊 Comparison Table

| Feature | Standard Templates | Saas Prism UI |
| :--- | :---: | :---: |
| **Performance** | Basic | Optimized (Zero-FOUC) |
| **Type Safety** | Partial | Full Strict TypeScript |
| **MUI X Support** | Manual Setup | Native Integration |
| **Architecture** | Flat / Messy | Feature-Based / Clean |
| **Dark Mode** | Basic Toggle | CssVarsProvider (Native) |

---

## 📜 Changelog

### v1.0.0 (Feb 2026)
- **Initial Release**: Full support for Next.js 15 and MUI v7.
- **Theming**: Integrated Light/Dark mode via `CssVarsProvider`.
- **Features**: Added Analytics, Customer Management, and Transaction modules.
- **Search**: Implemented Command+K spotlight search palette.

---

Built with ❤️ by the Saas Prism Team. Submitted for review to the **MUI Store**.
