import * as projectQuery from "typedefs/project.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: projectQuery.createProject,
    mutationName: "createProject",
    defaultPropName: "createProject"
  });
};
