import graphqlRequest from './Request';
import { createLedgerPosting as CreateLedgerPostingQuery } from 'typedefs/ledgerPosting.gql';
import { mainAccounts } from 'typedefs/mainAccount.gql';

class LedgerPosting {
  static async createLedgerPosting({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let mainAccountObj = await graphqlRequest.getAll(
      'mainAccounts',
      mainAccounts,
      {
        where: {
          code: data.mainAccount,
          company: {
            id: companyToken,
          },
        },
      }
    );
    if (mainAccountObj.nodes[0] !== undefined) {
      let modifiedData = {
        ...data,
        mainAccount: {
          connect: {
            id: mainAccountObj.nodes[0].id,
          },
        },
      };
      graphqlRequest.userToken = userToken;
      graphqlRequest.companyToken = companyToken;
      return await graphqlRequest.call(CreateLedgerPostingQuery, {
        data: modifiedData,
      });
    }
  }
}

export default LedgerPosting;
