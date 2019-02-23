import graphqlRequest from "./Request";
import * as CompanyQuery from "typedefs/company.gql";

class Company {
  static async getCompany(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("company", CompanyQuery.company, id)
      .then(companyObj => companyObj)
      .catch(error => {});
  }
}

export default Company;
