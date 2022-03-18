import { CosmosClient } from "@azure/cosmos";

// Set connection string from CONNECTION_STRING value in local.settings.json
const CONNECTION_STRING = process.env.CONNECTION_STRING;

const transactionsService = {
  init() {
    try {
      this.client = new CosmosClient(CONNECTION_STRING);
      this.database = this.client.database("Bank98");
      this.container = this.database.container("Transactions");
    } catch (err) {
      console.log(err.message);
    }
  },
  async create(transactionToCreate) {
    const { resource } = await this.container.items.create(transactionToCreate);
    return resource;
  },
  async read(): Promise<string> {
    const iterator = this.container.items.readAll();
    const { resources } = await iterator.fetchAll();
    return JSON.stringify(resources);
  },
  async update(transaction) {
    const { resource } = await this.container.item(
      transaction.id,
    )
      .replace(transaction);
    return resource;
  },
  async delete(id) {
    const result = await this.container.item(id).delete();
  },
};

transactionsService.init();

export default transactionsService;
