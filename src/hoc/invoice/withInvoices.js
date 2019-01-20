import * as InvoiceQuery from "typedefs/invoice.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "invoices",
    query: InvoiceQuery.invoices,
    queryName: "invoices"
  });
};
