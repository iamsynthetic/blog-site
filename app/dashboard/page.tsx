import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import { TPost } from "../types";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const { posts } = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
};
async function Dashboard() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];
  if (!session) {
    redirect("/login");
  }

  if (email) {
    posts = await getPosts(email);
  }

  return (
    <div>
      <h1>dashboard - my posts</h1>
      <div className="grid grid-cols-3 gap-20">
        {posts && posts.length > 0 ? (
          posts.map((post: TPost) => (
            <div key={post.id} className="mb-10">
              <Post
                id={post.id}
                author={""}
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
          <div className="pt-6">
            no posts created yet{" "}
            <Link className="underline" href={"/create-post"}>
              create new
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
