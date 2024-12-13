// Initialize the list of customers
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Create a simple queue (hash table)
let queue = {};

// Simple hash function to assign a spot based on name length
function hashFunction(name) {
    return name.length % customers.length;
}

// Add customers to the queue using the hash function
function addCustomersToQueue() {
    for (let i = 0; i < customers.length; i++) {
        let index = hashFunction(customers[i]);
        queue[index] = customers[i];
    }
}

// Display the current state of the queue
function displayQueue() {
    console.log("Current Queue:");
    for (let i = 0; i < customers.length; i++) {
        console.log((i + 1) + ": " + (queue[i] || "Empty"));
    }
}

// Serve a customer by their number and remove them from the queue
function serveCustomer() {
    let customerNumber = prompt("Enter the number to service (1-5):");

    // Check if the input is valid
    if (customerNumber >= 1 && customerNumber <= 5) {
        let index = customerNumber - 1; // Adjust for 0-based index
        let customerName = queue[index];

        if (customerName) {
            alert("Serving " + customerName);
            delete queue[index]; // Remove from queue
        } else {
            alert("No customer at this number.");
        }
    } else {
        alert("Invalid number! Please enter a number between 1 and 5.");
    }

    // Show the updated queue
    displayQueue();
}

// Main program flow
addCustomersToQueue();
displayQueue();

// Keep serving customers until the queue is empty
while (Object.keys(queue).length > 0) {
    serveCustomer();
}

// Final message
alert("All customers have been served. The queue is empty.");
