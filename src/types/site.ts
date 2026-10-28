export type MenuCategory = "all" | "starter" | "main" | "dessert";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface MenuFilter {
  label: string;
  value: MenuCategory;
}

export interface Dish {
  id: string;
  category: Exclude<MenuCategory, "all">;
  categoryLabel: string;
  order: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface ReservationForm {
  date: string;
  time: string;
  guests: string;
  phone: string;
  note: string;
}

export interface VisitDetail {
  label: string;
  lines: string[];
  contacts?: Array<{
    label: string;
    href: string;
  }>;
  link?: {
    label: string;
    href: string;
  };
}
