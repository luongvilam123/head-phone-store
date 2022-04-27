import React from 'react';
import {Product, FooterBanner, HeroBanner} from "../components";
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {/* {console.log(bannerData)} */}
    <div className='products-heading'>
      <h2>
        Best Selling Product</h2>
      <p>Pro gamers should have one</p>
    </div>


    <div className='products-container'>
      {products.map((product)=>product.name)}
    </div>

    <FooterBanner/>
    </div>
  )
  }
  export const getServerSideProps = async ()=>{
    const query = '*[_type == "product"]';  //get all the product form sanity dashboard
    const products = await client.fetch(query); 
    
    const bannerquery = '*[_type == "banner"]';  //get all the banner form sanity dashboard
    const bannerData = await client.fetch(bannerquery);

    return {
      props: {
        products, bannerData
      }
    }

  }

export default Home