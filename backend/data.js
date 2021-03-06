const products = [
  {
    title: `single leaf pillow `,
    category: "home",
    sub_category: "pillows",
    img: "./images/almofada1.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1599,
    sale: 1099,
    amount: 1,
    featured: true,
  },
  {
    title: `autumn leaves pillow `,
    category: "home",
    sub_category: "pillows",
    img: "./images/almofada2.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1799,
    sale: 0,
    amount: 1,
    featured: false,
  },
  {
    title: `mirror-effect leaves pillow `,
    category: "home",
    sub_category: "pillows",
    img: "./images/almofada3.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 0,
    price: 1699,
    sale: 1499,
    amount: 1,
    featured: false,
  },
  {
    title: `black sand bottle earrings `,
    category: "accessories",
    sub_category: "earrings",
    img: "./images/earrings.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 6,
    price: 599,
    sale: 0,
    amount: 1,
    featured: true,
  },
  {
    title: `flower necklace  `,
    category: "accessories",
    sub_category: "necklace",
    img: "./images/pendant1.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 0,
    price: 599,
    sale: 0,
    amount: 1,
    featured: false,
  },
  {
    title: `cotton mask `,
    category: "health & personal care",
    sub_category: "face mask",
    img: "./images/mascaras_tecidos.jpg",
    detail:
      "This cotton face mask has a pocket for a filter,  3 filters are included.",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 800,
    sale: 700,
    amount: 1,
    featured: true,
  },
  {
    title: `pack of 5 sanitary pads`,
    category: "health & personal care",
    sub_category: "feminine hygiene",
    img: "./images/pensos_flores.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 3500,
    sale: 0,
    amount: 1,
    featured: true,
  },
  {
    title: `single sanitary pad`,
    category: "health & personal care",
    sub_category: "feminine hygiene",
    img: "./images/pensos_mundo.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 8,
    price: 600,
    sale: 0,
    amount: 1,
    featured: false,
  },
  {
    title: `pack of 3  produce bags `,
    category: "bags",
    sub_category: "produce bags",
    img: "./images/produceBags.png",
    detail: "made from fishing nets",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1600,
    sale: 0,
    amount: 1,
    featured: true,
  },
  {
    title: `Nature lover tote bag`,
    category: "bags",
    sub_category: "tote bags",
    img: "./images/toteBag1.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1300,
    sale: 1200,
    amount: 1,
    featured: true,
  },
  {
    title: `pocket leaves tote bag`,
    category: "bags",
    sub_category: "tote bags",
    img: "./images/toteBag2.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1300,
    sale: 1200,
    amount: 1,
    featured: false,
  },
  {
    title: `reversible tote bag`,
    category: "bags",
    sub_category: "tote bags",
    img: "./images/reversibleBag.jpg",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure aliquam. Pariatur ipsa cumque qui sit sequi praesentium architecto nemo inventore fuga ut, quam nobis earum iste quaerat velit ad?",
    thumbnail1: "./images/thumb/thumbnail1.png",
    thumbnail2: "./images/thumb/thumbnail2.png",
    stock: 2,
    price: 1800,
    sale: 1699,
    amount: 1,
    featured: false,
  },
];

export default products;
