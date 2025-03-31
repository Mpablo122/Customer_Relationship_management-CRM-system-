// Task 1: Customer Class
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
      return totalSpent;
    }
  }
  
  // Task 2: SalesRep Class
  class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
      console.log(`New sales rep created: ${this.name}`);
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(client => client.name === name);
      if (client) {
        const totalSpent = client.getTotalSpent();
        return totalSpent;
      } else {
        return null;
      }
    }
  }
  
  // Task 3: VIPCustomer Class
  class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];  
      this.vipLevel = vipLevel;
      console.log(`New VIP customer created: ${this.name}, Level: ${this.vipLevel}`);
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
      console.log(`${this.name} made a purchase of $${amount}`);
    }
  
    getTotalSpent() {
      const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
      const bonus = totalSpent * 0.10;  // 10% loyalty bonus
      const totalWithBonus = totalSpent + bonus;
      return totalWithBonus;
    }
  }
  
  // Task 4: Client Report System
  
  
  const customers = [
    new Customer("John Doe", "john@example.com"),
    new VIPCustomer("Alice Johnson", "alice@example.com", "Gold"),
    new Customer("Jane Smith", "jane@example.com"),
    new VIPCustomer("Robert Brown", "robert@example.com", "Platinum")
  ];
  
  
  customers[0].addPurchase(200);
  customers[0].addPurchase(50);
  
  customers[1].addPurchase(300);
  customers[1].addPurchase(150);
  
  customers[2].addPurchase(100);
  customers[2].addPurchase(200);
  
  customers[3].addPurchase(500);
  customers[3].addPurchase(250);
  
  
  const salesRep = new SalesRep("Emma Green");
  salesRep.addClient(customers[0]);
  salesRep.addClient(customers[1]);
  salesRep.addClient(customers[2]);
  salesRep.addClient(customers[3]);
  
  
  const totalRevenue = customers.reduce((total, customer) => {
    return total + customer.getTotalSpent();
  }, 0);
  
  
  const highSpendingCustomers = customers.filter(customer => customer.getTotalSpent() > 500);
  
  const customerSummary = customers.map(customer => {
    return {
      name: customer.name,
      totalSpent: customer.getTotalSpent()
    };
  });
  
  
  const totalRevenueElement = document.createElement('p');
  totalRevenueElement.innerText = `Total Revenue: $${totalRevenue.toFixed(2)}`;
  document.body.appendChild(totalRevenueElement);
  
  const highSpendingList = document.createElement('ul');
  highSpendingList.innerHTML = '<h3>High-Spending Customers (Over $500):</h3>';
  highSpendingCustomers.forEach(customer => {
    const listItem = document.createElement('li');
    listItem.innerText = `${customer.name}: $${customer.getTotalSpent().toFixed(2)}`;
    highSpendingList.appendChild(listItem);
  });
  document.body.appendChild(highSpendingList);
  
  
  const customerSummaryList = document.createElement('ul');
  customerSummaryList.innerHTML = '<h3>Customer Summary:</h3>';
  customerSummary.forEach(summary => {
    const listItem = document.createElement('li');
    listItem.innerText = `${summary.name}: $${summary.totalSpent.toFixed(2)}`;
    customerSummaryList.appendChild(listItem);
  });
  document.body.appendChild(customerSummaryList);
  