/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("will get the global window object", () => {
    cy.window().should("have.property", "top");
    cy.window().should("have.property", "location");
    cy.window().should("have.property", "navigator");
  });

  it("will get the HTML document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("will get the title", () => {
    cy.title().should("include", "Hacker Escape Rooms");
  });
  it("will check if footer is present", () => {
    cy.get("footer").should("exist");
  });
});
