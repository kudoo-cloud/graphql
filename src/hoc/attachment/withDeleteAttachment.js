import { deleteAttachment } from 'typedefs/attachment.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteAttachment,
    mutationName: 'deleteAttachment',
    defaultPropName: 'deleteAttachment',
  });
};
