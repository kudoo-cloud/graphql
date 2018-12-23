import * as companyQuery from "typedefs/company.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "company",
    query: companyQuery.company,
    defaultPropName: "company"
  });
};
