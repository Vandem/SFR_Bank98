import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import customersService from "../services/customersService";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  let response;

  try {
    let customers = await customersService.read();
    response = { body: customers, status: 200 };
  } catch (err) {
    response = { body: err.message, status: 500 };
  }

  context.res = response;
};

export default httpTrigger;