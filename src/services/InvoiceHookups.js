import graphqlRequest from "./Request";
import * as InvoiceHookupQuery from "typedefs/invoiceHookup.gql";

class InvoiceHookups {
  static async getAll({ where } = {}) {
    return graphqlRequest.getAll(
      "invoiceHookups",
      InvoiceHookupQuery.invoiceHookups,
      {
        where
      }
    );
  }
}

export default InvoiceHookups;
