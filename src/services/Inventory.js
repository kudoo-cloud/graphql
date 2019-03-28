import graphqlRequest from "./Request";
import * as InventoryQuery from "typedefs/inventory.gql";

class Inventory {
  static async createInventory({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      InventoryQuery.createInventory,
      {
        data
      }
    );
  }
  static async getInventory(id, userToken, companyToken) {
    console.log("id", id);
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("inventory", InventoryQuery.inventory, id)
      .then(inventoryObj => inventoryObj)
      .catch(error => error);
  }
}

export default Inventory;
