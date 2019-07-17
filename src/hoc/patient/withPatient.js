import * as patientQuery from "typedefs/patient.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "patient",
    query: patientQuery.patient,
    defaultPropName: "patient"
  });
};
