import { CosmosClient } from "@azure/cosmos";

const CONNECTION_STRING = process.env.CONNECTION_STRING;

const customersService = {
  init() {
    try {
      this.client = new CosmosClient(CONNECTION_STRING);
      this.database = this.client.database("Bank98");
      this.container = this.database.container("Customers");
    } catch (err) {
      console.log(err.message);
    }
  },
  async create(customerToCreate) {
    const { resource } = await this.container.items.create(customerToCreate);
    return resource;
  },
  async read(): Promise<string> {
    const iterator = this.container.items.readAll();
    const { resources } = await iterator.fetchAll();
    return JSON.stringify(resources);
  },
  async update(customer) {
    const { resource } = await this.container.item(
      customer.id,
      customer.iban,
    )
      .replace(customer);
    return resource;
  },
  async delete(id, iban) {
    const result = await this.container.item(id, iban).delete();
  },
};

customersService.init();

export default customersService;
