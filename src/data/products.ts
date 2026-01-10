import MilkImage from "@/assets/milk.jpg";
import GheeImage from "@/assets/ghee.jpg";
import ButterImage from "@/assets/butter.jpg";
import PaneerImage from "@/assets/paneer.jpg";
import CurdImage from "@/assets/curd.jpg";
import ButterMilkImage from "@/assets/buttermilk.jpg";
import CheeseImage from "@/assets/cheese.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

// Central product data - easily updatable pricing
export const products: Product[] = [
  {
    id: "milk",
    name: "Fresh & Pure Milk",
    price: 100,
    unit: "per liter",
    description: "Farm-fresh milk delivered daily, rich in nutrients and taste.",
    image: MilkImage,
    category: "dairy",
    featured: true,
  },
  {
    id: "ghee",
    name: "Pure Desi Ghee",
    price: 1800,
    unit: "per kg",
    description: "Traditional slow-cooked ghee made from pure butter.",
    image: GheeImage,
    category: "dairy",
  },
  {
    id: "butter",
    name: "Fresh Butter",
    price: 60,
    unit: "per 100g",
    description: "Creamy homemade butter, perfect for everyday use.",
    image: ButterImage,
    category: "dairy",
  },
  {
    id: "paneer",
    name: "Soft Paneer",
    price: 450,
    unit: "per kg",
    description: "Fresh cottage cheese, soft and perfect for cooking.",
    image: PaneerImage,
    category: "dairy",
  },
  {
    id: "curd",
    name: "Fresh Curd",
    price: 80,
    unit: "per kg",
    description: "Thick, creamy curd set in traditional clay pots.",
    image: CurdImage,
    category: "dairy",
  },
  {
    id: "buttermilk",
    name: "Refreshing Buttermilk",
    price: 30,
    unit: "per glass",
    description: "Cool and refreshing buttermilk with traditional spices.",
    image: ButterMilkImage,
    category: "beverages",
  },
  {
    id: "cheese",
    name: "Farm Cheese",
    price: 600,
    unit: "per kg",
    description: "Aged cheese with rich, complex flavors.",
    image: CheeseImage,
    category: "dairy",
  },
];

export const getFeaturedProduct = () => products.find((p) => p.featured) || products[0];

export const getProductById = (id: string) => products.find((p) => p.id === id);

// Currency configuration
export const currency = {
  symbol: "₹",
  code: "INR",
};

export const formatPrice = (price: number): string => {
  return `${currency.symbol}${price.toLocaleString("en-IN")}`;
};
