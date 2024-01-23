"use client";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { useWindowSize } from "@uidotdev/usehooks";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Footer() {
  const size = useWindowSize();

  return (
    <>
      <div className="mt-[200px] md900:mt-[0px]">
        <div className="grid grid-flow-row md900:grid-flow-col grid-cols-1 md900:grid-cols-12 h-[400px] md900:h-[500px] gap-4 ">
          <div className="grid grid-flow-row sm:col-span-1 md900:col-span-8 h-[300px] md900:mt-[200px] ">
            <div className="col-span-2 text-dark text-5xl md900:text-6xl anton400 ">
              <Link href={"/"}>I AM SYNTHETIC</Link>
            </div>
            <div className="col-span-2 md900:col-span-1 text-sm mt-5 md900:mt-10 mr-5 md900:h-[210px] robotomono200 ">
              I am front-end developer. I work at a large advertising agency in
              the great white north. I have been creating and building things
              for the web for longer than I want to admit.
            </div>
            <div className="col-span-2 md900:col-span-1 text-sm mt-5 md900:mt-10 md900:h-[210px] robotomono200 ">
              If you&#39;re still reading, can I assume you like or are
              interested in what&#39;s on this site. if so, consider me for your
              next project.
              <br />
              <Link
                href={"mailto:synthetic_samurai@hotmail.com"}
                className="hyperlink"
              >
                Email Me.
              </Link>
            </div>
            <div className="col-span-2 flex items-end mt-[50px] md900:pb-10 robotomono400 ">
              <Link className="footer-link mr-5 md900:mr-10" href={"/"}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <IoHomeOutline className="footer-text-fontsize" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="thetooltip">Go Home</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link
                className="footer-link mr-5 md900:mr-10"
                href={"mailto:synthetic_samurai@hotmail.com"}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineMailOutline className="footer-text-fontsize" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="thetooltip">Email Me</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link
                className="footer-link mr-5 md900:mr-10"
                href={"www.twitter.com"}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FaXTwitter className="footer-text-fontsize" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="thetooltip">Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link
                className="footer-link mr-5 md900:mr-10"
                href={"www.youtube.com"}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <RiYoutubeLine className="footer-text-fontsize" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="thetooltip">Youtube</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link
                className="footer-link mr-5 md900:mr-10"
                href={"www.instagram.com"}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <IoLogoInstagram className="footer-text-fontsize" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="thetooltip">Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
            {size.width < 900 ? (
              <div className="col-span-2 md900:col-span-1 flex mt-5 mb-10 md900:mt-0 md900:mb-10 items-end ">
                created by iamsynthetic 2024 .
              </div>
            ) : (
              <div className="emptydiv"></div>
            )}
          </div>
          {size.width >= 900 ? (
            <div className="grid grid-flow-row sm:col-span-1 md900:col-span-4 md900:h-[385px] md900:mt-[200px] ">
              <div className="col-span-2 flex items-end justify-end md900:mt-[100px] robotomono400 ">
                <div className="text-sm robotomono400 ">
                  created by iamsynthetic 2024 .
                </div>
              </div>
            </div>
          ) : (
            <div className="emptydiv"></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Footer;
