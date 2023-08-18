"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Container from "@/components/ui/container";

interface CategoriesProps {
  data: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id} `,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <Container >
      <div className="py-5 px-8 flex justify-between items-center w-full gap-5 flex-wrap text-white pt-10">
        <ul className="flex gap-2 overflow-auto">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-lg transition-colors hover:text-primaryBrown px-4 py-3 rounded-lg capitalize whitespace-nowrap",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Categories;
