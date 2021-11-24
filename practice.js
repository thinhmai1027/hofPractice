// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  var filtered = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return filtered;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  var filtered = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return filtered;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  var cookies = _.filter(desserts, function(item) {
    if (item.type === 'cookie') {
      return item;
    }
  });
  return cookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  var sum = _.reduce(products, function(total, item) {
    var stringPrice = item.price.substring(1);
    var numPrice = Number(stringPrice);
    return numPrice + total;
  }, 0);
  return sum;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var filter = {};

  _.reduce(desserts, function(memo, item) {
    if (filter[item.type] === undefined) {
      filter[item.type] = 1;
    } else {
      filter[item.type]++;
    }
  }, 0);
  return filter;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var result = [];

  _.reduce(movies, function(memo, item) {
    if (item.releaseYear >= 1990 && item.releaseYear < 2000) {
      result.push(item.title);
    }
  }, 0);
  return result;
  console.log(result);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var shorter = false;

  _.reduce(movies, function(memo, movie) {
    if (movie.runtime <= timeLimit) {
      shorter = true;
    }
  }, 0);
  return shorter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

  var upper = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upper;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  var hasNoGluten = _.map(desserts, function(dessert) {
    if (dessert['ingredients'].includes('flour')) {
      return dessert['glutenFree'] = false;
    } else {
      return dessert['glutenFree'] = true;
    }

  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  var salePrice = _.map(groceries, function(product) {
    var stringPrice = product.price.substring(1);
    var numberPrice = Number(stringPrice);
    var discount = (numberPrice * coupon).toFixed(2);
    var salePriceString = (numberPrice - discount).toString();
    return product.salePrice = '$' + salePriceString;
  });
  return groceries;
};
