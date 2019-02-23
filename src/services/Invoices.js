import graphqlRequest from "./Request";
import * as InvoiceQuery from "typedefs/invoice.gql";

class Invoices {
  static async get(id) {
    return graphqlRequest.getNode("invoice", InvoiceQuery.invoice, id);
  }

  static async getInvoices({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let invoices = await graphqlRequest.getAll("invoices",InvoiceQuery.invoices,{
      where
    });
    return invoices;
  }
}

export default Invoices;
