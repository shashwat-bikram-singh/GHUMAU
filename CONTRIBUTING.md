# Contributing to GHUMAU

Thank you for contributing to the Ghumau platform. To maintain the high quality and consistent aesthetic of the project, please follow these guidelines.

## 🏔️ The "Alpine Sanctuary" Design Principles

The Ghumau platform is built on the **Alpine Sanctuary** design system. Every new component or page must adhere to these rules:

1. **No-Line Rule**: Avoid using solid borders or lines to separate sections. Use tonal backgrounds (`bg-surface-container-low`, etc.) and subtle shadows (`ambient-shadow`) to create hierarchy.
2. **Typography**: Use `font-display` (Plus Jakarta Sans) for headings and `font-body` for content. Headings should be bold and tracking-tight.
3. **Corner Rounding**: Use large, organic corner radii. Buttons should be `rounded-full` and cards should use `rounded-3xl` or `rounded-[2rem]`.
4. **Motion**: Every interactive element should have a transition or animation. Use `framer-motion` for page entries and hover effects.
5. **Glassmorphism**: Use `backdrop-blur-xl` and semi-transparent backgrounds for floating elements like the navbar.
6. **Color Palette**: Stick to the predefined semantic tokens: `bg-surface` for backgrounds, `text-on-surface` for primary text, and `primary` for accent actions.
7. **Elevation & Shadows**: Instead of hard shadows, use "Elevation Layers". Use `shadow-elevation-1` for cards and `shadow-elevation-2` for floating menus. These are designed to mimic the soft, diffused light of the Himalayas.

## 🛠️ Development Workflow

1. **Feature Branches**: Create a new branch for every feature or bug fix.
2. **Linting**: Ensure your code passes ESLint rules before committing.
   ```bash
   cd frontend
   npm run lint
   ```
3. **Commit Messages**: Use conventional commits (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
4. **Submodules**: Remember that `frontend` is a submodule. Commit changes inside the `frontend` directory first, then update the pointer in the root repository.

## 📂 Adding New Screens

When adding a new screen:
1. Create the component in `frontend/src/pages/`.
2. Export it and add a route in `frontend/src/App.jsx`.
3. Add a link to the navigation in `frontend/src/components/Navbar.jsx` if applicable.
4. Ensure the page uses the `min-h-screen pt-32 pb-24 bg-surface` layout pattern.

## 🆘 Need Help?

If you have questions about the design system or architecture, please refer to the `stitch_ghumuam_nepal_travel_ui` directory for reference implementations and source designs.
