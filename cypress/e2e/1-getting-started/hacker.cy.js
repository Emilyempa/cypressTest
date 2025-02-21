/// <reference types="cypress" />

describe("e2e test", () => {
  it("will check if webpage is running and verifies h1 and hero content", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hacker Escape Rooms");
    cy.get(".bannerTop").should("be.visible");
  });

  it("will klick on link About us and Play online check url and content on both", () => {
    cy.visit("/");
    cy.contains("About us").click({ force: true });
    cy.url().should("include", "/aboutus.html");
    cy.get("h1").should("contain.text", "About us");
    cy.get("h3").should("contain.text", "Our history");
    cy.contains("Play online").click({ force: true });
    cy.url().should("include", "/challenges.html");
    cy.get("h1").should("contain.text", "Play online/Play on-site");
  });

  it("will test filter and filter content", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.get("p").should("contain.text", "By tags");
    cy.get("p").should("contain.text", "Sort challenges");
    cy.wait(1000);
    cy.get("#onlineSortBtn").click();
    cy.get(".bookBtn").should("contain.text", "Take challenge online");
  });

  it("will test search bar in filter", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.wait(1000);
    cy.get("#userInput").click().type("Hacker");
    cy.get("p").should("contain.text", "Hackers of the world, unite");
  });

  it("will test search bar in filter when search fails", () => {
    cy.visit("/challenges.html");
    cy.contains("Filter challenges").click();
    cy.wait(1000);
    cy.get("#userInput").click().type("ööö");
    cy.get("h2").should("contain.text", "No matching challenges.");
  });
});
