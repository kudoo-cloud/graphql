import { projects } from 'typedefs/project.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'projects',
    query: projects,
    queryName: 'projects',
  });
};
