var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// chl.js
var DATASET = "https://coastwatch.noaa.gov/erddap/griddap/noaacwNPPN20S3ASCIDINEOF2kmDaily.json";
var ALLOWED = ["https://navaforce.github.io", "http://localhost:8000", "http://127.0.0.1:8000"];
var HALF = 0.06;
function pickCors(origin) {
  return { "Access-Control-Allow-Origin": ALLOWED.includes(origin) ? origin : ALLOWED[0], "Vary": "Origin" };
}
__name(pickCors, "pickCors");
function summarize(json) {
  const cols = json.table.columnNames, ti = cols.indexOf("time"), ci = cols.indexOf("chlor_a");
  const rows = json.table.rows.filter((r) => Number.isFinite(r[ci]) && r[ci] > 0);
  if (!rows.length) return null;
  const newest = rows.reduce((a, r) => r[ti] > a ? r[ti] : a, "");
  const vals = rows.filter((r) => r[ti] === newest).map((r) => r[ci]).sort((a, b) => a - b);
  return { chl: vals[Math.floor(vals.length / 2)], date: newest.slice(0, 10), n: vals.length };
}
__name(summarize, "summarize");
var chl_default = {
  async fetch(req) {
    const origin = req.headers.get("Origin") || "", cors = pickCors(origin);
    if (req.method === "OPTIONS") return new Response(null, { headers: { ...cors, "Access-Control-Allow-Methods": "GET" } });
    const u = new URL(req.url), lat = parseFloat(u.searchParams.get("lat")), lon = parseFloat(u.searchParams.get("lon"));
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180)
      return new Response(JSON.stringify({ error: "lat and lon required" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
    const q = `?chlor_a[(last)][(0.0)][(${(lat - HALF).toFixed(3)}):1:(${(lat + HALF).toFixed(3)})][(${(lon - HALF).toFixed(3)}):1:(${(lon + HALF).toFixed(3)})]`;
    try {
      const r = await fetch(DATASET + q, { cf: { cacheTtl: 21600, cacheEverything: true } });
      if (!r.ok) return new Response(JSON.stringify({ chl: null, reason: "no data here" }), { headers: { ...cors, "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" } });
      const s = summarize(await r.json());
      return new Response(JSON.stringify(s || { chl: null, reason: "no valid pixels" }), { headers: { ...cors, "Content-Type": "application/json", "Cache-Control": "public, max-age=21600" } });
    } catch (e) {
      return new Response(JSON.stringify({ chl: null, reason: "upstream error" }), { status: 502, headers: { ...cors, "Content-Type": "application/json" } });
    }
  }
};
export {
  chl_default as default,
  pickCors,
  summarize
};
//# sourceMappingURL=chl.js.map
