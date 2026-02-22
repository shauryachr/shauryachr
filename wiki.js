async function fetchWiki(query) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    );
    const data = await res.json();
    return data.extract || null;
  } catch {
    return null;
  }
}