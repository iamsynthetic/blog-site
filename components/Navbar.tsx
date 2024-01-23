"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const { status, data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const size = useWindowSize();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div className="flex justify-between mb-20 relative">
      <div>
        <Link href={"/"}>
          <h1 className="text-dark text-2xl font-semibold tracking-widest">
            I AM SYNTHETIC
          </h1>
        </Link>
        <p className="text-sm text-slate-300">Just a blog.</p>
      </div>

      {status === "authenticated" ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-12 bg-white p-6 shadow-lg rounded-md flex flex-col gap-2 text-right min-w-[160px] ${
              isPopupVisible ? "flex" : "hidden"
            }`}
          >
            <div className="font-bold uppercase text-lg">
              {session?.user?.name}
            </div>
            <div className="text-sm darkcolor mt-2">{session?.user?.email}</div>
            <Link
              className="dropdown-text-link"
              href={"/dashboard"}
              onClick={() => setIsPopupVisible(false)}
            >
              Dashboard
            </Link>
            <Link
              className="dropdown-text-link mb-4"
              href={"/create-post"}
              onClick={() => setIsPopupVisible(false)}
            >
              create post
            </Link>
            <button
              onClick={() => signOut()}
              // className="btn text-[#0D0D0D]  bg-[#DCE4F2]"
              className="logout-btn"
            >
              Logout
            </button>
          </div>
          {size.width > 740 ? (
            <div className="flex gap-6 items-center">
              {/* <Link className="flex items-center gap-1" href={"/create-post"}>
                <span>
                  <CiCirclePlus />
                </span>
                <span>Create Post</span>
              </Link> */}
              <Image
                // src={session?.user?.image || ""}
                src="/daredevil_thmb.jpg"
                width={36}
                height={36}
                alt="profile image"
                className="signed-in-profile-thmb"
                onClick={() => setIsPopupVisible((prev) => !prev)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-end">
              <Image
                // src={session?.user?.image || ""}
                src="/daredevil_thmb.jpg"
                width={36}
                height={36}
                alt="profile image"
                className="signed-in-profile-thmb"
                onClick={() => setIsPopupVisible((prev) => !prev)}
              />
              {/* <Link
                className="flex gap-2 w-36 pt-4 items-center justify-end"
                href={"/create-post"}
              >
                <div>
                  <CiCirclePlus />
                </div>
                <div>Create Post</div>
              </Link> */}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center">
          {/* <Link className="btn text-[#0D0D0D] bg-[#DCE4F2]" href={"/login"}>
            Login
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
