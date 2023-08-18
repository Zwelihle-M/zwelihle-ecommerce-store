"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ZwelihleLogo from "@/public/logo/Zwelihle-Logo.png";
import ThemeSwitcher from "@/components/theme-switcher";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navigationbar = () => {
  const router = useRouter();
  return (
    <nav className="border-b border-primaryBrown">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src={ZwelihleLogo}
              alt="Zwelihle ecommerce store logo"
              width={50}
              height={50}
              quality={100}
            />
          </Link>

          <div className="ml-auto flex items-center gap-x-4">
            <span className="cursor-pointer duration-500 ease-out hover:scale-110 ">
              <ThemeSwitcher />
            </span>

            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-primaryBrown px-3 py-3" >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigationbar;
