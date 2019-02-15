import graphqlRequest from "./Request";
import * as LedgerTransactionQuery from "typedefs/ledgerTransaction.gql";

class LedgerTransaction {
  static async getLedgerTransaction(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("ledgerTransaction", LedgerTransactionQuery.ledgerTransaction, id)
      .then(ledgerTransactionObj => ledgerTransactionObj)
      .catch(error => error);
  }
}

export default LedgerTransaction;
