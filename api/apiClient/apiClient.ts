const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://fango-api.onrender.com"
    : "https://fango-api.onrender.com";

export const apiClient = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  console.log(process.env.NODE_ENV);
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
  }
  return response.json();
};
