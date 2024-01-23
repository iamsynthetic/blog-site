import { TPost } from "@/app/types";
import React from "react";
import CategoriesList from "@/components/CategoriesList";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

async function Post({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await getPost(id);

  const title1 = DOMPurify.sanitize(post.title);
  const title2 = DOMPurify.sanitize(post.title2);
  const title3 = DOMPurify.sanitize(post.title3);
  const quote1 = DOMPurify.sanitize(post.quote);
  const quote2 = DOMPurify.sanitize(post.quote2);
  const quote3 = DOMPurify.sanitize(post.quote3);
  const quote4 = DOMPurify.sanitize(post.quote4);
  const story1 = DOMPurify.sanitize(post.story);
  const story2 = DOMPurify.sanitize(post.story2);
  const story3 = DOMPurify.sanitize(post.story3);
  const story4 = DOMPurify.sanitize(post.story4);

  return (
    <>
      {/* desktop */}
      <div className="hidden md900:block">
        <div className="grid grid-cols-12 grid-auto-rows">
          <div className="col-span-12">
            <div className="grid grid-cols-12">
              <div className="col-span-6 lg:col-span-5 robotomono200">
                <Image
                  className="hero-img"
                  alt={post.title}
                  src={post.imageUrl}
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-span-6 lg:col-span-7 p-5 flex items-center robotomono200">
                <div className="post-title anton400">
                  <div dangerouslySetInnerHTML={{ __html: title1 }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-52">
            <div className="grid grid-cols-12">
              <div className="col-span-6"></div>
              <div className="col-span-6 text-4xl robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote1 }} />
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-20">
            <div className="grid grid-cols-12">
              <div className="col-span-6 lg:col-span-5 robotomono200 flex items-center">
                <div dangerouslySetInnerHTML={{ __html: quote2 }} />
              </div>
              <div className="col-span-6 lg:col-span-7 robotomono200 ">
                <div dangerouslySetInnerHTML={{ __html: story1 }} />
                <Image
                  alt={post.title}
                  src={post.imageUrl2}
                  width={600}
                  height={400}
                />
                <br />

                <div dangerouslySetInnerHTML={{ __html: story2 }} />
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-20">
            <div className="grid grid-cols-12">
              <div className="col-span-6 flex justify-end pr-32 robotomono200">
                <Image
                  className="tall-rect-img"
                  alt={post.title}
                  src={post.imageUrl3}
                  width={600}
                  height={400}
                />
              </div>
              <div className="col-span-6 flex items-center justify-start pl-10 robotomono200 ">
                <Image
                  className="wide-rect-img"
                  alt={post.title}
                  src={post.imageUrl4}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-20">
            <div className="grid grid-cols-12">
              <div className="col-span-7 robotomono200">
                <p className="text-3xl">
                  <div dangerouslySetInnerHTML={{ __html: title2 }} />
                </p>

                <div dangerouslySetInnerHTML={{ __html: story3 }} />
              </div>
              <div className="col-span-5 flex items-center pl-48 robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote3 }} />
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-20">
            <div className="grid grid-cols-12">
              <div className="col-span-8 robotomono200">
                <Image
                  className="almost-hero-img"
                  alt={post.title}
                  src={post.imageUrl5}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 pt-20">
            <div className="grid grid-cols-12">
              <div className="col-span-7 robotomono200">
                <p className="text-3xl">
                  <div dangerouslySetInnerHTML={{ __html: title3 }} />
                </p>

                <div dangerouslySetInnerHTML={{ __html: story4 }} />
              </div>
              <div className="col-span-5 flex items-center pl-48 robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block md900:hidden">
        <div className="grid grid-cols-1 grid-auto-rows">
          <div className="col-span-1">
            <div className="grid grid-cols-1">
              <div className="col-span-1 lg:col-span-7 robotomono200">
                <div dangerouslySetInnerHTML={{ __html: title1 }} />
              </div>
              <div className="col-span-1 pt-10 lg:col-span-5 robotomono200 ">
                <div className="post-image">
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 text-3xl robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote1 }} />
              </div>
            </div>
          </div>
          <div className="col-span-1 gap-5 pt-10">
            <div className="grid grid-cols-1">
              <div className="col-span-1 lg:col-span-5 robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote2 }} />
              </div>
              <div className="col-span-1 lg:col-span-5 robotomono200 ">
                <div dangerouslySetInnerHTML={{ __html: story1 }} />
                <Image
                  className="almost-hero-img"
                  alt={post.title}
                  src={post.imageUrl2}
                  width={600}
                  height={400}
                />

                <div dangerouslySetInnerHTML={{ __html: story2 }} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 pt-10">
            <div className="col-span-1 robotomono200 ">
              <Image
                className="mobile-rect-img"
                alt={post.title}
                src={post.imageUrl3}
                width={600}
                height={400}
              />
            </div>
            <div className="col-span-1 pt-10 flex items-center justify-end robotomono200">
              <Image
                className="mobile-rect-img"
                alt={post.title}
                src={post.imageUrl4}
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="col-span-1 gap-5 pt-10">
            <div className="grid grid-cols-1">
              <div className="col-span-1 robotomono200 ">
                <p className="text-3xl">
                  <div dangerouslySetInnerHTML={{ __html: title2 }} />
                </p>

                <div dangerouslySetInnerHTML={{ __html: story3 }} />
                <br />
              </div>
              <div className="col-span-1 pt-10 flex items-center robotomono200">
                <div dangerouslySetInnerHTML={{ __html: quote3 }} />
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-10">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1 robotomono200 ">
                <Image
                  className="almost-hero-img"
                  alt={post.title}
                  src={post.imageUrl5}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-10">
            <div className="grid grid-cols-1">
              <div className="col-span-1 robotomono200 ">
                <div dangerouslySetInnerHTML={{ __html: quote4 }} />
              </div>
              <div className="col-span-1 pt-10 robotomono200 ">
                <p className="text-3xl">
                  <div dangerouslySetInnerHTML={{ __html: title3 }} />
                </p>

                <div dangerouslySetInnerHTML={{ __html: story4 }} />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
