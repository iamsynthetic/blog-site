import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
// import { handler } from "../../auth/[...nextauth]/route";
// import { handler } from '../../auth/[...nextauth]/route'
// import { authOptions } from "@/utils/authOptions";
import authOptions from "../../auth/[...nextauth]/options";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const post = await prisma?.post.findUnique({ where: { id } });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "could not fetch post" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "not authenticated" }, { status: 401 });
  }
  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();
  const id = params.id;

  try {
    const post = await prisma?.post.update({
      where: { id },
      data: {
        title,
        content,
        links,
        catName: selectedCategory,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error editing post" });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "not authenticated" }, { status: 401 });
  }
  const id = params.id;
  try {
    const post = await prisma?.post.delete({ where: { id } });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error deleting the post" });
  }
}
