export type Product = {
  id: string;
  name: string;
  color: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "p1", name: "White Tee", color: "White", price: 850, image: "/products/p1.png" },
  { id: "p2", name: "Black Tee", color: "Black", price: 850, image: "/products/p2.png" },
  { id: "p3", name: "Navy Tee", color: "Navy", price: 850, image: "/products/p3.png" },
  { id: "p4", name: "Brown Tee", color: "Brown", price: 850, image: "/products/p4.png" },
  { id: "p5", name: "Pink Tee", color: "Pink", price: 850, image: "/products/p5.png" },
  { id: "p6", name: "Beige Tee", color: "Beige", price: 850, image: "/products/p6.png" },
];
