import { CollectionConfig } from 'payload'

const Landingpage: CollectionConfig = {
  slug: 'banners',
  admin: {
    useAsTitle: 'id',
    group: 'MEDIA',
  },
  access: {
    read: () => true,

    update: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },

    create: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },

    delete: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },

  fields: [
    {
      name: 'sub_title',
      type: 'text',
      required: true,
      label: 'Sub Title',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'info',
      type: 'textarea',
      required: true,
      label: 'Info / Description',
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Banner Image',
    },
  ],
}

export default Landingpage
