describe("Newsletter Cadatro", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    
    it("Permitir o usuário cadastrar um email na lista", () => {
        cy.get('[data-test="email-input"]').type("rasousa555@gmail.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]')
        .contains("Success: rasousa555@gmail.com has been successfully subscribed")

    })

    it("Não permitir o usuário cadastrar um email inválido", () => {
        cy.get('[data-test="email-input"]').type("rasousa555gmail.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="success-message"]').should("not.exist")
    })

    it("Não permitir o usuário cadastrar um email que já esta cadastrado", () => {
        cy.get('[data-test="email-input"]').type("john@example.com")
        cy.get('[data-test="submit-button"]').click()
        cy.get('[data-test="server-error-message"]')
        .should("exist")
        .contains("Error: john@example.com already exists. Please use a different email address.")
    })


})