import { deletePBSOrganisation } from 'typedefs/pbsOrganisation.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePBSOrganisation,
    mutationName: 'deletePBSOrganisation',
    defaultPropName: 'deletePBSOrganisation',
  });
};
