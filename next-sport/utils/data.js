import bcrypt from 'bcrypt.js'
const data = {
  users:[
    {
      name:'john',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin:true,
  },
  {
    name:'jane',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123457894556'),
    isAdmin:false,
},
],
  products: [
    {
      name: 'Basketball',
      slug: 'basketball',
      category: 'sport',
      image: '/images/basket.jpg',
      price: '900',
      brand: 'rowling',
      rating: 5,
      numReviews: 8,
      countInStock: 20,
      description: 'A basketball for playing basketball',
    },
    {
      name: 'Baseball-gloves',
      slug: 'baseball',
      category: 'sport',
      image: '/images/glove.jpg',
      price: '1900',
      brand: 'rowl',
      rating: 5,
      numReviews: 10,
      countInStock: 40,
      description: 'A baseball glove for catching ball in baseball',
    },
    {
      name: 'Skate',
      slug: 'skate',
      category: 'sport',
      image: '/images/skate.jpg',
      price: '999',
      brand: 'wheels',
      rating: 4.9,
      numReviews: 9,
      countInStock: 78,
      description: 'A pair of roller skates to understand balance',
    },
    {
      name: 'Tennis-Racket',
      slug: 'gripper',
      category: 'sport',
      image: '/images/gripper.jpg',
      price: '18889',
      brand: 'Yonex',
      rating: 4.87,
      numReviews: 90,
      countInStock: 70,
      description: 'Tennis Racket for lawn tennis',
    },
    {
      name: 'Bow-Arrow',
      slug: 'bowArrow',
      category: 'sport',
      image: '/images/bow.jpg',
      price: '29996',
      brand: 'archers',
      rating: 4.5,
      numReviews: 89,
      countInStock: 200,
      description: 'A bow and arrow set for archers to compete in archery',
    },
    {
      name: 'Football-Net',
      slug: 'footballNet',
      category: 'sport',
      image: '/images/net.jpg',
      price: '23900',
      brand: 'adidas',
      rating: 4.98,
      numReviews: 67,
      countInStock: 54,
      description: 'A football net for practising football',
    },
  ]
};

export default data;
