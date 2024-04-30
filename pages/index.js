import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { client } from '../sanity/lib/client'
import HeroBanner from '../components/HeroBanner'
import BestSelling from '../components/BestSelling'
import MidBanner from '../components/MidBanner'
import Perfumes from '../components/Perfumes'

export default function Home({ bestSellingProducts, products, bannerData }) {

  return (
    <div >
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling</h2>
        <p>perfumes</p>
      </div>
      
      <div className='products-container'>
        {bestSellingProducts?.map((product) => <BestSelling key={product._id} product={product} />)}
      </div>

      <MidBanner heroBanner={bannerData.length > 0 ? bannerData[0] : null} />

      
      <div className='products-heading'>
        <h2>All Perfumes</h2>
      </div>
      
      <div className='products-container'>
        {products.map((product) => <Perfumes key={product._id} product={product} />)}
        </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bestSellingQuery = '*[_type == "product" && subcategory1 == "best selling"]';
  const bestSellingProducts = await client.fetch(bestSellingQuery);

  const menfragrancesQuery = '*[_type == "product" && subcategory == "men"]';
  const menfragrances = await client.fetch(menfragrancesQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
      props:{products, bannerData, bestSellingProducts, menfragrances}
  }
}