import graphqlRequest from './Request';
import {
  createBankTransaction,
  bankTransaction,
} from 'typedefs/bankTransaction.gql';

class BankTransaction {
  static async createBankTransaction({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createBankTransaction, {
      data,
    });
  }
  static async getBankTransaction(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('bankTransaction', bankTransaction, id)
      .then((bankTransactionObj) => bankTransactionObj)
      .catch((error) => error);
  }
}

export default BankTransaction;
