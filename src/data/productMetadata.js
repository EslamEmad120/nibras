export const PRODUCT_METADATA = {
  t1: {
    name: 'Classic T-Shirt',
    arabicName: 'الطموح سايق',
    price: 300,
    currency: 'EGP',
    category: 'T-Shirts',
    featured: true,
  },
  t2: {
    name: 'Premium T-Shirt',
    arabicName: 'الخير كله في الرضا',
    price: 300,
    currency: 'EGP',
    category: 'T-Shirts',
    featured: true,
  },
  t3: {
    name: 'Oversized T-Shirt',
    arabicName: 'ستكون يوما ما تريد',
    price: 300,
    currency: 'EGP',
    category: 'T-Shirts',
    featured: false,
  },
  t4: {
    name: 'Nebras Hoodie',
    arabicName: 'طير بحلمك',
    price: 300,
    currency: 'EGP',
    category: 'Hoodies',
    featured: true,
  },
  t5: {
    name: 'Essential T-Shirt',
    arabicName: 'إنما الإنسان أثر',
    price: 300,
    currency: 'EGP',
    category: 'T-Shirts',
    featured: false,
  },
}

export function getProductMetadataForKey(key) {
  return PRODUCT_METADATA[key] || {}
}
