import { updateService } from 'typedefs/service.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateService,
    mutationName: 'updateService',
    defaultPropName: 'updateService',
  });
};
