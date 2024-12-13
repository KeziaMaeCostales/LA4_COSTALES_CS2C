// Assignment 4: Simple Queueing System

// Initialize an empty queue
let customerQueue = [];

// Predefined customers
let predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add customers to the queue
for (let index = 0; index < predefinedCustomers.length; index++) {
    customerQueue.push({ number: index + 1, name: predefinedCustomers[index] });
    console.log("Customer added: " + predefinedCustomers[index] + " with number " + (index + 1));
}

// Start servicing customers
while (customerQueue.length > 0) {
    console.log("\nCurrent Queue: ");
    for (let queueIndex = 0; queueIndex < customerQueue.length; queueIndex++) {
        console.log(customerQueue[queueIndex].number + ": " + customerQueue[queueIndex].name);
    }

    let selectedNumber = prompt("Enter the number of the customer to be serviced:");

    let selectedIndex = customerQueue.findIndex(function(queueCustomer) {
        return queueCustomer.number == selectedNumber; // Use loose equality to compare string and number
    });

    if (selectedIndex !== -1) {
        alert("Now servicing: " + customerQueue[selectedIndex].name);
        customerQueue.splice(selectedIndex, 1); // Remove the serviced customer
    } else {
        alert("Invalid number. Try again.");
    }
}

alert("All customers have been serviced!");
