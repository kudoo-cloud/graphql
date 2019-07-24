import { deleteProject } from 'typedefs/project.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteProject,
    mutationName: 'deleteProject',
    defaultPropName: 'deleteProject',
  });
};
