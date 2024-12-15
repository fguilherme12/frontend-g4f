describe("Gestão de Notícias", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/news").as("createNews");
    cy.intercept("GET", "**/news").as("listNews");
    cy.intercept("DELETE", "**/news/**").as("deleteNews");
    cy.intercept("PUT", "**/news/**").as("updateNews");

    cy.visit("http://localhost:5173/news");
  });

  context("Dado que o usuário acessa a página de notícias", () => {
    it("Então deve exibir a lista de notícias", () => {
      cy.contains("Lista de Notícias");
      cy.wait("@listNews");
      cy.get("ul").should("exist");
    });
  });

  context("Dado que o usuário deseja criar uma nova notícia", () => {
    it("Quando ele preenche o formulário corretamente, então deve adicionar a notícia à lista", () => {
      cy.contains("button", "Criar Nova Notícia").click();
      cy.get('input[name="title"]').type("Notícia Teste");
      cy.get('input[name="description"]').type("Descrição da notícia de teste");
      cy.get('[data-cy="submit-news"]').click();

      cy.wait("@createNews");
      cy.contains("Notícia Teste").should("exist");
    });
  });

  context("Dado que o usuário deseja editar uma notícia existente", () => {
    it("Quando ele altera os campos e salva, então as alterações devem ser exibidas", () => {
      cy.get('[data-cy="edit-news"]').first().click();
      cy.get('input[name="title"]').clear().type("Notícia Atualizada");
      cy.get('input[name="description"]').clear().type("Descrição atualizada");
      cy.get('[data-cy="submit-news"]').click();

      cy.wait("@updateNews");
      cy.contains("Notícia Atualizada").should("exist");
    });
  });

  context("Dado que o usuário deseja excluir uma notícia", () => {
    it("Quando ele confirma a exclusão, então a notícia não deve mais aparecer na lista", () => {
      cy.get('[data-cy="delete-news"]').first().click();
      cy.wait("@deleteNews");

      cy.contains("Notícia Teste").should("not.exist");
    });
  });
});
