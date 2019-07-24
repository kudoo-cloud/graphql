import { updateProject } from 'typedefs/project.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateProject,
    mutationName: 'updateProject',
    defaultPropName: 'updateProject',
  });
};
