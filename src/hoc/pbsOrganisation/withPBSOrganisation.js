import * as pbsOrganisationQuery from "typedefs/pbsOrganisation.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "pbsOrganisation",
    query: pbsOrganisationQuery.pbsOrganisation,
    defaultPropName: "pbsOrganisation"
  });
};
