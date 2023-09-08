"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { useEffect, useRef, useState } from "react";

interface MainNavMobileProps {
    data: Category[];
}

interface CategoryWithChildren extends Category {
    children?: CategoryWithChildren[];
}

const buildCategoryTree = (categories: Category[]): CategoryWithChildren[] => {
    const categoryMap: Record<string, CategoryWithChildren> = {};

    // First pass: Create a map of categories using their IDs as keys
    categories.forEach((category) => {
        categoryMap[category.id] = { ...category, children: [] };
    });

    // Second pass: Populate the children arrays of each category
    categories.forEach((category) => {
        if (category.parentCategoryId) {
            const parent = categoryMap[category.parentCategoryId];
            if (parent) {
                parent.children?.push(categoryMap[category.id]);
            }
        }
    });

    // Filter out categories that have a parent (only keep top-level categories)
    const topLevelCategories = categories.filter((category) => !category.parentCategoryId);

    return topLevelCategories.map((category) => categoryMap[category.id]);
};

const MainNavMobile: React.FC<MainNavMobileProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContentRef = useRef<HTMLDivElement | null>(null);


  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
      setIsMenuOpen(false);
  };

  const handleMenuClick = (e: MouseEvent) => {
    if (menuContentRef.current && !menuContentRef.current.contains(e.target as Node)) {
        closeMenu();
    }
};

  useEffect(() => {
      if (isMenuOpen) {
          // Menü açıldığında, sayfaya bir click event listener ekleniyor
          document.addEventListener('click', handleMenuClick);
      } else {
          // Menü kapandığında, event listener'ı kaldırıyoruz
          document.removeEventListener('click', handleMenuClick);
      }

      // Temizleme işlemi
      return () => {
          document.removeEventListener('click', handleMenuClick);
      };
  }, [isMenuOpen]);
  
    const categoryTree = buildCategoryTree(data);
  
    const renderMenu = (category: CategoryWithChildren) => {
      if (category.children && category.children.length > 0) {
        return (
          <MenubarSub key={category.id}>
            <MenubarSubTrigger className="cursor-pointer"><Link href={`/category/${category.id}`}>{category.name}</Link></MenubarSubTrigger>
            <MenubarSubContent>
              {category.children.map((child) => renderMenu(child))}
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem key={category.id}>
            <Link href={`/category/${category.id}`}>
              {category.name}
            </Link>
          </MenubarItem>
        );
      }
    };

    return (
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 relative z-10">
          {isMenuOpen && (
              <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 flex">
                  <div ref={menuContentRef} className="w-2/3 bg-white p-8 shadow-lg">
                      <button
                          className="text-gray-800 focus:outline-none absolute top-2 right-2"
                          onClick={closeMenu}
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                              />
                          </svg>
                      </button>
                      <Menubar>
                          {categoryTree.map((category) => (
                              <MenubarMenu key={category.id}>
                                  <MenubarTrigger><Link href={`/category/${category.id}`}>{category.name}</Link></MenubarTrigger>
                                  <MenubarContent>
                                      {category.children &&
                                          category.children.map((child) => renderMenu(child))}
                                  </MenubarContent>
                              </MenubarMenu>
                          ))}
                      </Menubar>
                  </div>
              </div>
          )}
          <div className="lg:hidden">
              <button
                  className="text-gray-800 focus:outline-none"
                  onClick={toggleMenu}
              >
                  <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                  >
                      {isMenuOpen ? (
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                          />
                      ) : (
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16m-7 6h7"
                          />
                      )}
                  </svg>
              </button>
          </div>
      </nav>
  );
};

export default MainNavMobile;