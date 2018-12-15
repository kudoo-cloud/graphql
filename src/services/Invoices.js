import graphqlRequest from "./Request";
import * as InvoiceQuery from "typedefs/invoice.gql";

class Invoices {
  static async get(id) {
    return graphqlRequest.getNode(InvoiceQuery.invoice, id);
  }
}

export default Invoices;
