import * as pbsTPPQuery from "typedefs/pbsTPP.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "pbsTPP",
    query: pbsTPPQuery.pbsTPP,
    defaultPropName: "pbsTPP"
  });
};
