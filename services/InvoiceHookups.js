import graphqlRequest from "./index";
import * as InvoiceHookupQuery from "shared/graphql/typedefs/invoiceHookup.gql";

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
