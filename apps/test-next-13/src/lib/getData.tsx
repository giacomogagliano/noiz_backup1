export async function getData(endpoint: string) {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Failed fetching");
  }
  return res.json();
}
