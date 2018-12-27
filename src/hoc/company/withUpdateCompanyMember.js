import * as companyMembersQuery from "typedefs/companyUsers.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: companyMembersQuery.updateCompanyMember,
    mutationName: "updateCompanyMember",
    defaultPropName: "updateCompanyMember"
  });
};
