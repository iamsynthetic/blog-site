import Link from "next/link";
import { TCategory } from "@/app/types";

const getCategories = async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

async function CategoriesList() {
  const categories = await getCategories();

  return (
    <div className="flex gap-2 text-xs flex-wrap pb-10 robotomono400">
      {categories &&
        categories.map((category: TCategory) => (
          <Link
            className="tags"
            key={category.catName}
            href={`/categories/${category.catName}`}
          >
            {category.catName}
          </Link>
        ))}
    </div>
  );
}

export default CategoriesList;
