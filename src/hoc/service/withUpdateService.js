import * as serviceQuery from "typedefs/service.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: serviceQuery.updateService,
    mutationName: "updateService",
    defaultPropName: "updateService"
  });
};
