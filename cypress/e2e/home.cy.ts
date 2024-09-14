describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context("Seção 1", () => {
    it('the h1 contains the correct text', () => {
     
      cy.get("h1").contains("Testing Next.js Applications with Cypress")
    })
  
    //it.only -> run only this test
    it('the feature in the home page are correct', () => {
  
      cy.get('dt').eq(0).contains("4 Courses")
    })
  })

  context("Seção de cursos", () => {
    it.only('Curso: Testing Your First Next.js Application', () => {
      cy.get('[data-test="course-0"]').should('be.visible').contains('Get started').click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })

    it.only('Curso: Testing Foundations', () => {
      cy.get('[data-test="course-1"]').should('be.visible').contains('Get started').click()
      cy.location('pathname').should('eq', '/testing-foundations')
    })

    it.only('Curso: Cypress Fundamentals', () => {
      cy.get('[data-test="course-2"]').should('be.visible').contains('Get started').click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
    })
  })
 
})