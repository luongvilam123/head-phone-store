export default {
 name: 'product', // This is the display name for the type
 title: 'Product', // The identifier for this document type used in the api's
 type: 'document', // Documents have the type 'document'
 fields: [
     {
         name: 'image',
         title: 'Image',
         type : 'array',
         of: [{type: 'image'}],
         options: {
             hotspot: true
         }
     },

     {
        name: 'name',
        title: 'Name',
        type : 'string' // tyoe of this field
     },
     {
        name: 'slug',
        title: 'Slug',
        type : 'slug',
        options:{
            source: 'name',
            maxLength: 90
        }
     },
     {
         name: 'price',
         title: 'Price',
         type : 'number'
     },
     {
         name: 'details',
         title: 'Details',
         type : 'string'
     }
 ]

}