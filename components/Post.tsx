import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface PostProps {
  id: string;
  author: string;
  blurb?: String;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}

async function Post({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  blurb,
  content,
  links,
  category,
}: PostProps) {
  const session = await getServerSession(authOptions);
  const isEdiable = session && session?.user?.email === authorEmail;

  return (
    <div>
      <div className="aspect-w-2 aspect-h-3">
        {thumbnail ? (
          <Link href={`/posts/${id}`}>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </Link>
        ) : (
          <Link href={`/posts/${id}`}>
            <Image
              src={"/thumbnail-placeholder.png"}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </Link>
        )}
      </div>
      <div className="pt-2">
        <span className="text-xl uppercase">{title}</span>
      </div>

      {/* <div className="pb-2">
        <span className="text-sm">{content}</span>
      </div> */}
      {/* <div className="pb-6">
        <span className="text-xs italic">
          {author ? (
            <>
              Posted by: {author} {date}
            </>
          ) : (
            <>
              Posted by: <span className="font-bold">unknown {date}</span>
            </>
          )}
        </span>
      </div> */}
      <div className="pb-6">
        <span className="text-sm">
          {blurb ? (
            <>here is a blurb: {blurb}</>
          ) : (
            <>there is no blurb right now</>
          )}
        </span>
      </div>

      <div className="pb-6 text-center">
        <Link href={`/posts/${id}`}>
          <div className="flex text-center font-bold">
            <span className="text-xs">READ MORE&nbsp;</span>
            <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>

      <div className="text-sm">
        {category && (
          <Link href={`categories/${category}`} className="tags">
            {category}
          </Link>
        )}
      </div>

      {isEdiable && (
        <div className="flex gap-4 px-4 justify-between">
          <Link href={`/edit-post/${id}`} className="editbtn">
            EDIT
          </Link>
          <DeleteButton id={id} />
        </div>
      )}
    </div>
  );
}

export default Post;
