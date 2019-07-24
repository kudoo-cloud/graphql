import { project } from 'typedefs/project.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'project',
    query: project,
    defaultPropName: 'project',
  });
};
