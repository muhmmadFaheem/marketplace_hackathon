import Shoe1 from "@/public/bestselling/shoe1.png"
import Shoe2 from "@/public/features/shoe2.png"
import Shoe3 from "@/public/features/shoe3.png"
import shirt1 from "@/public/shirt1.png";
import nick1 from "@/public/nick1.png";
import lady from "@/public/ladyshirt.png";
import nick2 from "@/public/nick2.png";
import f1 from "@/public/features/shoe1.png";
import f2 from "@/public/features/shoe2.png";
import f3 from "@/public/features/shoe3.png";
import f4 from "@/public/features/shoe4.png";
import f5 from "@/public/features/shoe5.png";
import f6 from "@/public/features/shoe6.png";
import f7 from "@/public/features/shoe7.png";
import f8 from "@/public/features/shoe8.png";
import f9 from "@/public/features/shoe9.png";
import f10 from "@/public/features/shoe10.png";
import { StaticImageData } from "next/image"
interface Items {
  id:number
  img: StaticImageData
  title:string
  title2:string
  price:string
}


export const airMax:Items[] = [
  {
      id:1,
      img:Shoe1,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:Shoe2,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:Shoe3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:Shoe3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]

export const gear1:Items[] = [
  {
      id:1,
      img:shirt1,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:nick1,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:shirt1,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:nick1,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]

export const gear2:Items[] = [
  {
      id:1,
      img:lady,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:nick2,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:lady,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:nick2,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
]

export const feature:Items[] = [
  {
      id:1,
      img:f1,
      title:"Nike Air Force 1 Mid '07",
      title2:"Men's Shoes",
      price:"₹ 10 995"
  },
  {
      id:2,
      img:f2,
      title:"Nike Court Vision Low Next Nature",
      title2:"Men's Shoes",
      price:"₹ 4 995"
  },
  {
      id:3,
      img:f3,
      title:"Nike Air Force 1 PLT.AF.ORM",
      title2:"Women's Shoes",
      price:"₹ 8 995"
  },
  {
      id:4,
      img:f4,
      title:"Nike Air Force 1 React",
      title2:"Men's Shoes",
      price:"₹ 13 295"
  },
  {
      id:5,
      img:f5,
      title:"Air Jordan 1 Elevate Low",
      title2:"Women's Shoes",
      price:"₹ 11 895"
  },
  {
      id:6,
      img:f6,
      title:"Nike Court Vision Low",
      title2:"Men's Shoes",
      price:"₹ 5 695"
  },
  {
      id:7,
      img:f7,
      title:"Nike Dunk Low Retro SE",
      title2:"Men's Shoes",
      price:"₹ 9 695"
  },
  {
      id:8,
      img:f8,
      title:"Nike Air Max SC",
      title2:"Men's Shoes",
      price:"₹ 12 695"
  },
  {
      id:9,
      img:f9,
      title:"Nike Dunk Low Retro",
      title2:"Men's Shoes",
      price:"₹ 7 695"
  },
  {
      id:10,
      img:f10,
      title:"Nike Air Max SC",
      title2:"Women's Shoes",
      price:"₹ 16 695"
  },
  {
      id:11,
      img:f9,
      title:"Nike Air Force 1 PLT.AF.ORM",
      title2:"Women's Shoes",
      price:"₹ 8 995"
  },
  {
      id:12,
      img:f5,
      title:"Nike Air Force 1 React",
      title2:"Men's Shoes",
      price:"₹ 13 295"
  },
  {
      id:13,
      img:f4,
      title:"Air Jordan 1 Elevate Low",
      title2:"Women's Shoes",
      price:"₹ 11 895"
  },
  
 
]