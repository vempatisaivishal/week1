function calculateTotalSpentByCategory(transactions) {
    const categoryMap = {};

    for (const transaction of transactions) {
        const { category, price } = transaction;

        if (category in categoryMap) {
            categoryMap[category] += price;
        } else {
            categoryMap[category] = price;
        }
    }

    const result = [];

    for (const category in categoryMap) {
        result.push({ [category]: categoryMap[category] });
    }

    return result;
}

module.exports = calculateTotalSpentByCategory;//this to export file and use in other way
const transactions = [
    { itemName: "Item 1", category: "Category A", price: 10, timestamp: "2023-07-01" },
    { itemName: "Item 2", category: "Category B", price: 15, timestamp: "2023-07-02" },
    { itemName: "Item 3", category: "Category A", price: 20, timestamp: "2023-07-03" },
    { itemName: "Item 4", category: "Category B", price: 5, timestamp: "2023-07-04" },
    { itemName: "Item 5", category: "Category C", price: 12, timestamp: "2023-07-05" },
    { itemName: "Item 6", category: "Category A", price: 8, timestamp: "2023-07-06" },
    { itemName: "Item 7", category: "Category C", price: 6, timestamp: "2023-07-07" },
];
console.log(calculateTotalSpentByCategory(transactions));
// The of keyword is used in the for...of loop to iterate over the elements of an iterable object, such as an array.
//The in keyword is used in the for...in loop to iterate over the keys or properties of an object. 