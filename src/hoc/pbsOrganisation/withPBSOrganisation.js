import { pbsOrganisation } from 'typedefs/pbsOrganisation.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'pbsOrganisation',
    query: pbsOrganisation,
    defaultPropName: 'pbsOrganisation',
  });
};
