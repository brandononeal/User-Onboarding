/* eslint-disable no-undef */
describe("User Onboarding Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const nameInput = () => cy.get(":nth-child(1) > input");
  const emailInput = () => cy.get(":nth-child(2) > input");
  const passwordInput = () => cy.get(":nth-child(3) > input");
  const tosCheckbox = () => cy.get(":nth-child(4) > input");
  const submitBtn = () => cy.get("button");
  const nameValidation = () => cy.get(".errors-container > :nth-child(1)");
  const emailValidation = () => cy.get(".errors-container > :nth-child(2)");
  const passwordValidation = () => cy.get(".errors-container > :nth-child(3)");
  const tosValidation = () => cy.get(".errors-container > :nth-child(4)");

  it("Name check", () => {
    nameInput().type("Brandon").should("have.value", "Brandon");
  });

  it("Email check", () => {
    emailInput()
      .type("baoneal95@gmail.com")
      .should("have.value", "baoneal95@gmail.com");
  });

  it("Password check", () => {
    passwordInput().type("password").should("have.value", "password");
  });

  it("Terms of Service check", () => {
    tosCheckbox().should("not.be.checked");
    tosCheckbox().click().should("be.checked");
  });

  it("User can submit form data", () => {
    nameInput().type("Brandon");
    emailInput().type("baoneal95@gmail.com");
    passwordInput().type("password");
    tosCheckbox().click();
    submitBtn().click();
  });

  it("Form validation check", () => {
    nameValidation().should("not.be.visible");
    nameInput().type("Brandon").clear();
    nameValidation().should("be.visible");

    emailValidation().should("not.be.visible");
    emailInput().type("baoneal95@gmail.com").clear();
    emailValidation().should("be.visible");

    passwordValidation().should("not.be.visible");
    passwordInput().type("password").clear();
    passwordValidation().should("be.visible");

    tosValidation().should("not.be.visible");
    tosCheckbox().click().click();
    tosValidation().should("be.visible");
  });
});
