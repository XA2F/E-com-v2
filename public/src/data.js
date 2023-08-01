const data = {
  products: [
    {
      name: ' Little Bit of Everything button-up shirt',
      slug: 'Shirt-1', // Update the slug to "button-1"
      category: 'Shirts',
      image: '/images/shirt1.webp',
      price: 120,
      description: 'Red-Black Button Up',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Draw The line Textured button-up shirt',
      slug: 'Shirt-2',
      category: 'Shirts',
      image: '/images/shirt2.webp', // 679px × 829px
      price: 150,
      description: 'Beige Button Up',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Dawson Black button-up shirt',
      slug: 'Shirt-3',
      category: 'Shirts',
      image: '/images/shirt3.webp', // 679px × 829px
      price: 180,
      description: 'A Dawson Product',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Burgundy button-up shirt ',
      slug: 'Shirt-4',
      category: 'Shirts',
      image: '/images/shirt4.webp', // 679px × 829px
      price: 210,
      description: 'Geometric Waves Short Sleeve Button Up-Burgundy',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Circled Out Textured button-up shirt',
      slug: 'Shirt-5',
      category: 'Shirts',
      image: '/images/shirt5.webp', // 679px × 829px
      price: 240,
      description: ' Circled out Textured Button Up Light Blue',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Dawson Vital button-up shirt ',
      slug: 'Shirt-6',
      category: 'Shirts',
      image: '/images/shirt6.webp', // 679px × 829px
      price: 270,
      description: 'Beige, Black, Red, Orange, Mixture',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Volley Two Tone Shorts For You',
      slug: 'Short-1',
      category: 'Shorts',
      image: '/images/short1.webp', // 679px × 829px
      price: 240,
      description: 'Montes Volley Two Tone Shorts',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'Cloud Mixed Shorts For You',
      slug: 'Short-2',
      category: 'Shorts',
      image: '/images/short2.webp', // 679px × 829px
      price: 35,
      description: 'Cloud Mixed Red Outline Shorts',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: ' The Modern Smiley Shorts',
      slug: 'Short-3',
      category: 'Shorts',
      image: '/images/short3.webp', // 679px × 829px
      price: 50,
      description: ' A Pattern To Smile For',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'Golden Hour Short To live',
      slug: 'Short-4',
      category: 'Shorts',
      image: '/images/short4.webp', // 679px × 829px
      price: 30,
      description: ' Golden Beige Shorts',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'Players Club Two Tone Shorts',
      slug: 'Short-5',
      category: 'Shorts',
      image: '/images/short5.webp', // 679px × 829px
      price: 70,
      description: 'Two Tone Shorts ',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: ' Shogun White Black Smiley Shorts',
      slug: 'Short-6',
      category: 'Shorts',
      image: '/images/short6.webp', // 679px × 829px
      price: 10,
      description: ' White Black Smiley Shorts',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Modern Stretch Wide Bottoms Pants ',
      slug: 'Pant-1',
      category: 'Pants',
      image: '/images/pant1.webp', // 679px × 829px
      price: 40,
      description: ' Velvet Bronze Pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Homecoming Slim Trouser',
      slug: 'Pant-2',
      category: 'Pants',
      image: '/images/pant2.webp', // 679px × 829px
      price: 60,
      description: ' Brown Suit Pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Trapper Jean-Alike Trouser',
      slug: 'Pant-3',
      category: 'Pants',
      image: '/images/pant3.webp', // 679px × 829px
      price: 30,
      description: ' Navy Blue Pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: ' Faux Leather Slim Trouser',
      slug: 'Pant-4',
      category: 'Pants',
      image: '/images/pant4.webp', // 679px × 829px
      price: 60,
      description: ' Grey Suit Pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: ' Coming Home Slim Trouser',
      slug: 'Pant-5',
      category: 'Pants',
      image: '/images/pant5.webp', // 679px × 829px
      price: 70,
      description: ' Black Suit Pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
    },

    {
      name: 'Upstream Nylon Modern Trouser',
      slug: 'Pant-6',
      category: 'Pants',
      image: '/images/pant6.webp', // 679px × 829px
      price: 80,
      description: ' Brown Upstream Nylon Modern pants',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      value: 'Pants',
    },
  ],
};
export default data;
