import type { CollectionConfig } from 'payload'

import { menuSlug } from '../shared.js'

export const Menu: CollectionConfig = {
  slug: menuSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'menuItems',
      label: 'Menu Items',
      type: 'array',
      fields: [
        {
          name: 'menuItem',
          label: 'Menu Item',
          type: 'relationship',
          relationTo: 'menu-items',
          required: true,
          admin: {
            description: 'Automatically filtered by selected tenant',
          },
        },
        {
          name: 'active',
          type: 'checkbox',
        },
      ],
    },
  ],
}
