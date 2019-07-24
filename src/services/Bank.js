import graphqlRequest from './Request';
import { createBank, bank } from 'typedefs/bank.gql';

class Bank {
  static async createBank({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createBank, {
      data,
    });
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(bank, {
      where,
    });
  }
}

export default Bank;
