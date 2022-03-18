import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import transactionsService from "../services/transactionsService";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  let response;

  try {
    const transaction = req.body;
    const result = await transactionsService.create(transaction);
    response = { body: result, status: 200 };
  } catch (err) {
    response = { body: err.message, status: 500 };
  }

  context.res = response;
};

export default httpTrigger;
