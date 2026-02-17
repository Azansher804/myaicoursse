import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { buildResponse } from './chatEngine.js';
import { categories, educationalModules, featuredVehicles, manufacturers, technologies } from './data/automotiveData.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'AutoIntel Atlas API' });
});

app.get('/api/catalog', (req, res) => {
  const { brand, year, bodyType, engine, category } = req.query;

  let filtered = [...featuredVehicles];

  if (brand) {
    filtered = filtered.filter((v) => v.manufacturer.toLowerCase().includes(String(brand).toLowerCase()));
  }
  if (year) {
    filtered = filtered.filter((v) => v.year === Number(year));
  }
  if (bodyType) {
    filtered = filtered.filter((v) => v.bodyType.toLowerCase().includes(String(bodyType).toLowerCase()));
  }
  if (engine) {
    filtered = filtered.filter((v) => v.engine.toLowerCase().includes(String(engine).toLowerCase()));
  }
  if (category) {
    const normalized = String(category).toLowerCase();
    filtered = filtered.filter((v) => v.era.toLowerCase().includes(normalized) || v.summary.toLowerCase().includes(normalized));
  }

  res.json({
    filters: { brand, year, bodyType, engine, category },
    results: filtered,
    categories,
    manufacturers,
    technologies,
    educationalModules
  });
});

app.post('/api/chat', (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A text message is required.' });
  }

  const response = buildResponse({ message, history });
  return res.json(response);
});

app.listen(PORT, () => {
  console.log(`AutoIntel Atlas API running on http://localhost:${PORT}`);
});
