import graphqlRequest from "./Request";
import * as PBSOrganisationQuery from "typedefs/pbsOrganisation.gql";

class PBSOrganisation {
  static async createPBSOrganisation({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return graphqlRequest.call(
      PBSOrganisationQuery.createPbsOrganisation,
      {
        data
      }
    );
  }
  static async getPBSOrganisation(id, userToken, companyToken) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    return await graphqlRequest
      .getNode("Organisation", PBSOrganisationQuery.pbsOrganisation, id)
      .then(pbsOrganisationObj => pbsOrganisationObj)
      .catch(error => error);
	}
	
	static async getAllPbsOrganisations({
    where,
    orderBy,
    skip,
    after,
    before,
    first,
    last
  } = {}) {
    return await graphqlRequest.getAll("pbsOrganisations", PBSOrganisationQuery.pbsOrganisations, {
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

export default PBSOrganisation;
