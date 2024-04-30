// pages/menperfumes.jsx
import React from 'react';
import FemalePerfumes from '../components/FemalePerfumes';
import { client } from '../sanity/lib/client';

const FemalePerfumesPage = ({ femalefragrances }) => {
  return <FemalePerfumes femalefragrances={femalefragrances} />;
};

export default FemalePerfumesPage;


export const getServerSideProps = async () => {

  const femalefragrancesQuery = '*[_type == "product" && subcategory == "woman"]';
  const femalefragrances = await client.fetch(femalefragrancesQuery);

  return {
      props:{femalefragrances}
  }
}