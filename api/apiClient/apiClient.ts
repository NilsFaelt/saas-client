const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.myproductiondomain.com"
    : "http://localhost:3000";

export const apiClient = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  console.log(endpoint);
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
  }
  return response.json();
};
