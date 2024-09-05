import { AiFillStar } from "react-icons/ai";
import { ShoppingCart } from "lucide-react";
const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
    name: "men",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    name: "men",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    name: "men",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
    name: "men",
  },

  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "flats",
    name: "women",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    name: "women",
  },

  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
    name: "women",
  },

  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    name: "men",
  },

  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
    name: "men",
  },

  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
    name: "men",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    name: "men",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
    name: "men",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    name: "men",
  },

  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
    name: "men",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
    name: "women",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
    name: "women",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "sandals",
    name: "women",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "sandals",
    name: "women",
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "heels",
    name: "women",
  },
  {
    id: 21,
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "100",
    company: "puma",
    color: "black",
    category: "heels",
    name: "women",
  },
  {
    id: 22,
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "heels",
    name: "women",
  },
  {
    id: 23,
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    name: "men",
  },

  {
    id: 24,
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "heels",
    name: "women",
  },
  {
    id: 25,
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    name: "women",
  },
  {
    id: 26,
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
    name: "women",
  },
  {
    id: 27,
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    name: "women",
  },
  {
    id: 28,
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",

    reviews: "(123 reviews)",

    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    name: "women",
  },
];

export default data;
