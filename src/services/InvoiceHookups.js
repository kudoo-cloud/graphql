import graphqlRequest from "./Request";
import * as InvoiceHookupQuery from "typedefs/invoiceHookup.gql";

class InvoiceHookups {
  static async getAll({ filters, orders } = {}) {
    return graphqlRequest.getAll(
      "invoiceHookups",
      InvoiceHookupQuery.invoiceHookups,
      {
        filters,
        orders
      }
    );
  }
}

export default InvoiceHookups;
