# AutoIntel Atlas

AutoIntel Atlas is a full-stack AI automotive encyclopedia with a modern glassmorphism UI, structured vehicle data, timeline exploration, educational modules, and a context-aware automotive chat assistant.

## Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Data:** Modular in-memory automotive knowledge dataset (easy to replace with DB)

## Features
- Automotive AI assistant with context memory, comparisons, and recommendation-style exploration.
- Structured catalog by manufacturer, era, body type, and engine.
- Manufacturer timelines and technology evolution timeline.
- Educational modules for engineering fundamentals, propulsion, and motorsport transfer.
- Interactive side-by-side vehicle comparison panel.
- Responsive premium automotive UI (dark metallic + neon).

## Run locally
```bash
npm install
npm run dev
```
- Frontend: `http://localhost:5173`
- API: `http://localhost:3001`

## API
- `GET /api/health`
- `GET /api/catalog?brand=&year=&bodyType=&engine=&category=`
- `POST /api/chat`

Example chat payload:
```json
{
  "message": "Compare Ferrari F40 and Tesla Model S Plaid",
  "history": [
    { "user": "Tell me about supercars", "assistant": "..." }
  ]
}
```

## Scalability notes
- Data domain is isolated in `server/data/automotiveData.js` for easy migration to SQL/NoSQL.
- Conversation logic is isolated in `server/chatEngine.js` to enable future LLM or RAG integration.
- API contracts are clean and frontend-consumable for mobile or partner integrations.
