import graphqlRequest from "./Request";
import * as PbsTPPQuery from "typedefs/pbsTPP.gql";

class PbsTPP {
  static async createPbsTPP({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(PbsTPPQuery.createPbsTPP, {
      data
    });
  }

  static async getPbsTPP(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("Pbs TPP", PbsTPPQuery.pbsTPP, id)
      .then(pbsTPPObj => pbsTPPObj)
      .catch(error => error);
  }

  static async getAllPbsTPP({
    where,
    orderBy,
    skip,
    after,
    before,
    first,
    last
  } = {}) {
    return await graphqlRequest.getAll("pbsTPPs", PbsTPPQuery.pbsTpps, {
      where,
      orderBy,
      skip,
      after,
      before,
      first,
      last
    });
  }
}

export default PbsTPP;
