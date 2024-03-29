import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { TPost } from "./types";

const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <CategoriesList />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 md900:grid-cols-3 gap-20">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="mb-10">
              <Post
                id={post.id}
                author={post.author.name}
                authorEmail={post.authorEmail}
                date={post.createAt}
                thumbnail={post.imageUrl2}
                category={post.catName}
                title={post.title}
                content={""}
                blurb={post.blurb}
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
