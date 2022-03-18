import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import reportsService from "../services/reportsService";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  let response;

  try {
    const customerId = req.params.customerId;
    const iban = req.body.iban;
    const month = req.body.month;
    let reports = await reportsService.getReport(customerId, iban, month);
    response = { body: reports, status: 200 };
  } catch (err) {
    response = { body: err.message, status: 500 };
  }

  context.res = response;
};

export default httpTrigger;