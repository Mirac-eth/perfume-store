import React from 'react';
import Link from 'next/link';
import { urlForImage } from '../sanity/lib/image';
import styles from './femaleperfume.module.css'


const FemalePerfumes = ({ femalefragrances }) => {
    return (
        <div className={styles.femaleContainer}>
                            <h1 className={styles.h1}>Female Perfumes</h1>

            <div className={styles.femalePerfumes}>
      {femalefragrances.map((fragrance) => (
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
