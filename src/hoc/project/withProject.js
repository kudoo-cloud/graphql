import * as projectQuery from 'typedefs/project.gql';
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "project",
    query: projectQuery.project,
    defaultPropName: "project"
  });
};
