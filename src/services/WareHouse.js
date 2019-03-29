import graphqlRequest from "./Request";
import * as WareHouseQuery from "typedefs/wareHouse.gql";

class WareHouse {
  static async createWareHouse({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      WareHouseQuery.createWareHouse,
      {
        data
      }
    );
  }
  static async getWareHouse(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("WareHouse", WareHouseQuery.wareHouse, id)
      .then(wareHouseObj => wareHouseObj)
      .catch(error => error);
  }
}

export default WareHouse;
