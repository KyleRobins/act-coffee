const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

export interface StrapiNewsItem {
  id: number;
  documentId: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageAlt: string;
  image?: {
    url: string;
    alternativeText: string | null;
  } | null;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
}

function buildImageUrl(url: string): string {
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function toNewsItem(raw: StrapiNewsItem): NewsItem {
  return {
    id: String(raw.id),
    category: raw.category,
    title: raw.title,
    date: raw.date,
    excerpt: raw.excerpt,
    imageUrl: raw.image ? buildImageUrl(raw.image.url) : "",
    imageAlt: raw.image?.alternativeText ?? raw.imageAlt ?? "",
  };
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const url = `${STRAPI_URL}/api/news-items?populate=image&sort=publishedAt:desc`;
  const headers: Record<string, string> = {};
  if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

  const res = await fetch(url, {
    headers,
    next: { tags: ["strapi-news"] },
  });

  if (!res.ok) {
    throw new Error(`Strapi news fetch failed: ${res.status}`);
  }

  const json = await res.json();
  return (json.data as StrapiNewsItem[]).map(toNewsItem);
}
