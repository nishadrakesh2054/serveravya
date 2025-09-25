import { CollectionConfig } from 'payload'

const Newsletter: CollectionConfig = {
  slug: 'cta',
  admin: {
    useAsTitle: 'id',
    group: 'SUPPORT',
  },
  access: {
    read: () => true,
    create: () => true,

    update: ({ req }) => {
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
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },

    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}

export default Newsletter
