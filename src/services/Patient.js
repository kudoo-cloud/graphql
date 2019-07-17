import graphqlRequest from "./Request";
import * as PatientQuery from "typedefs/patient.gql";

class Patient {
  static async createPatient({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      PatientQuery.createPatient,
      {
        data
      }
    );
  }
  static async get({ where, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      PatientQuery.patient,
      {
        where
      }
    );
  }
}

export default Patient;
