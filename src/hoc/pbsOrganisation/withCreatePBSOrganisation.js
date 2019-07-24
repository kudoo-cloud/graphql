import { createPBSOrganisation } from 'typedefs/pbsOrganisation.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPBSOrganisation,
    mutationName: 'createPBSOrganisation',
    defaultPropName: 'createPBSOrganisation',
  });
};
