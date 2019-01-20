import * as projectQuery from "typedefs/project.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "projects",
    query: projectQuery.projects,
    queryName: "projects"
  });
};
