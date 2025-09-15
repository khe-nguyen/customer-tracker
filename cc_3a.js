// Coding Challenge 3a - Sept 14

// 2. Create Customer Records
let customers = [
    {name: "Maddy Kanda", email: "madeleinekanda@gmail.com", purchase: "wine"},
    {name: "Tomas Godoy Pastore", email: "tomaspastore@gmail.com", purchase: "laptop" },
    {name: "Augusto Trufelman", email: "augustotrufelman@gmail.com", purchase: "shoes"},
    ];



// 3. Add and Remove Data
// Add a new customer
customers.push({name: "Kelly Khe Nguyen", email: "kellynguyen@gmail.com", purchase: "comforter"});

// Remove the first customer
customers.shift();
console.log(customers)

// 4. Update Customer Info

// Update the email of one existing customer
console.log(customers[1].email = "tomasnewmail@gmail.com");
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchase}`));

// Add a new purchase to another customer
console.log(customers[2].purchase = "jacket");
customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchase}`));



