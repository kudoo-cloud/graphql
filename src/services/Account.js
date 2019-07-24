import graphqlRequest from './Request';
import { me } from 'typedefs/account.gql';

class Account {
  static async me() {
    return graphqlRequest.call(me);
  }
}

export default Account;
