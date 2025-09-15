// Coding Challenge 3a - Sept 14

// 2. Create Customer Records
let customers = [
    {name: "Maddy Kanda", email: "madeleinekanda@gmail.com", purchase: ["wine"]},
    {name: "Tomas Godoy Pastore", email: "tomaspastore@gmail.com", purchase: ["laptop"]},
    {name: "Augusto Trufelman", email: "augustotrufelman@gmail.com", purchase: ["shoes"]},
];

// 3. Add and Remove Data
customers.push({name: "Kelly Khe Nguyen", email: "kellynguyen@gmail.com", purchase: ["comforter"]});
customers.shift();

// 4. Update Customer Info
console.log(customers[0].email = "tomasnewmail@gmail.com");

customers.forEach(customer => {
console.log(`${customer.name} | ${customer.email} | ${customer.purchase}`);
});

console.log(customers[2].purchase.push("jacket"));

customers.forEach(customer => {
console.log(`${customer.name} | ${customer.email} | ${customer.purchase}`);
});

// 5. Display Customer Information
customers.forEach(customer => {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchase.length}`);
    console.log("---------------------------");
});
