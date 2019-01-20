import * as companyQuery from "typedefs/company.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: companyQuery.invite,
    mutationName: "invite",
    defaultPropName: "invite"
  });
};
