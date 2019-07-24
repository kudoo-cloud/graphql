import graphqlRequest from './Request';
import { createMainAccount, mainAccount } from 'typedefs/mainAccount.gql';

class MainAccount {
  static async createMainAccount({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createMainAccount, {
      data,
    });
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(mainAccount, {
      where,
    });
  }
}

export default MainAccount;
