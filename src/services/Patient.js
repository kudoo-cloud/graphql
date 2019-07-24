import graphqlRequest from './Request';
import { createPatient, patient } from 'typedefs/patient.gql';

class Patient {
  static async createPatient({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createPatient, {
      data,
    });
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(patient, {
      where,
    });
  }
}

export default Patient;
