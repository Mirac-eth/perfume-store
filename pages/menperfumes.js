// pages/menperfumes.jsx
import React from 'react';
import MenPerfumes from '../components/MenPerfumes';
import { client } from '../sanity/lib/client';

const MenPerfumesPage = ({ menfragrances }) => {
  return <MenPerfumes menfragrances={menfragrances} />;
};

export default MenPerfumesPage;


export const getServerSideProps = async () => {

  const menfragrancesQuery = '*[_type == "product" && subcategory == "men"]';
  const menfragrances = await client.fetch(menfragrancesQuery);

  return {
      props:{menfragrances}
  }
}