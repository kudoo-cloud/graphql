import * as healthcareProviderQuery from "typedefs/healthcareProvider.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "healthcareProvider",
    query: healthcareProviderQuery.healthcareProvider,
    defaultPropName: "healthcareProvider"
  });
};
