import * as ledgerPostingQuery from "typedefs/ledgerPosting.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "ledgerPostings",
    query: ledgerPostingQuery.ledgerPostings,
    queryName: "ledgerPostings"
  });
};
