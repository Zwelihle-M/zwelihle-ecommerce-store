"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ShoppingButton from "./shopping-bag-button";
import useCart from "@/hooks/use-cart";

const ShoppingBag = () => {

      // hydration fix
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <ShoppingButton className="fixed bottom-10 right-10 z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-primaryBrown to-primaryBrownDarker"onClick={() => router.push('/cart')}>
      <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-scarletRed to-scarletRedDarker text-md text-white">
      {cart.items.length}
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </span>
    </ShoppingButton>
  );
};

export default ShoppingBag;
