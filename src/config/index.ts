export const PRODUCT_CATEGORIES = [
    {
      label: 'UI Kits',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/P.png',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/P.png',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: '/P.png',
        },
      ],
    },
    {
      label: 'Icons',
      value: 'icons' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/P.png',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/P.png',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/P.png',
        },
      ],
    },
  ]