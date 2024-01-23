"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function SignInBtns() {
  const router = useRouter();

  return (
    <>
      <h1 className="text-center mt-8">sign in</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="signinbtn flex items-center border p-4 rounded-full gap-4"
        >
          <span>
            <Image
              src={"/github-logo.svg"}
              width={30}
              height={30}
              alt="github logo"
            />
          </span>
          Sign in with github
        </button>
      </div>
    </>
  );
}

export default SignInBtns;
