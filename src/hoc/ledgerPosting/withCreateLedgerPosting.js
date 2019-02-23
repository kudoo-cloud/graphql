import * as ledgerPostingQuery from "typedefs/ledgerPosting.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: ledgerPostingQuery.createLedgerPosting,
    mutationName: "createLedgerPosting",
    defaultPropName: "createLedgerPosting"
  });
};