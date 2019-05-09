import * as apInvoiceQuery from "typedefs/apInvoice.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "apInvoice",
    query: apInvoiceQuery.apInvoice,
    defaultPropName: "apInvoice"
  });
};
