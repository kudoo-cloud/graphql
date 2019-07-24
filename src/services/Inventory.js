import graphqlRequest from './Request';
import { inventory, createInventory } from 'typedefs/inventory.gql';

class Inventory {
  static async createInventory({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createInventory, {
      data,
    });
  }
  static async getInventory(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('inventory', inventory, id)
      .then((inventoryObj) => inventoryObj)
      .catch((error) => error);
  }
}

export default Inventory;
