import * as healthcareProviderQuery from "typedefs/healthcareProvider.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "healthcareProviders",
    query: healthcareProviderQuery.healthcareProviders,
    queryName: "healthcareProviders"
  });
};
