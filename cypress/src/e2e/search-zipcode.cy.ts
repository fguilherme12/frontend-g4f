describe("Busca de CEP", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/cep/**").as("searchZipcode");
    cy.visit("http://localhost:5173/search-zipcode");
  });

  context("Dado que o usuário acessa a página de busca de CEP", () => {
    it("Quando ele insere um CEP válido, então deve exibir o endereço correspondente", () => {
      cy.get('input[name="zipCode"]').type("72308316");
      cy.get('[data-cy="submit-zipcode"]').click();

      cy.wait("@searchZipcode");

      cy.contains("Endereço:");
    });

    it("Quando ele insere um CEP inválido, então deve exibir uma mensagem de erro", () => {
      cy.get('input[name="zipCode"]').type("00000000");
      cy.get('[data-cy="submit-zipcode"]').click();

      cy.wait("@searchZipcode");

      cy.contains("Endereço não encontrado para o CEP informado.")
    });

    it("Quando ele insere um CEP com menos de oito digitos, então deve exibir uma mensagem de erro", () => {
        cy.get('input[name="zipCode"]').type("00000");
        cy.get('[data-cy="submit-zipcode"]').click();
  
        cy.wait("@searchZipcode");
  
        cy.contains("CEP em formato inválido. Deve ter 8 dígitos");
      });

    it("Quando ele não preenche o campo e tenta buscar, então deve alertar para inserir um CEP válido", () => {
      cy.get('[data-cy="submit-zipcode"]').click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Por favor, insira um CEP válido.");
      });
    });

  });
});
