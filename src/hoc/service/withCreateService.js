import { createService } from 'typedefs/service.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createService,
    mutationName: 'createService',
    defaultPropName: 'createService',
  });
};
