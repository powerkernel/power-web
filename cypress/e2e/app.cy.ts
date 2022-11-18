describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // The new page should contain an p tag with "About page"
    cy.get("p").contains("Providing IT solutions");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
