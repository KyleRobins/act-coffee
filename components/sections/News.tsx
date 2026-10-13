import { getNewsItems } from "@/lib/strapi";
import { NEWS_ITEMS } from "@/lib/data";
import { NewsClient } from "./NewsClient";

export async function News() {
  let items;

  try {
    items = await getNewsItems();
    if (items.length === 0) throw new Error("no items");
  } catch {
    // Fall back to static placeholder data when Strapi is unreachable
    items = NEWS_ITEMS.map((item) => ({
      id: String(item.id),
      category: item.category,
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
      imageUrl: item.imageUrl,
      imageAlt: item.imageAlt,
    }));
  }

  return <NewsClient items={items} />;
}
