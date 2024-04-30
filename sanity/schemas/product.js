export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        { 
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        { 
            name: 'subcategory',
            title: 'SubCategory',
            type: 'string',
        },
        { 
            name: 'subcategory1',
            title: 'SubCategory1',
            type: 'string',
          },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
        },
        { 
            name: 'status',
            title: 'Status',
            type: 'string',
          },
    ]
  }