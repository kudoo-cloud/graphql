import * as serviceQuery from "typedefs/service.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "services",
    query: serviceQuery.services,
    queryName: "services"
  });
};
