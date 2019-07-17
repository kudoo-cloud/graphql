import graphqlRequest from "./Request";
import * as HealthcareProviderQuery from "typedefs/healthcareProvider.gql";

class HealthcareProvider {
  static async createHealthcareProvider({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      HealthcareProviderQuery.createHealthcareProvider,
      {
        data
      }
    );
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      HealthcareProviderQuery.healthcareProvider,
      {
        where
      }
    );
  }
}

export default HealthcareProvider;
