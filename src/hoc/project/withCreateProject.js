import { createProject } from 'typedefs/project.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createProject,
    mutationName: 'createProject',
    defaultPropName: 'createProject',
  });
};
