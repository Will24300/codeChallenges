function parseF(s) {
  // Reject booleans explicitly
  if (typeof s === "boolean") return null;

  const n = Number(s);
  return Number.isFinite(n) ? Number(n.toFixed(1)) : null;
}
