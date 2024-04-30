import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../sanity/lib/image'

const MidBanner = ({heroBanner}) => {
  return (
      <div className="mid-banner-container">
          <div className='mid-banner'>
              <div  className='image-wrapper'>
     <Link href="/menperfumes" passHref> <Image src={urlForImage(heroBanner.imageMid1)} alt='' width={500} height={350} style={{ borderRadius: '10px' }}/> </Link>
              </div>
              <div className='image-wrapper'>
              <Link href="/femaleperfumes" passHref> <Image src={urlForImage(heroBanner.imageMid2)} alt='' width={400} height={350} />
        </Link>
              </div>
              </div>
      </div>
  )
}

export default MidBanner
