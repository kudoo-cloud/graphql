import graphqlRequest from "./Request";
import * as MainAccountQuery from "typedefs/mainAccount.gql";

class MainAccount {
  static async createMainAccount({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      MainAccountQuery.createMainAccount,
      {
        data
      }
    );
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      MainAccountQuery.mainAccount,
      {
        where
      }
    );
  }
}

export default MainAccount;
