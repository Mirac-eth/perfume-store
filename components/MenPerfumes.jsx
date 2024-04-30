import React from 'react';
import Link from 'next/link';
import { urlForImage } from '../sanity/lib/image';
import styles from './menperfume.module.css'


const FemalePerfumes = ({ menfragrances }) => {
    return (
        <div className={styles.menContainer}>
                            <h1 className={styles.h1}>Men Perfumes</h1>

            <div className={styles.menPerfumes}>
      {menfragrances.map((fragrance) => (
        <div key={fragrance._id} className={styles.perfumeCard}>
          <Link href={`/product/${fragrance.slug.current}`}>
              <img src={urlForImage(fragrance.image[0])} alt={fragrance.name} className={styles.perfumeImage} />
              <div className={styles.perfumeInfo}>
                          <p className={styles.perfumeName}>{fragrance.name}</p>
                          <p className={styles.perfumePrice}>Rs: {fragrance.price}</p>
              </div>
          </Link>
        </div>
      ))}
            </div>
            </div>
  );
};

export default FemalePerfumes;
