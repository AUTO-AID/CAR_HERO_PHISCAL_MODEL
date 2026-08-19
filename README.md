# Car Hero Physical Model

Visual documentation app for the Car Hero backend data model and API surface.

## What It Shows

- MongoDB collections and relationships.
- Backend endpoint coverage grouped by domain.
- Live schema/API data when the backend is reachable.
- Local fallback data for offline review.
- Export tools for diagrams and documentation snapshots.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

The dev server uses Vite on port `3003`.

## Structure

- `src/domain/entities`: local model, endpoint, relationship, and translation data.
- `src/infrastructure/services`: backend/schema fetching and export helpers.
- `src/application/contexts`: diagram state and data normalization.
- `src/presentation`: React pages, canvas, collections, endpoint views, and styles.
- `public`: static public assets, currently the Car Hero logo.

Generated folders such as `dist`, logs, cache files, and starter Vite assets should stay out of the repository.
