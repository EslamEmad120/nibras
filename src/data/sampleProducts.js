const sampleProducts = [
  {
    id: 'tshirt-arabic',
    name: 'Arabic Tee',
    arabicName: 'تيشيرت عربي',
    description: 'تيشيرت مصنوع من قطن ممتاز مع نقش عربي أنيق.',
    price: 199,
    discountPrice: 149,
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 50,
    featured: true,
    bestSeller: true,
    createdAt: Date.now(),
    currency: 'SAR',

    colors: [
      {
        name: 'Black',
        arabicName: 'أسود',
        hex: '#000000',
        image:
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'White',
        arabicName: 'أبيض',
        hex: '#ffffff',
        image:
          'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Red',
        arabicName: 'أحمر',
        hex: '#ff0000',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Yellow',
        arabicName: 'أصفر',
        hex: '#FFD700',
        image:
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  {
    id: 'hoodie-nebras',
    name: 'Nebras Hoodie',
    arabicName: 'هودي نبراس',
    description: 'هودي دافئ بتصميم نبراس المميز.',
    price: 349,
    discountPrice: null,
    category: 'Hoodies',
    sizes: ['M', 'L', 'XL'],
    stock: 20,
    featured: true,
    bestSeller: false,
    createdAt: Date.now(),
    currency: 'SAR',

    colors: [
      {
        name: 'White',
        arabicName: 'أبيض',
        hex: '#ffffff',
        image:
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Black',
        arabicName: 'أسود',
        hex: '#000000',
        image:
          'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&w=1400&q=80',
      },
    ],
  },

  {
    id: 'cap-calligraphy',
    name: 'Calligraphy Cap',
    arabicName: 'كاب بخط عربي',
    description: 'كاب خفيف مع تطريز خط عربي.',
    price: 79,
    discountPrice: 59,
    category: 'Caps',
    sizes: ['ONE'],
    stock: 100,
    featured: false,
    bestSeller: true,
    createdAt: Date.now(),
    currency: 'SAR',

    colors: [
      {
        name: 'Black',
        arabicName: 'أسود',
        hex: '#000000',
        image:
          'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
]

export default sampleProducts