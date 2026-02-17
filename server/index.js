const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");
const data = require("./data/automotiveData");
const { getVehicles, compareVehicles, getKnowledgeSnapshot } = require("./services/automotiveService");
const { handleChat } = require("./services/chatService");

const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "../public");

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
  });
}

function serveFile(res, filepath) {
  const ext = path.extname(filepath);
  const contentType =
    {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript",
      ".json": "application/json"
    }[ext] || "application/octet-stream";

  fs.readFile(filepath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === "/api/health" && req.method === "GET") {
    return sendJson(res, 200, { status: "ok", service: "automotive-ai-encyclopedia" });
  }

  if (pathname === "/api/knowledge" && req.method === "GET") {
    return sendJson(res, 200, getKnowledgeSnapshot());
  }

  if (pathname === "/api/vehicles" && req.method === "GET") {
    const vehicles = getVehicles(parsedUrl.query);
    return sendJson(res, 200, { count: vehicles.length, vehicles });
  }

  if (pathname === "/api/manufacturers" && req.method === "GET") {
    return sendJson(res, 200, data.manufacturerTimelines);
  }

  if (pathname === "/api/modules" && req.method === "GET") {
    return sendJson(res, 200, data.engineeringModules);
  }

  if (pathname === "/api/timeline" && req.method === "GET") {
    return sendJson(res, 200, data.milestones);
  }

  if (pathname === "/api/compare" && req.method === "POST") {
    try {
      const body = await readBody(req);
      return sendJson(res, 200, compareVehicles(body.vehicleIds || []));
    } catch (error) {
      return sendJson(res, 400, { error: error.message });
    }
  }

  if (pathname === "/api/chat" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const message = (body.message || "").trim();
      if (!message) {
        return sendJson(res, 400, { error: "Message is required." });
      }
      return sendJson(res, 200, handleChat({ message, sessionId: body.sessionId }));
    } catch (error) {
      return sendJson(res, 400, { error: error.message });
    }
  }

  const filePath = path.join(publicDir, pathname === "/" ? "index.html" : pathname);
  if (filePath.startsWith(publicDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return serveFile(res, filePath);
  }

  return serveFile(res, path.join(publicDir, "index.html"));
});

server.listen(PORT, () => {
  console.log(`Automotive AI encyclopedia running on http://localhost:${PORT}`);
});
