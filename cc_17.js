// task 1 
// created customer class 
class Customer {
    constructor(name, email) {
        this.name = name; // customer name 
        this.email = email; // customer email 
        this.purchaseHistory = []; // customer purchase amounts array 
    }
    // adds purchase amount to purchaseHistory array 
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    // calculate and returns the total amount spent 
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// task 2 
// created a sales rep class
class SalesRep {
    constructor(name) {
        this.name = name; // sales rep name 
        this.clients = []; // array of clients 
    }
    // add customer to clients array 
    addClient(customer) {
        this.clients.push(customer);
    }
    // find client by name and return total amount spent 
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0; // return total amount spent otherwise return 0 
    }
}
// task 3 
// created VIPCustomer class that extends Customer class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); // retrieves name and email from customer class 
        this.vipLevel = vipLevel; // viplevel of customers 
    }
    // override getTotalSpent 
    getTotalSpent() {
        const totalSpent = super.getTotalSpent(); // calls parent class
        const loyaltyBonus = totalSpent * 0.10; // calculate 10% loyalty bonus 
        return totalSpent + loyaltyBonus; // return total spent with the bonus added 
    }
}
// created customers regular and vip
let customer1 = new Customer('Beth Anderson', 'beth.andy@gmail.com');
let customer2 = new Customer('Jonas Richy', 'richy3345@mgail.com');
let vipCustomer1 = new VIPCustomer('Andy Johnson', 'johnson.a23@gmail.com', 'Gold');
let vipCustomer2 = new VIPCustomer('Janet Brown', 'j.brown482@gmail.com', 'Platinum');
// added purchases to customers 
customer1.addPurchase(34);
customer2.addPurchase(56);
vipCustomer1.addPurchase(590);
vipCustomer1.addPurchase(90);
vipCustomer2.addPurchase(120);
// created sales rep and added customers to their client list 
const salesRep1 = new SalesRep('Alex Micheal');
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);
salesRep1.addClient(vipCustomer1);
salesRep1.addClient(vipCustomer2);
// calculate total revenue from all customers
const totalRevenue = salesRep1.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
console.log(`Total revenue from all customers: $${totalRevenue}`);
// find customers who spent more than $500
const highSpenders = salesRep1.clients.filter(client => client.getTotalSpent() > 500);
console.log(`Customers who spent over $500:`);
highSpenders.forEach(client => console.log(`${client.name}: $${client.getTotalSpent()}`));
// created an array of customer names and total spent 
const customerSpending = salesRep1.clients.map(client => ({
    name: client.name,
    totalSpent: client.getTotalSpent()
}));
console.log('Customer names and total spent:');
customerSpending.forEach(client => console.log(`${client.name}: $${client.totalSpent}`));