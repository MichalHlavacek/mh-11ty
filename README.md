# Michal Hlavacek - Customer Retention Strategist

This is an 11ty (Eleventy) static site generator project for Michal Hlavacek's personal website.

## Project Structure

- `src/` - Source files
  - `_includes/` - Layout templates
    - `layout.njk` - Base layout with navbar and footer
  - `index.njk` - Homepage content
- `assets/` - Static assets (CSS, images, etc.)
- `_site/` - Generated output (created after build)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Serve locally with live reload:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run build` - Build Tailwind CSS and generate the static site
- `npm run serve` - Build CSS and serve locally
- `npm run dev` - Build CSS, serve, and watch for changes (both CSS and HTML)
- `npm run css` - Build only the Tailwind CSS file

## Layout Structure

The site uses a modular approach:
- **Layout** (`src/_includes/layout.njk`): Contains the HTML structure, navbar, and footer
- **Index** (`src/index.njk`): Contains the main page content

This separation allows for easy maintenance and reusability of the layout across multiple pages.