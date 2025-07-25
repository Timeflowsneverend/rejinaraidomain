# Nana House Bouquets Gallery

A modern, responsive React web app for showcasing handcrafted bouquets, built with Vite, React, React Router, and Tailwind CSS.

## Features

- **Gallery**: Browse a collection of beautiful bouquet images.
- **Highlight Section**: See a few randomly highlighted bouquets on the homepage.
- **Full Gallery**: Click "See More" to view all available bouquet photos.
- **Responsive Design**: Looks great on mobile and desktop.
- **Contact Section**: Social media links for Nana House.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but scripts use pnpm by default)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd rejinaraidomain
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Development

To start the development server with hot reloading:

```bash
pnpm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To create a production build:

```bash
pnpm run build
```

### Preview Production Build

To preview the production build locally:

```bash
pnpm run preview
```

### Linting

To check for code style issues:

```bash
pnpm run lint
```

## Project Structure

```
src/
  App.jsx         # Main app and routes
  assets/         # Bouquet images and static assets
  index.css       # Tailwind and global styles
  main.jsx        # App entry point
public/
  ...             # Static files
```

## Customization

- To update bouquet images, add or replace files in `src/assets/` (filenames starting with "WhatsApp" are used in the gallery).
- Update social media links in the `Contact` section of `App.jsx`.

## License

This project is for Nana House. Please contact the owner for reuse or collaboration.

---

_Built with ❤️ using React, Vite, and Tailwind CSS._
