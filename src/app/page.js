import Image from "next/image";
import {ProductData} from './data/productdata'

export default function Home() {
  return (
   <div>
   {ProductData.map((product,index)=>(
    <div key={index}>
    <Image src={product.img} alt={product.name} width={200} height={200} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>

    </div>
   ))}
   </div>
  );
}
