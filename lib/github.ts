const GITHUB_API = "https://api.github.com";

// Build headers conditionally so the absence of a token doesn't break the app
const headers: HeadersInit = process.env.GITHUB_TOKEN
  ? {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }
  : {};

// Get public repo count with graceful fallback if the request fails
export async function getPublicRepoCount() {
  try {
    const username = process.env.GITHUB_USERNAME;

    // If username is not configured, just return a safe default
    if (!username) {
      console.warn("GITHUB_USERNAME is not set. Using fallback repo count of 0.");
      return 0;
    }

    const res = await fetch(`${GITHUB_API}/users/${username}`, {
      headers,
      // Cache for 1 hour in production; doesn't block local dev
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch GitHub user:", res.status, res.statusText);
      return 0;
    }

    const data = await res.json();
    return (data.public_repos as number) ?? 0;
  } catch (error) {
    console.error("Error while fetching GitHub repo count:", error);
    return 0;
  }
}
