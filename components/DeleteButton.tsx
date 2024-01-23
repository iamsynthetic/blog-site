"use client";

import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter()
  const deleteImage = async (publicId: string) => {
    const res = await fetch("/api/removeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (res.ok) {
          console.log("post deleted");
          const post = await res.json();
          const { publicId } = post;
          await deleteImage(publicId);

          toast.success('post deleted successfully')
          router.refresh()
        }
      } catch (error) {
        toast.error("something went wrong")
        console.log(error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="deletebtn">
      DELETE
    </button>
  );
}
