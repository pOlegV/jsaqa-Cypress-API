import body from '../fixtures/body'

describe('user api', () => {
  it('creates user', () => {
    cy.createCommand(body.user1)
  })

  it('creates another user', () => {
    cy.createCommand(body.user2)
  })

  it('updates user', () => {
    cy.updateCommand(body.updatedUser1, "username1")
  })

  it('updates not existed user', () => {
    cy.updateCommand(body.notExistedUser, "username3")
  })

  it('deletes user', () => {
    cy.deleteCommand("username1")
  })

  it('deletes not existed user', () => {
    cy.deleteCommand("username3")
  })
})