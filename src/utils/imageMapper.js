// Static Cloudinary image mapping for products. Replaces dynamic import.meta.glob usage.
// Ensures every image is a plain string (Cloudinary HTTPS URL) and preserves
// getImageGroups() and findGroupForProduct() APIs used across the app.

const PRODUCT_IMAGES = {
  t1: [
    {
      file: 't1-DlAY5GUW_dajxt1.jpg',
      color: 'Default',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t1-DlAY5GUW_dajxt1.jpg',
    },
  ],

  t2: [
    {
      file: 't2-FP3rqqo1_pjvsn9.jpg',
      color: 'Default',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t2-FP3rqqo1_pjvsn9.jpg',
    },
  ],

  t3: [
    {
      file: 't3Black-D6r4rxKy_grntpl.jpg',
      color: 'Black',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t3Black-D6r4rxKy_grntpl.jpg',
    },
    {
      file: 't3Blue-C4C4Ra2v_mqpbdg.jpg',
      color: 'Blue',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t3Blue-C4C4Ra2v_mqpbdg.jpg',
    },
  ],

  t4: [
    {
      file: 't4Black-CVzshQ6E_iltosw.jpg',
      color: 'Black',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t4Black-CVzshQ6E_iltosw.jpg',
    },
    {
      file: 't4White-CAwcnE9L_gtk1w3.jpg',
      color: 'White',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909169/t4White-CAwcnE9L_gtk1w3.jpg',
    },
  ],

  t5: [
    {
      file: 't5-zncMu2FO_mnaqg1.jpg',
      color: 'Default',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1786909168/t5-zncMu2FO_mnaqg1.jpg',
    },
    {
      file: 't5Blue_nd0889.jpg',
      color: 'Blue',
      src: 'https://res.cloudinary.com/dillnn4li/image/upload/v1787346744/t5Blue_nd0889.jpg',
    },
  ],
}

export function getImageGroups() {
  // return a shallow copy to avoid accidental mutation by callers
  return { ...PRODUCT_IMAGES }
}

export function findGroupForProduct(product) {
  if (!product?.id) return null

  const groups = getImageGroups()

  // match product id exactly (case-insensitive) to avoid creating separate products
  const key = Object.keys(groups).find((k) => k.toLowerCase() === (product.id || '').toLowerCase())

  if (!key) return null

  return {
    key,
    images: groups[key],
  }
}

export default {
  getImageGroups,
  findGroupForProduct,
}
