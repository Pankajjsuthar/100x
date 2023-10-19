/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/



function calculateTotalSpentByCategory(transactions) {
    const categorywisetransactions = new Map();
    for(const transaction of transactions){
        const {category , price} = transaction;
        if(categorywisetransactions.has(category)){
            categorywisetransactions.set(category, categorywisetransactions.get(category) + price);
        }
        else{
            categorywisetransactions.set(category,price);
        }
    }

    const result = {};
    for(const [key,value] of categorywisetransactions){
        result[key] = value;
    }
    return result;
}

const transactions = [
    {
        item : "banana",
        category : 2,
        price : 30,
    },
    {
        item : "mango",
        category : 1,
        price : 20,
    },
    {
        item : "watermellon",
        category : 2,
        price : 300,
    },
    {
        item : "ice",
        category : 1,
        price : 25,
    },
    {
        item : "stand",
        category : 1,
        price : 302,
    }
];

console.log(calculateTotalSpentByCategory(transactions));





