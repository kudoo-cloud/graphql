import graphqlRequest from "./Request";
import * as LedgerPostingQuery from "typedefs/ledgerPosting.gql";
import * as MainAccountQuery from "typedefs/mainAccount.gql";

class LedgerPosting {
  static async createLedgerPosting({ data, userToken, companyToken } = {}) {
    graphqlRequest.userToken = userToken;
    graphqlRequest.companyToken = companyToken;
    let mainAccountObj = await graphqlRequest.getAll("mainAccounts",MainAccountQuery.mainAccounts,{
      where: {
        code: data.mainAccount,
        company: {
          id: companyToken
        }
      }
    });
    if(mainAccountObj.nodes[0] !== undefined){
      let modifiedData = {
        ...data,
        mainAccount : {
          connect: {
            id: mainAccountObj.nodes[0].id
          }
        }
      };
      graphqlRequest.userToken = userToken;
      graphqlRequest.companyToken = companyToken;
      return await graphqlRequest.call(
        LedgerPostingQuery.createLedgerPosting,
        {
          data : modifiedData
        }
      )
    }

  }

}

export default LedgerPosting;
