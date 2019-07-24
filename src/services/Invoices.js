import graphqlRequest from './Request';
import { invoice, invoices as InvoicesQuery } from 'typedefs/invoice.gql';

class Invoices {
  static async get(id) {
    return graphqlRequest.getNode('invoice', invoice, id);
  }

  static async getInvoices({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let invoices = await graphqlRequest.getAll('invoices', InvoicesQuery, {
      where,
    });
    return invoices;
  }
}

export default Invoices;
