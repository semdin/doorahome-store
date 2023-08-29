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

interface MainNavProps {
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

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname();
  
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
    <nav 
        className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
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
      </nav>
    );
  };
  
  export default MainNav;