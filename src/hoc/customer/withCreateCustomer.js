/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import get from "lodash/get";
import { graphqlResponse } from "helpers";
import * as gqlQuery from "typedefs/customer.gql";
import * as traderQuery from "typedefs/trader.gql";

export default (WrappedComponent: any) => {
  let withCreateCustomer = (props: any) => {
    const prepareTraderData = ({
      contact_name,
      contact_surname,
      email,
      address,
      primaryContact,
      mobile,
      landline
    }) => {
      let numbers = [];
      if (mobile) {
        numbers.push(mobile);
      }
      if (landline) {
        numbers.push(landline);
      }
      const dataToSubmit = {
        addresses: [
          {
            countryCode: "AU",
            data: [
              get(address, "street", ""),
              get(address, "city", ""),
              get(address, "state", ""),
              get(address, "country", ""),
              get(address, "postcode", "")
            ],
            isDefault: primaryContact || false,
            isDefaultBilling: true,
            isDefaultShipping: true
          }
        ],
        contacts: [
          {
            emails: [{ value: email || "" }],
            isDefault: primaryContact || false,
            names: [contact_name || ""],
            numbers,
            surname: contact_surname || ""
          }
        ]
      };
      return dataToSubmit;
    };

    const createCustomer = async ({ companyId, name, govNumber, ...rest }) => {
      const res = await props.createCustomer({
        companyId,
        name,
        govNumber
      });

      let parsedRes = graphqlResponse.handleMutationResponse(
        res,
        "createCustomer"
      );
      if (parsedRes.success) {
        if (rest) {
          let traderData = prepareTraderData(rest);
          const traderRes = await props.updateTrader(
            traderData,
            get(parsedRes, "result.traderId", "")
          );
          let parsedTrader = graphqlResponse.handleMutationResponse(
            traderRes,
            "updateTrader"
          );
          if (parsedTrader.success) {
            return { error: null, success: true, result: parsedRes.result };
          }
          return {
            error: get(parsedTrader, "error", []),
            success: false,
            result: parsedRes.result
          };
        }
        return { error: null, success: true, result: parsedRes.result };
      }
      return {
        error: get(parsedRes, "error", []),
        success: false,
        result: parsedRes.result
      };
    };

    return <WrappedComponent {...props} createCustomer={createCustomer} />;
  };

  withCreateCustomer.propTypes = {
    createCustomer: PropTypes.func,
    updateTrader: PropTypes.func
  };

  return compose(
    graphql(gqlQuery.createCustomer, {
      props: ({ mutate }) => ({
        createCustomer: params => mutate({ variables: params })
      })
    }),
    graphql(traderQuery.updateTrader, {
      props: ({ mutate }) => ({
        updateTrader: (data, traderId) =>
          mutate({ variables: { data, id: traderId } })
      })
    })
  )(withCreateCustomer);
};
