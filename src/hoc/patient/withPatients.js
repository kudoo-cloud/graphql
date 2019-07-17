import * as patientQuery from "typedefs/patient.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "patients",
    query: patientQuery.patients,
    queryName: "patients"
  });
};
