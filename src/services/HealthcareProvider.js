import graphqlRequest from './Request';
import {
  createHealthcareProvider,
  healthcareProvider,
} from 'typedefs/healthcareProvider.gql';

class HealthcareProvider {
  static async createHealthcareProvider({
    data,
    userToken,
    companyToken,
  } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createHealthcareProvider, {
      data,
    });
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(healthcareProvider, {
      where,
    });
  }
}

export default HealthcareProvider;
