import { updatePBSOrganisation } from 'typedefs/pbsOrganisation.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePBSOrganisation,
    mutationName: 'updatePBSOrganisation',
    defaultPropName: 'updatePBSOrganisation',
  });
};
