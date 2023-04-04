const products = [
  {
    name: "potato",
    type: "vegetables",
    price: 5,
  },
  {
    name: "carrot",
    type: "vegetables",
    price: 3,
  },
  {
    name: "mushrooms",
    type: "vegetables",
    price: 6,
  },
  {
    name: "apple",
    type: "fruits",
    price: 7,
  },
  {
    name: "tomato",
    type: "vegetables",
    price: 2,
  },
  {
    name: "banana",
    type: "fruits",
    price: 50,
  },
  {
    name: "mango",
    type: "fruits",
    price: 40,
  },
  {
    name: "beef",
    type: "meat",
    price: 150,
  },
  {
    name: "chicken",
    type: "meat",
    price: 100,
  },
  {
    name: "cola",
    type: "beverages",
    price: 10,
  },
  {
    name: "juice",
    type: "beverages",
    price: 15,
  },
];

// 2. and then make a function and return object with 3 properties. 1 - filtered array with fruits, 2 - filtered array with beverages, 3 - array with beverages and fruits
// const combined = [...fruits, beverages];
//
// return {
//   fruits,
//   beverages
// }

// 3. return total prices from all the products. Using reduce(). Create a function as well

// 4. return total price from only meat type.

// 5. change the product with name apple (price). and return modified array. using map()

const sum = products.reduce((accumulator, object) => {
  return accumulator + object.price;
}, 0);
