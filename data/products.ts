export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  gallery: string[];
  sizes: string[];
  colors: string[];
  description: string;
  availability: "In Stock" | "Low Stock" | "Out of Stock";
};

export const categories = [
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Trousers",
  "Shoes",
  "Watches",
  "Accessories"
];

// High quality realistic images from Unsplash
export const products: Product[] = [
  {
    id: "1",
    slug: "classic-oxford-shirt",
    name: "Classic Oxford Button-Down",
    category: "Shirts",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue"],
    description: "A timeless wardrobe essential. Crafted from premium breathable cotton, this Oxford shirt offers a tailored fit perfect for both formal and casual settings.",
    availability: "In Stock"
  },
  {
    id: "2",
    slug: "premium-linen-shirt-navy",
    name: "Premium Linen Shirt",
    category: "Shirts",
    price: 1499,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Olive"],
    description: "Lightweight, breathable, and effortlessly stylish. Our premium linen shirt keeps you cool during warm days while maintaining a sharp look.",
    availability: "In Stock"
  },
  {
    id: "3",
    slug: "essential-crewneck-tshirt",
    name: "Essential Crewneck T-Shirt",
    category: "T-Shirts",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    description: "Your everyday go-to t-shirt. Made from ultra-soft Supima cotton for a luxurious feel and a perfect drape.",
    availability: "In Stock"
  },
  {
    id: "4",
    slug: "slim-fit-denim-jeans",
    name: "Slim Fit Raw Denim",
    category: "Jeans",
    price: 1899,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Indigo", "Black"],
    description: "High-quality raw denim that molds to your body over time. Features a modern slim fit with a slight stretch for all-day comfort.",
    availability: "In Stock"
  },
  // {
  //   id: "5",
  //   slug: "tailored-chinos-khaki",
  //   name: "Tailored Chino Trousers",
  //   category: "Trousers",
  //   price: 1399,
  //   image: "https://images.unsplash.com/photo-1624378439575-d1ead6bb144b?q=80&w=800&auto=format&fit=crop",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1624378439575-d1ead6bb144b?q=80&w=1200&auto=format&fit=crop"
  //   ],
  //   sizes: ["32", "34", "36"],
  //   colors: ["Khaki", "Navy"],
  //   description: "Versatile and sharp. These tailored chinos bridge the gap between casual and formal, making them perfect for the modern professional.",
  //   availability: "Low Stock"
  // },
  {
    id: "6",
    slug: "leather-sneakers-white",
    name: "Minimalist Leather Sneakers",
    category: "Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White"],
    description: "Clean, classic, and comfortable. Crafted from premium leather with a durable rubber sole for everyday wear.",
    availability: "In Stock"
  },
  {
    id: "7",
    slug: "chelsea-boots-suede",
    name: "Suede Chelsea Boots",
    category: "Shoes",
    price: 3299,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["8", "9", "10"],
    colors: ["Tan", "Brown"],
    description: "Elevate your style with these premium suede Chelsea boots. Featuring elastic side panels and a comfortable block heel.",
    availability: "In Stock"
  },
  {
    id: "8",
    slug: "chronograph-watch-silver",
    name: "Classic Chronograph Watch",
    category: "Watches",
    price: 4999,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    sizes: ["One Size"],
    colors: ["Silver/Black"],
    description: "A statement piece for any wrist. Precision engineered with a stainless steel case and a sophisticated black dial.",
    availability: "In Stock"
  },
  {
    id: "9",
    slug: "premium-leather-belt",
    name: "Full Grain Leather Belt",
    category: "Accessories",
    price: 899,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["32", "34", "36", "38"],
    colors: ["Brown", "Black"],
    description: "Durable and stylish. Made from 100% full-grain leather with a classic brass buckle.",
    availability: "In Stock"
  },
  {
    id: "10",
    slug: "slim-bifold-wallet",
    name: "Slim Bifold Wallet",
    category: "Accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: ["Tan"],
    description: "Keep your essentials organized without the bulk. Crafted from genuine leather with multiple card slots.",
    availability: "In Stock"
  },
  {
    id: "11",
    slug: "textured-knit-polo",
    name: "Textured Knit Polo",
    category: "T-Shirts",
    price: 899,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Burgundy", "Navy"],
    description: "A smart-casual staple. The textured knit adds depth and sophistication to the classic polo silhouette.",
    availability: "In Stock"
  },
  {
    id: "12",
    slug: "aviator-sunglasses",
    name: "Classic Aviator Sunglasses",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: ["Gold/Green"],
    description: "Protect your eyes with style. Features UV400 protection and a lightweight metal frame.",
    availability: "In Stock"
  }
];
