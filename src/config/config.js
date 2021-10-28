const data = {
    products: [
      {
        "id": 1,
        "name": "Bread",
        "price": 1000,
        "quantity": 10,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/1/bread.jfif",
        "description": "bread and butter"
      },
      {
        "id": 2,
        "name": "Chocolate mousse",
        "price": 20000,
        "quantity": 1,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/2/mousse.jpg",
        "description": "chocolate"
      },
      {
        "id": 3,
        "name": "Pho",
        "price": 40000,
        "quantity": 30,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/3/0FAC4EB6-526A-4C08-9DFF-D1E1444534C8.jpeg",
        "description": "The taste of Vietnam in a bowl!"
      },
      {
        "id": 4,
        "name": "Bruschetta",
        "price": 2000,
        "quantity": 15,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/4/1.jpg",
        "description": "Grilled country bread with Roma tomatoes, olive oil, garlic and basil."
      },
      {
        "id": 5,
        "name": "Sweet Potato Crostini",
        "price": 3000,
        "quantity": 12,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/5/1.jpg",
        "description": "Sweet Potato Crostini with Prosciutto Honey Roasted Figs"
      },
      {
        "id": 6,
        "name": "Chicken Wings",
        "price": 5000,
        "quantity": 20,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/6/1.jpg",
        "description": "Crispy Baked Salt and Pepper Chicken Wings"
      },
      {
        "id": 7,
        "name": "Zucchini Chips",
        "price": 5000,
        "quantity": 20,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/7/1.jpg",
        "description": "Crispy Baked Zucchini Chips"
      },
      {
        "id": 8,
        "name": "Meatballs",
        "price": 3000,
        "quantity": 13,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/8/1.jpg",
        "description": "Sweet and Sour Meatballs"
      },
      {
        "id": 9,
        "name": "Tonkotsu Ramen",
        "price": 7000,
        "quantity": 25,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/9/1.jpg",
        "description": "Famous Japanese cuisine"
      },
      {
        "id": 10,
        "name": "Baked Ham and Cheese Rolls",
        "price": 1500,
        "quantity": 17,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/10/1.jpg",
        "description": "Pastry, cheese, ham, and a nice sauce on top and you have a crispy exterior with gooey interior that is always popular"
      },
      {
        "id": 11,
        "name": "Kueh Tutu",
        "price": 5000,
        "quantity": 20,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/11/F3D3BF0F-8A7E-4180-A300-618C07A8DE9E.jpeg",
        "description": "Steamed rice flour filled with palm sugar."
      },
      {
        "id": 12,
        "name": "Mash Potato",
        "price": 4000,
        "quantity": 30,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/12/1.jpg",
        "description": "Creamy mash potato bowl"
      },
      {
        "id": 13,
        "name": "Rojak",
        "price": 20000,
        "quantity": 13,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/13/B44F2B10-9FF9-49C6-BE84-91B9A14EEA74.jpeg",
        "description": "Looks like a mess, but the taste is blessed."
      },
      {
        "id": 14,
        "name": "Tortellini soup",
        "price": 3000,
        "quantity": 12,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/14/1.jpg",
        "description": "Lemony tortellini soup with spinach and dill"
      },
      {
        "id": 15,
        "name": "Curry Puff",
        "price": 20000,
        "quantity": 10,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/15/CBE9F211-7738-4CA2-BAFB-EFE7DE6CF923.jpeg",
        "description": "A hearty serving of curry filling wrapped in a flaky pastry crust."
      },
      {
        "id": 16,
        "name": "Bánh Khọt",
        "price": 2700,
        "quantity": 100,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/16/1.png",
        "description": "Vietnamese mini savory pancakes"
      },
      {
        "id": 17,
        "name": "Ondeh Ondeh",
        "price": 15000,
        "quantity": 15,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/17/7A7E2D48-4EE9-45D8-ADCF-24A0199B7A63.jpeg",
        "description": "Green rice cake balls rolled in grated coconut."
      },
      {
        "id": 18,
        "name": "Beef wellington",
        "price": 100000,
        "quantity": 20,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/18/1.jpg",
        "description": "Gordon Ramsey's smoking hot Beef Wellington"
      },
      {
        "id": 19,
        "name": "Soon Kueh",
        "price": 10000,
        "quantity": 20,
        "category": "Appetizer",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/19/F92902B3-549F-4E2E-A159-DA8713620E30.jpeg",
        "description": "Translucent chewy skin filled with bamboo shoots and mushroom."
      },
      {
        "id": 21,
        "name": "Kaya Toast",
        "price": 5000,
        "quantity": 30,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/21/8B954626-2D9F-4D47-A2E8-831E6D2249EA.jpeg",
        "description": "Two pieces of toast served with a decadent coconut spread and a knob of butter"
      },
      {
        "id": 22,
        "name": "Ang Ku Kueh",
        "price": 10000,
        "quantity": 10,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/22/49269E48-FE75-41FE-A3F7-FBB8F42CF173.png",
        "description": "Brings longevity, fortune and prosperity to these who are eating it."
      },
      {
        "id": 23,
        "name": "Wagyu beef",
        "price": 10000,
        "quantity": 45,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/23/1.jpg",
        "description": "Delicious wagyu beef slices"
      },
      {
        "id": 24,
        "name": "Sushi",
        "price": 4000,
        "quantity": 25,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/24/1.jpg",
        "description": "Fish and shrimp sushi rolls"
      },
      {
        "id": 25,
        "name": "Pudding",
        "price": 3000,
        "quantity": 20,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/25/1.jpg",
        "description": "Almond milk pudding"
      },
      {
        "id": 26,
        "name": "Broken Rice",
        "price": 32000,
        "quantity": 30,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/26/B648480A-4DF1-40B5-81FB-3920EA0B3BE5.jpeg",
        "description": "Broken rice with pork chop and fried egg."
      },
      {
        "id": 27,
        "name": "Tiramisu",
        "price": 7000,
        "quantity": 34,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/27/1.jpg",
        "description": "Tiramisu with chocolate and cream"
      },
      {
        "id": 28,
        "name": "Chocolate cake",
        "price": 4000,
        "quantity": 30,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/28/1.jpg",
        "description": "Triple layer chocolate cake"
      },
      {
        "id": 29,
        "name": "Vermicelli",
        "price": 30000,
        "quantity": 20,
        "category": "Main Course",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/29/EDBD0A6B-5032-4BCA-B247-DDEC7642B58C.webp",
        "description": "Vermicelli with fried spring rolls."
      },
      {
        "id": 30,
        "name": "Cupcake",
        "price": 2000,
        "quantity": 50,
        "category": "Desserts",
        "is_available": 1,
        "image": "https://test.greenup.com.vn/storage/30/1.jpg",
        "description": "Chocolate cupcake with sprinkles"
      }
    ],
  };

  export default data;