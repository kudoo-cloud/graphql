import * as InvoiceQuery from "typedefs/invoice.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "invoice",
    query: InvoiceQuery.invoice,
    defaultPropName: "invoice"
  });
};
