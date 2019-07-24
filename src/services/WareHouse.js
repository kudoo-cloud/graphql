import graphqlRequest from './Request';
import { createWareHouse, wareHouse } from 'typedefs/wareHouse.gql';

class WareHouse {
  static async createWareHouse({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createWareHouse, {
      data,
    });
  }
  static async getWareHouse(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('WareHouse', wareHouse, id)
      .then((wareHouseObj) => wareHouseObj)
      .catch((error) => error);
  }
}

export default WareHouse;
