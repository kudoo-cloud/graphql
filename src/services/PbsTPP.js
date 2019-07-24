import graphqlRequest from './Request';
import {
  createPbsTPP as createQuery,
  pbsTPP,
  pbsTpps,
} from 'typedefs/pbsTPP.gql';

class PbsTPP {
  static async createPbsTPP({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(createQuery, {
      data,
    });
  }

  static async getPbsTPP(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode('Pbs TPP', pbsTPP, id)
      .then((pbsTPPObj) => pbsTPPObj)
      .catch((error) => error);
  }

  static async getAllPbsTPP({
    where,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  } = {}) {
    return await graphqlRequest.getAll('pbsTPPs', pbsTpps, {
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

export default PbsTPP;
