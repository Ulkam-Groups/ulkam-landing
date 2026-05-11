import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'bp-bop',
    name: 'BP-BOP',
    grade: 'Broken Pekoe – Broken Orange Pekoe',
    description:
      'A classic second-flush orthodox grade from the upper Brahmaputra valley. Rich amber liquor with a bold, malty character — ideal for those who enjoy a robust morning cup, best with a splash of milk.',
    flavorNotes: ['Malt', 'Amber', 'Muscatel', 'Honey'],
    image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=800&h=600&fit=crop&q=80',
    tag: 'bestseller',
    origin: 'Upper Brahmaputra Valley, Assam',
  },
  {
    id: 'bopsm',
    name: 'BOPSM',
    grade: 'Broken Orange Pekoe Small',
    description:
      'A finer orthodox cut delivering a bright, brisk liquor with delicate floral notes. The BOPSM grade is prized by connoisseurs for its clean finish and light golden hue — perfect served straight, no milk needed.',
    flavorNotes: ['Brisk', 'Citrus', 'Floral', 'Golden'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop&q=80',
    tag: 'premium',
    origin: 'Dibrugarh District, Assam',
  },
  {
    id: 'ctc',
    name: 'CTC',
    grade: 'Cut Tear Curl',
    description:
      'The backbone of the everyday Indian chai. Our CTC is processed through a meticulous cut-tear-curl method that produces granular pellets which brew quickly into a bold, full-bodied infusion — perfect for milk chai at scale.',
    flavorNotes: ['Robust', 'Earthy', 'Bold', 'Spice-ready'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&h=600&fit=crop&q=80',
    origin: 'Central Assam Plains',
  },
  {
    id: 'spiced-tea',
    name: 'Spiced Tea',
    grade: 'Masala Blend',
    description:
      'Our CTC base elevated with a hand-ground masala of green cardamom, dried ginger, Ceylon cinnamon, and black pepper. A warming, aromatic brew that captures the spirit of the Assamese hearth — rich, spicy, and deeply comforting.',
    flavorNotes: ['Cardamom', 'Ginger', 'Cinnamon', 'Warm'],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&h=600&fit=crop&q=80',
    tag: 'new',
    origin: 'Assam (Blended)',
  },
  {
    id: 'blend-tea',
    name: 'Blend Tea',
    grade: 'Signature Blend',
    description:
      'A masterful union of BOP and CTC grades, hand-blended to achieve a perfectly balanced everyday tea. Full-bodied enough for milk, yet nuanced enough to enjoy plain. Ulkam\'s most versatile offering for households and HoReCa alike.',
    flavorNotes: ['Smooth', 'Balanced', 'Mellow', 'Versatile'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop&q=80',
    origin: 'Assam (Blended)',
  },
];
