const products = [
  {
    name: 'Veggie Burger',
    image: '/images/veggie_burger.jpg',
    description:
      'A delicious vegetarian burger made with a savory black bean patty, topped with fresh lettuce, tomatoes, and onions.',
    brand: 'Cafeteria',
    category: 'Burgers',
    price: 6.49,
    countInStock: 12,
    rating: 4.6,
    numReviews: 10,
  },
  {
    name: 'Grilled Veggie Wrap',
    image: '/images/grilled_veggie_wrap.jpg',
    description:
      'A wrap filled with grilled zucchini, bell peppers, mushrooms, and hummus in a whole-grain tortilla.',
    brand: 'Cafeteria',
    category: 'Wraps',
    price: 5.49,
    countInStock: 15,
    rating: 4.3,
    numReviews: 8,
  },
  {
    name: 'Veggie Pizza',
    image: '/images/veggie_pizza.jpg',
    description:
      'A delicious pizza topped with fresh vegetables including tomatoes, bell peppers, olives, and onions, with mozzarella cheese.',
    brand: 'Cafeteria',
    category: 'Pizzas',
    price: 8.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 18,
  },
  {
    name: 'Vegetarian Quesadilla',
    image: '/images/veg_quesadilla.jpg',
    description:
      'A warm flour tortilla filled with a mix of melted cheese, sautéed vegetables, and spices, grilled to perfection.',
    brand: 'Cafeteria',
    category: 'Mexican',
    price: 6.49,
    countInStock: 10,
    rating: 4.2,
    numReviews: 10,
  },
  {
    name: 'Chickpea Salad',
    image: '/images/chickpea_salad.jpg',
    description:
      'A refreshing chickpea salad with cucumbers, tomatoes, red onion, and a lemon vinaigrette dressing.',
    brand: 'Cafeteria',
    category: 'Salads',
    price: 5.99,
    countInStock: 30,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name: 'Vegetarian Stir-Fry',
    image: '/images/veg_stirfry.jpg',
    description:
      'A stir-fry of mixed vegetables like broccoli, carrots, and bell peppers, served with steamed rice and soy sauce.',
    brand: 'Cafeteria',
    category: 'Asian',
    price: 7.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: 'Sweet Potato Fries',
    image: '/images/sweet_potato_fries.jpg',
    description:
      'Crispy, golden sweet potato fries seasoned to perfection. A perfect side dish or snack.',
    brand: 'Cafeteria',
    category: 'Sides',
    price: 3.99,
    countInStock: 25,
    rating: 4.6,
    numReviews: 10,
  },
  {
    name: 'Vegan Buddha Bowl',
    image: '/images/vegan_buddha_bowl.jpg',
    description:
      'A nutritious bowl filled with quinoa, avocado, chickpeas, roasted vegetables, and a tahini dressing.',
    brand: 'Cafeteria',
    category: 'Bowls',
    price: 9.99,
    countInStock: 10,
    rating: 4.9,
    numReviews: 18,
  },
  {
    name: 'Vegetarian Tacos',
    image: '/images/veg_tacos.jpg',
    description:
      'Soft tortillas filled with a flavorful mix of black beans, corn, avocado, and salsa, topped with cilantro.',
    brand: 'Cafeteria',
    category: 'Mexican',
    price: 5.99,
    countInStock: 20,
    rating: 4.4,
    numReviews: 15,
  },
  {
    name: 'Mushroom Risotto',
    image: '/images/mushroom_risotto.jpg',
    description:
      'Creamy risotto with sautéed mushrooms, garlic, and parmesan cheese for a rich and comforting dish.',
    brand: 'Cafeteria',
    category: 'Pasta',
    price: 8.49,
    countInStock: 12,
    rating: 4.7,
    numReviews: 14,
  },
  // Juices
  {
    name: 'Fresh Orange Juice',
    image: '/images/orange_juice.jpg',
    description: 'A refreshing glass of freshly squeezed orange juice, full of vitamin C.',
    brand: 'Cafeteria',
    category: 'Juices',
    price: 2.99,
    countInStock: 25,
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: 'Apple Carrot Juice',
    image: '/images/apple_carrot_juice.jpg',
    description: 'A healthy mix of fresh apples and carrots, packed with nutrients.',
    brand: 'Cafeteria',
    category: 'Juices',
    price: 3.49,
    countInStock: 18,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: 'Green Detox Juice',
    image: '/images/green_detox_juice.jpg',
    description:
      'A blend of kale, spinach, and cucumber, designed to detox and refresh your body.',
    brand: 'Cafeteria',
    category: 'Juices',
    price: 3.99,
    countInStock: 20,
    rating: 4.7,
    numReviews: 18,
  },
  // Snacks
  {
    name: 'Vegetable Samosas',
    image: '/images/vegetable_samosas.jpg',
    description:
      'Crispy golden-brown pastry filled with spiced potatoes and peas, served with chutney.',
    brand: 'Cafeteria',
    category: 'Snacks',
    price: 2.49,
    countInStock: 30,
    rating: 4.8,
    numReviews: 14,
  },
  {
    name: 'Veggie Spring Rolls',
    image: '/images/veg_spring_rolls.jpg',
    description:
      'Crispy spring rolls filled with a mix of vegetables like cabbage, carrots, and mushrooms.',
    brand: 'Cafeteria',
    category: 'Snacks',
    price: 3.29,
    countInStock: 20,
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: 'Guacamole & Chips',
    image: '/images/guacamole_chips.jpg',
    description: 'Fresh guacamole paired with crispy tortilla chips, perfect for a light snack.',
    brand: 'Cafeteria',
    category: 'Snacks',
    price: 4.49,
    countInStock: 25,
    rating: 4.9,
    numReviews: 22,
  },
  // Desserts
  {
    name: 'Vegan Chocolate Cake',
    image: '/images/vegan_chocolate_cake.jpg',
    description: 'A rich and moist vegan chocolate cake topped with a silky ganache.',
    brand: 'Cafeteria',
    category: 'Desserts',
    price: 3.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: 'Apple Pie',
    image: '/images/apple_pie.jpg',
    description: 'A classic homemade apple pie with a flaky crust and a cinnamon-sugar filling.',
    brand: 'Cafeteria',
    category: 'Desserts',
    price: 2.99,
    countInStock: 18,
    rating: 4.5,
    numReviews: 15,
  },
  {
    name: 'Chia Pudding',
    image: '/images/chia_pudding.jpg',
    description: 'A healthy dessert made with chia seeds, coconut milk, and topped with fresh berries.',
    brand: 'Cafeteria',
    category: 'Desserts',
    price: 3.49,
    countInStock: 10,
    rating: 4.7,
    numReviews: 18,
  },
  // Beverages
  {
    name: 'Iced Coffee',
    image: '/images/iced_coffee.jpg',
    description: 'A refreshing cold brew coffee served over ice, perfect for a hot day.',
    brand: 'Cafeteria',
    category: 'Beverages',
    price: 2.99,
    countInStock: 20,
    rating: 4.6,
    numReviews: 25,
  },
  {
    name: 'Lemonade',
    image: '/images/lemonade.jpg',
    description: 'A classic refreshing lemonade made with fresh lemons and a hint of sweetness.',
    brand: 'Cafeteria',
    category: 'Beverages',
    price: 2.49,
    countInStock: 30,
    rating: 4.7,
    numReviews: 30,
  },
  {
    name: 'Iced Matcha Latte',
    image: '/images/iced_matcha_latte.jpg',
    description:
      'A creamy iced matcha latte made with premium matcha and almond milk, served over ice.',
    brand: 'Cafeteria',
    category: 'Beverages',
    price: 4.49,
    countInStock: 15,
    rating: 4.9,
    numReviews: 20,
  }
];

export default products;