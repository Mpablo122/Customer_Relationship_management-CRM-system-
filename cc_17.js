//Task 1 Create a Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`New customer created: ${this.name}`);
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
      console.log(`${this.name} made a purchase of $${amount}`);
    }
  
    getTotalSpent() {
      const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
      console.log(`${this.name} has spent a total of $${totalSpent}`);
      return totalSpent;
    }
  }
  
  class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
      console.log(`New sales rep created: ${this.name}`);
    }
  
    addClient(customer) {
      this.clients.push(customer);
      console.log(`${this.name} added ${customer.name} as a client.`);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(client => client.name === name);
      if (client) {
        const totalSpent = client.getTotalSpent();
        console.log(`${client.name} has spent a total of $${totalSpent}.`);
        return totalSpent;
      } else {
        console.log(`Client with name ${name} not found.`);
        return null;
      }
    }
  }
  