import CreatePostForm from "@/components/CreatePostForm";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

async function CreatePost() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  return <CreatePostForm />;
}

export default CreatePost;
