import createImageUrlBuilder from '@sanity/image-url'


const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  console.log('Image source:', source);
  if (!source) {
      console.error('Source is undefined');
      return ''; // Return an empty string or a default image URL if source is undefined
  }
  return imageBuilder.image(source).auto('format').fit('max').url();
}


