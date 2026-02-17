# AutoVerse AI Encyclopedia

Production-ready full-stack automotive knowledge platform with:

- Context-aware AI chat assistant specialized in automobile history, engineering, and comparisons.
- Structured automotive database spanning classic cars, muscle cars, supercars, EVs, SUVs/trucks, and concept milestones.
- Interactive search and filtering by manufacturer, year, body type, engine, and category.
- Visual timeline, educational modules, manufacturer timelines, and side-by-side comparison panel.
- Modern automotive-themed glassmorphism UI with responsive layout and floating chat widget.

## Architecture

- `server/`: Node.js HTTP backend with modular services and domain data.
  - `data/automotiveData.js`: Structured knowledge base.
  - `services/automotiveService.js`: Filtering, comparisons, snapshot APIs.
  - `services/chatService.js`: Session-aware chat logic and contextual memory.
- `public/`: Front-end SPA (HTML/CSS/JS).

## Run locally

```bash
npm run start
```

Open `http://localhost:3000`.

## API Endpoints

- `GET /api/health`
- `GET /api/knowledge`
- `GET /api/vehicles`
- `GET /api/manufacturers`
- `GET /api/modules`
- `GET /api/timeline`
- `POST /api/compare`
- `POST /api/chat`
