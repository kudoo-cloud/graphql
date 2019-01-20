import * as projectQuery from "typedefs/project.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: projectQuery.updateProject,
    mutationName: "updateProject",
    defaultPropName: "updateProject"
  });
};
