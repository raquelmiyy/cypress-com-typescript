describe('Jornada do usuário', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('O usuário escolhe um curso na página inicial e completa as lições', () => {
        cy.get('[data-test="course-0"]').should('be.visible').contains('Get started').click()
        cy.location('pathname').should('eq', '/testing-your-first-application')
        cy.get('[data-test="next-lesson-button"]').should('be.visible').contains('Start Course').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview')
        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get('[data-test="next-lesson-button"] > .mx-auto').should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')
        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get('[data-test="next-lesson-button"]').should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/setting-up-data-before-each-test')
        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get('[data-test="next-lesson-button"] > .mx-auto').should('exist').click()
        cy.location("pathname").should("equal", "/")


    })

})