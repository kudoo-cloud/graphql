import graphqlRequest from ".";
import * as InvoiceQuery from "shared/graphql/typedefs/invoice.gql";

class Invoices {
  static async get(id) {
    return graphqlRequest.getNode(InvoiceQuery.invoice, id);
  }
}

export default Invoices;
