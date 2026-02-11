import BuffaloMilk from "@/assets/buffalomilk.jpg";
import CowGhee from "@/assets/cowghee.jpg";
import CowMilk from "@/assets/cowmilk.jpg";
import PaneerImage from "@/assets/paneer.jpg";
import BuffaloGhee from "@/assets/buffaloghee.jpg"
import CowDungCakes from "@/assets/cowdungcakes.jpg"
import Junnu from "@/assets/junnu.jpg";
import Eggs from "@/assets/Eggs.jpg"

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
    id: "buffalomilk",
    name: "Buffalo Milk",
    price: 50,
    unit: "per 500 ML",
    description: "Farm-fresh buffalo milk delivered daily, rich in nutrients and taste.",
    image: BuffaloMilk,
    category: "dairy",
    featured: true,
  },
  {
    id: "ghee",
    name: "Buffalo Ghee",
    price: 900,
    unit: "per 500 ML",
    description: "Traditional slow-cooked buffalo ghee made from pure butter.",
    image: BuffaloGhee,
    category: "dairy",
  },
  {
    id: "cow milk",
    name: "Cow Milk",
    price: 50,
    unit: "per 500 ML",
    description: "Farm-fresh cow milk delivered daily, rich in nutrients and taste.",
    image: CowMilk,
    category: "dairy",
  },
  {
    id: "paneer",
    name: "Soft Paneer",
    price: 200,
    unit: "per 200 GMS",
    description: "Fresh cottage paneer, soft and perfect for cooking.",
    image: PaneerImage,
    category: "dairy",
  },
  {
    id: "cow ghee",
    name: "Cow Ghee",
    price: 750,
    unit: "per 500 ML",
    description: "Traditional slow-cooked buffalo ghee made from pure butter.",
    image: CowGhee,
    category: "dairy",
  },
  {
    id: "cowdungcakes",
    name: "Cow Dung Cakes",
    price: 200,
    unit: "10 per pack",
    description: "Desi Cow Dung Cakes for Puja, Havan, and Agnihotra, 100% Sun-Dried.",
    image: CowDungCakes,
    category: "dairy",
  },
  {
    id: "junnu",
    name: "Junnu",
    price: 500,
    unit: "per 500 ML",
    description: "Aged cheese with rich, complex flavors.",
    image: Junnu,
    category: "dairy",
  },
  {
    id: "Eggs",
    name: "Eggs",
    price: 500,
    unit: "5 per pack",
    description: "Farm-fresh eggs with creamy, velvet textures.",
    image: Eggs,
    category: "dairy",
  }
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
