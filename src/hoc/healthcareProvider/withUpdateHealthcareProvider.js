import * as healthcareProviderQuery from "typedefs/healthcareProvider.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: healthcareProviderQuery.updateHealthcareProvider,
    mutationName: "updateHealthcareProvider",
    defaultPropName: "updateHealthcareProvider"
  });
};
