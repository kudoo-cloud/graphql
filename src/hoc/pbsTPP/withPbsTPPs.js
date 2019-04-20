import * as pbsTPPQuery from "typedefs/pbsTPP.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "pbsTPPs",
    query: pbsTPPQuery.pbsTpps,
    queryName: "pbsTPPs"
  });
};
