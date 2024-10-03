import React from 'react'
import Card from '../Components/Card'
import hoddie1 from "../assets/images/hoodie3.webp";
import hoddie2 from "../assets/images/hoodie2.webp"
import tshirt from "../assets/images/tshirt.webp"
import tupi from "../assets/images/tupi.webp"
export default function Products() {

    const products = [
        {
        id:1,
        title:"Icoo carhert bannie",
        price:40,
        niche_category:"classic",
        category:"hat",
        imageUrl:hoddie1
    },
        {
        id:2,
        title:" Carhert ico Tshit ",
        price:60,
        niche_category:"classic",
        category:"tshirt",
         imageUrl:tshirt,
    },
        {
        id:3,
        title:"Bannie hoodie ico",
        price: 50,
        niche_category:"classic",
        category:"hoodie",
        imageUrl:hoddie2,
    },
        {
        id:4,
        title:"Winter cap ico",
        price: 20,
        niche_category:"classic",
        category:"accesories",
        imageUrl:tupi,
    },

]

  return (
    <div >
        <div className='flex justify-center items-center md:justify-between py-4 px-2 mx-4 my-4 '>
            <h1>Appreal</h1>
        </div>
        <div className=' grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
            {
                products.map((product)=><Card product = {product} />)
            }
        </div>
    </div>
  )
}
