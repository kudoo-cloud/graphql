import * as companyQuery from "typedefs/company.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: companyQuery.updateCompany,
    mutationName: "updateCompany",
    defaultPropName: "updateCompany"
  });
};
