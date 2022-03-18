import { CosmosClient } from "@azure/cosmos";

const CONNECTION_STRING = process.env.CONNECTION_STRING;

const reportsService = {
    init() {
      try {
        this.client = new CosmosClient(CONNECTION_STRING);
        this.database = this.client.database("Bank98");
        this.customers = this.database.container("Customers");
        this.transactions = this.database.container("Transactions");
      } catch (err) {
        console.log(err.message);
      }
    },
    async getReport(customerId, iban, month) {
        // get customer by iban
        const { resource, statusCode } = await this.customers.item(customerId, iban).read();
        const customer = resource;
        // get all transactions TODO: by month
        // unfortunately I didn't find a way to query for a specific month.
        // I know this can be done easily with LINQ in C# but googling a similar approach for typescript didn't yield a result
        const iterator = await this.transactions.items.readAll();
        const { resources } = await iterator.fetchAll();
        return JSON.stringify(resources).concat(JSON.stringify(customer));
    },
    async read(): Promise<string> {
      const iterator = this.container.items.readAll();
      const { resources } = await iterator.fetchAll();
      return JSON.stringify(resources);
    },
    async update(report) {
      const { resource } = await this.container.item(
        report.id,
      )
        .replace(report);
      return resource;
    },
    async delete(id) {
      const result = await this.container.item(id).delete();
    },
  };
  

reportsService.init();

export default reportsService;