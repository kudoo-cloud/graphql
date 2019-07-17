import graphqlRequest from "./Request";
import * as BankQuery from "typedefs/bank.gql";

class Bank {
  static async createBank({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      BankQuery.createBank,
      {
        data
      }
    );
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      BankQuery.bank,
      {
        where
      }
    );
  }
}

export default Bank;
