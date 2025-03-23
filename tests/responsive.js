// Example testing script to verify responsive behavior
describe('Header Component', () => {
  it('should render correctly at 1280px', () => {
    // Set viewport to 1280px
    cy.viewport(1280, 800);
    cy.visit('/');
    // Assert that elements are correctly displayed
  });
  
  it('should render correctly at 768px', () => {
    cy.viewport(768, 1024);
    cy.visit('/');
    // Assert that elements are correctly displayed
  });
  
  it('should render correctly at 425px', () => {
    cy.viewport(425, 800);
    cy.visit('/');
    // Assert that elements are correctly displayed
  });
});