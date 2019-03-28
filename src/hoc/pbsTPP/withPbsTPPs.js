import * as pbsTPPQuery from "typedefs/pbsOrganisation.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "pbsTPPs",
    query: pbsTPPQuery.pbsTPPs,
    queryName: "pbsTPPs"
  });
};
