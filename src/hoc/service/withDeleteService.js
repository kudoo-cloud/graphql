import { deleteService } from 'typedefs/service.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteService,
    mutationName: 'deleteService',
    defaultPropName: 'deleteService',
  });
};
