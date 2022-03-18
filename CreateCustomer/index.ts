import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import customersService from "../services/customersService";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  let response;

  try {
    const customer = req.body;
    const result = await customersService.create(customer);
    response = { body: result, status: 200 };
  } catch (err) {
    response = { body: err.message, status: 500 };
  }

  context.res = response;
};

export default httpTrigger;
