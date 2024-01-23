"use client";

import { TCategory, TPost } from "@/app/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { GoLink } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import toast from "react-hot-toast";

function EditPostForm({ post }: { post: TPost }) {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const [title, setTitle] = useState("mytitle");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const res = await fetch("/api/categories");
      const catNames = await res.json();
      setCategories(catNames);
    };
    fetchAllCategories();

    const initValues = () => {
      setTitle(post.title);
      setContent(post.content);
      setImageUrl(post.imageUrl || "");
      setPublicId(post.publicId || "");
      setSelectedCategory(post.catName || "");
      setLinks(post.links || []);
    };

    initValues();
  }, [
    post.title,
    post.content,
    post.imageUrl,
    post.publicId,
    post.catName,
    post.links,
  ]);

  // const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const addLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (linkInput.trim() !== "") {
      setLinks((prev) => [...prev, linkInput]);
      setLinkInput("");
    }
  };

  const deleteLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageUpload = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;
      setImageUrl(url);
      setPublicId(public_id);
      console.log("url: " + url);
      console.log("public_id: " + public_id);
    }
  };

  const removeImage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/removeImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("title and content are required");
      return;
    }

    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          links,
          selectedCategory,
          imageUrl,
          publicId,
        }),
      });

      if (res.ok) {
        toast.success("post edited successfully");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-2/3 md900:max-w-[800px]">
        <h2>create post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            value={title}
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="mt-2"
            placeholder="content"
            value={content}
          ></textarea>

          {links &&
            links.map((link, i) => (
              <div key={i} className="flex text-center gap-2 mt-2">
                <GoLink className="mt-1" />
                <Link className="hyperlink" href={link}>
                  {link}
                </Link>
                <RiDeleteBin6Line
                  className="deletelink mt-1"
                  onClick={() => deleteLink(i)}
                />
              </div>
            ))}

          <div className="flex gap-2 mt-2">
            <input
              className="flex-1 h-10 justify-center"
              type="text"
              placeholder="paste the link and click on add"
              onChange={(e) => setLinkInput(e.target.value)}
              value={linkInput}
            />
            <div className="addbtn flex text-center" onClick={addLink}>
              <span className="mt-1">
                <GoPlus />
              </span>
              <div className="flex text-center gap-2 items-center">Add</div>
            </div>
          </div>
          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            className={`h-48 border-2 mt-4 border-dotted grid place-items-center bg-slate-100 rounded-md relative ${
              imageUrl && "pointer-events-none"
            }`}
            onUpload={handleImageUpload}
          >
            <div>
              <CiImageOn />
            </div>

            {imageUrl && (
              <Image
                src={imageUrl}
                fill
                className="absolute object-cover inset-0"
                alt={title}
              />
            )}
          </CldUploadButton>
          {publicId && (
            <button onClick={removeImage} className="deletebtn w-fit mb-4">
              Remove Image
            </button>
          )}
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="selectbtn flex mt-2 appearance-none"
            value={selectedCategory}
          >
            <option value="">select a category</option>
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.catName}>
                  {category.catName}
                </option>
              ))}
          </select>
          <button type="submit" className="primarybtn mt-2">
            update post
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPostForm;
