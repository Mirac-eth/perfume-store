import React from 'react'
import Link from 'next/link'
import { urlForImage } from '../sanity/lib/image'

const BestSelling = ({ product }) => {
  const { image, name, slug, price } = product;

  return (
    <div>
      <Link href={`/product/${slug.current}`} className='best-product-card'>
          <img 
            src={urlForImage(image && image[0])}
            width={250}
            height={250}
            className="best-product-image"
            alt={`Image of ${name}`}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs:{price}</p>
      </Link>
    </div>
  );
}

export default BestSelling
