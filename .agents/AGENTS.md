# User Preferences & Architectural Rules

Always adhere to these rules when working on this project (and specifically the Next.js template builder application), unless explicitly instructed otherwise by the user.

## 1. Architectural Structure (Next.js Template Builder)
- **Folder Structure**: This project uses a centralized template builder approach. All templates should be placed inside `app/templates/[template-name]/`.
- **Strict Component Segregation**: EVERY SINGLE SECTION on a page MUST have its own dedicated, self-contained component inside the `components/` folder (e.g., `WeAreSection.tsx`, `HomeHero.tsx`, `AboutWeAreSection.tsx`). Never bundle multiple visual sections into a single massive component.
- **Page Composition**: A template consists of these granular `components/` which are then assembled inside `pages/` (e.g., `HomePage`, `AboutPage`, `ServicesPage`).
- **Routing**: Next.js route handlers (`app/page.tsx`, `app/about/page.tsx`) should simply import the respective template page component and pass data to it.
- **100% Data-Driven (Centralized JSON)**: ALL static text content, configuration, form labels, placeholders, and image URLs must be completely centralized in a single file: `app/data/templates.json`. 
- **Centralized Data Types**: All TypeScript interfaces defining the JSON schema must be centralized in `app/data/templates.types.ts`.
- **No Hardcoded Data**: UI Components must be strictly presentational and receive all their content dynamically via a single `data` prop (`{ data }`). Absolutely no hardcoded content is allowed within the component sections. Use dummy content/images with fallback ternaries (`data?.title || 'Default Title'`) if data is missing.

## 2. Design, Styling, and Visual Aesthetics
- **Theme Constraints**: Do NOT use default dark themes unless specifically requested. Build **Premium Light Themes** featuring clean white/off-white backgrounds (`#ffffff`, `#f8f9fa`) with rich, professional accent colors (e.g., Deep Navy Blue, Emerald, Amber).
- **Typography**: Use modern, premium fonts. Default choices should be `Playfair Display` for classy headings and `Inter` for clean body text, unless specified otherwise.
- **100% Component-Level CSS (Zero Global Pollution)**: All CSS (including layout, padding, grid/flex utilities, media queries, responsive fixes, and hover effects) MUST be completely self-contained and physically embedded inside the `.tsx` component using a `<style dangerouslySetInnerHTML={{ __html: \`...\` }} />` block within the JSX. 
  - **Strict Rule**: DO NOT add any new utility or component classes to `globals.css`. `globals.css` should ONLY contain the absolute base (`:root` variables, font imports, and base tag resets like `body` or `h1`). 
  - **Reasoning**: This ensures 100% independent rendering without CSS overlap or missing styles when components are dynamically previewed in the Builder platform. Do NOT use `.module.css` files. Inline styles (`style={{ ... }}`) are acceptable for simple dynamic values.
- **Layout & Structure**:
  - Always design visually stunning interfaces. Use full-width hero banners with background images and overlays where appropriate.
  - Implement modern patterns like cards, smooth tag badges, prominent clear Call-To-Actions (CTAs), and dedicated form/calendar UIs for 'Contact' or 'Booking' pages.
  - Maintain a sticky, blur-backdrop Header (`backdrop-filter: blur(10px)`).
- **Visual Excellence**: The design MUST "wow" the user. Avoid plain, basic HTML structure; incorporate subtle shadows, border radii (`8px` or `16px`), distinct section dividers, and clean typography hierarchies.

## 3. Workflow Preferences
- If the user asks to build a "new project", assume it means adding another template inside the current repository (e.g., `app/templates/project-02`) so they share the same setup, rather than creating a completely new repository, unless they clarify otherwise.
- Remember to strictly maintain the established Next.js folder structure, avoiding the auto-generation of files that do not match these predefined structures.

## Recent Work Patterns & Rules (Updated)
- **Sticky Layouts:** Always ensure parent containers do NOT have `overflow: hidden` or `overflow-x: clip` globally (like on `body`, `html`, or `main`) as it breaks `position: sticky`. For sticky sidebars to work inside flex containers, make sure the flex container has `align-items: flex-start`.
- **Dynamic Interactions:** For mockups and templates, ensure that Pagination blocks are stateful (`useState`) and actually slice the dummy data. Portfolio or Gallery images should feature working Lightbox modals.
- **Next.js Local Data Caching:** When using `fs.readFileSync` in Next.js Server Components, remember that it caches aggressively in dev mode. Use `export const dynamic = 'force-dynamic';` to prevent stale data.
- **Data Completeness:** Ensure that the number of data items in JSON perfectly aligns with grid layouts (e.g., if a grid displays 4 items per row, provide exactly 4 dummy items so it doesn't look empty).

## 4. Spacing, Fonts, & Final Polish (Crucial Rule)
- **Do NOT Auto-Manage Spacing & Gaps:** During the active development of a template, DO NOT obsess over standardizing global spacing, gaps, margins, or paddings (e.g., standardizing every gap to exactly 30px) unless explicitly instructed. The user prefers to handle all "gap/spacing" polish manually at the END of the project. 
- **Font Selection:** The user will provide the preferred font name(s) at the **START** of the project (e.g., 'Outfit'). Apply this font strictly to the global CSS variables and do NOT change or debate the font later during development unless the user explicitly requests a change at the end.

## 5. Standard Operating Procedure for New Templates
When creating a new template (or updating an existing one), automatically enforce these patterns without asking:
- **Strict Self-Containment:** Every component (e.g., `Header`, `Hero`, `Causes`) MUST import `rawData` and `parseCmsData` directly, and extract its own `defaultData` as a fallback. Do not rely heavily on massive prop-drilling from parent pages if it can be avoided.
- **Strict JSON & TypeScript Sync:** Any new component or field added MUST have its text/content placed in `templates.json` and its interface immediately declared in `templates.types.ts`. NO exceptions.
- **Interactive Elements:** If an element needs interactivity (like a mobile menu toggle, tabs, or a form submission like a newsletter), automatically add `"use client";` at the top of the component and implement the basic functional state (e.g., `useState`). Do not leave them as dead UI unless requested.
