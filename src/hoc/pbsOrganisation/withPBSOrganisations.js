import { pbsOrganisations } from 'typedefs/pbsOrganisation.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'pbsOrganisations',
    query: pbsOrganisations,
    queryName: 'pbsOrganisations',
  });
};
