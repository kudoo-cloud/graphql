import graphqlRequest from './Request';
import {
  createPBSOrganisation as createQuery,
  pbsOrganisation,
  pbsOrganisations,
} from 'typedefs/pbsOrganisation.gql';

class PBSOrganisation {
  static async createPBSOrganisation({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createQuery, {
      data,
    });
  }
  static async getPBSOrganisation(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('Organisation', pbsOrganisation, id)
      .then((pbsOrganisationObj) => pbsOrganisationObj)
      .catch((error) => error);
  }

  static async getAllPbsOrganisations({
    where,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  } = {}) {
    return await graphqlRequest.getAll('pbsOrganisations', pbsOrganisations, {
      where,
      orderBy,
      skip,
      after,
      before,
      first,
      last,
    });
  }
}

export default PBSOrganisation;
