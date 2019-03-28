import * as pbsOrganisationQuery from "typedefs/pbsOrganisation.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: pbsOrganisationQuery.updatePBSOrganisation,
    mutationName: "updatePBSOrganisation",
    defaultPropName: "updatePBSOrganisation"
  });
};
