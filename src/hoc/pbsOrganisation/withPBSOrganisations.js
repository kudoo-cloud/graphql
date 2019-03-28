import * as pbsOrganisationQuery from "typedefs/pbsOrganisation.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "pbsOrganisations",
    query: pbsOrganisationQuery.pbsOrganisations,
    queryName: "pbsOrganisations"
  });
};
