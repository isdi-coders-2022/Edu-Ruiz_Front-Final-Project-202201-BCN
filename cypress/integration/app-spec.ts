// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("renders the app should find h2 with login", function () {
    cy.get("h1").should("contain", "Login");
  });

  it("should find the 1st input and type eya", function () {
    cy.get("input").first().type("eya").should("have.value", "eya");
    cy.get("input").last().type("1234").should("have.value", "1234");
    cy.get("button").click();
  });
});

export {};
