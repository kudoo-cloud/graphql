import graphqlRequest from "./Request";
import * as InvoiceQuery from "typedefs/invoice.gql";

class Invoices {
  static async get(id) {
    return graphqlRequest.getNode("invoice", InvoiceQuery.invoice, id);
  }
}

export default Invoices;
