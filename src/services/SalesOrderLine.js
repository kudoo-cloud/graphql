import graphqlRequest from "./Request";
import * as SalesOrderLineQuery from "typedefs/salesOrderLine.gql";

class SalesOrderLine {
  static async createSalesOrderLine({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      SalesOrderLineQuery.createSalesOrderLine,
      {
        data
      }
    );
  }
  static async getSalesOrderLine(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("SalesOrderLine", SalesOrderLineQuery.salesOrderLine, id)
      .then(salesOrderLineObj => salesOrderLineObj)
      .catch(error => error);
  }
}

export default SalesOrderLine;
