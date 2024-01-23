import SignInBtns from "@/components/SignInBtns";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import LogIn from "@/components/LogIn";

async function SignIn() {
  redirect("/login");
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  // return <SignInBtns />;

  return <LogIn />;
}

export default SignIn;
