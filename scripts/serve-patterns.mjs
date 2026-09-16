import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { exec } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../docs/patterns");
const port = Number(process.env.PATTERNS_PORT) || 8765;
const url = `http://127.0.0.1:${port}/reader.html`;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

function openBrowser(target) {
  const cmd = process.env.WSL_DISTRO_NAME
    ? `cmd.exe /c start ${target}`
    : process.platform === "darwin"
      ? `open ${target}`
      : process.platform === "win32"
        ? `start ${target}`
        : `xdg-open ${target}`;
  exec(cmd);
}

const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? "/", url).pathname);
  const relative = pathname === "/" ? "reader.html" : pathname.replace(/^\/+/, "");
  const file = path.normalize(path.join(root, relative));
  if (!file.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  try {
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    console.log(`Já rodando em ${url}`);
    openBrowser(url);
    return;
  }
  throw err;
});

server.listen(port, "127.0.0.1", () => {
  console.log(url);
  openBrowser(url);
});
