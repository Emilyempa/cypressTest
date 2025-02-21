/// <reference types="cypress" />


describe("Basic-Home-page test", () => {
   
  it("will check if webpage is running and verifies h1 content", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hacker Escape Rooms");
  });

  it("will klick on link About us and check url and content", () => {
    cy.visit("/");
    cy.contains("About us").click({ force: true });
    cy.url().should("include", "/aboutus.html");
    cy.get("h1").should("contain.text", "About us");
    cy.get("h3").should("contain.text", "Our history");
  });

  it("will test filter", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.get("p").should("contain.text", "By tags");
    cy.wait(1000);
    cy.get("#onlineSortBtn").click();
    cy.get(".bookBtn").should("contain.text", "Take challenge online");
  });
  it("will test search bar", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.wait(1000);
    cy.get("#userInput").click().type("Hacker");
    cy.get("p").should("contain.text", "Hackers of the world, unite");
  });

  it("will test search bar when search fails", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.wait(1000);
    cy.get("#userInput").click().type("ööö");
    cy.get("h2").should("contain.text", "No matching challenges.");
  });
});

