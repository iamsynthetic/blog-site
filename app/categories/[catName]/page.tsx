import { TPost } from "@/app/types";
import Post from "@/components/Post";

const getPosts = async (catName: string): Promise<TPost[] | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/categories/${catName}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const categories = await res.json();
      const posts = categories.posts;
      return posts;
    }
  } catch (error) {
    console.log("is this on?");
    console.log(error);
  }

  return null;
};

export default async function CategoryPosts({
  params,
}: {
  params: { catName: string };
}) {
  const category = params.catName;
  const posts = await getPosts(category);

  return (
    <>
      <h1>
        <span className="font-normal">category: </span>{" "}
        {decodeURIComponent(category)}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 md900:grid-cols-3 gap-20">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="mb-10">
              <Post
                id={post.id}
                author={post.author.name}
                authorEmail={post.authorEmail}
                date={post.createAt}
                thumbnail={post.imageUrl}
                category={post.catName}
                title={post.title}
                content={post.content}
                links={post.links || []}
              />
            </div>
          ))
        ) : (
          <div>no posts to display</div>
        )}
      </div>
    </>
  );
}
