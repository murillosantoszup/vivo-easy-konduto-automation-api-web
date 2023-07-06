const authorizationDev = Cypress.env("accesApplicationDev");
const BASE_URL_DEV = Cypress.env("baseURLDev");
const payload500 = require("../payloads/500.json");
const payload401 = require("../payloads/401.json");
const payload400 = require("../payloads/400.json");
const payloadApproved = require("../payloads/approved.json");
const payloadDeclined = require("../payloads/declined.json");
const payloadPending = require("../payloads/pending.json");
/// <reference types="cypress"/>

function postErro500() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        failOnStatusCode: false,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payload500,
      })
      .as("response");
  }
  
  export { postErro500 };

  function postErro400() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        failOnStatusCode: false,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payload400,
      })
      .as("response");
  }
  
  export { postErro400 };

  function postErro401() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        failOnStatusCode: false,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payload401,
      })
      .as("response");
  }
  
  export { postErro401 };

  function postAprroved() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payloadApproved,
      })
      .as("response");
  }
  
  export { postAprroved };

  function postDeclined() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payloadDeclined,
      })
      .as("response");
  }
  
  export { postDeclined };

  function postPending() {
    return cy
      .request({
        method: "POST",
        url: `${BASE_URL_DEV}/konduto`,
        headers: {
          'x-application-key' : authorizationDev,
          accept: "application/json",
        },
        //failOnStatusCode: false,
        body: payloadPending,
      })
      .as("response");
  }
  
  export { postPending };