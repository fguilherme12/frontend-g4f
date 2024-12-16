# Projeto G4F - Frontend

## Descrição
Um sistema completo para gerenciar notícias, que combina um frontend desenvolvido em **React** com um backend simulado utilizando **json-server**. Adicionalmente, a aplicação oferece uma funcionalidade de busca de CEPs, implementada por meio de uma integração com a API ViaCEP, que está hospedada em um projeto backend separado. Esta separação de funcionalidades é importante para modularidade e manutenção do sistema.

**Repositório da API Externa para Consulta de CEPs:**
- [Backend G4F (API Externa)](https://github.com/fguilherme12/backend-g4f)

## Estrutura de pastas e arquivos

   - A estrutura do projeto é organizada por módulos, que facilita a manutenção e desenvolvimento da aplicação.
   - Os componentes reutilizaveis são centralizados em uma pasta específica.
   - Pastas como layout (para o layout principal da aplicação) e core (para estilos globais) facilitam a criação, reutilização e organização das partes fundamentais do       projeto.
   - Cada módulo é isolado em sua própria pasta, com subpastas específicas para:
      - components: Componentes exclusivos do módulo.
      - pages: Páginas e rotas específicas do módulo.
      - services: Lógica de negócio e chamadas a APIs.
      - types: Definição de tipos (em TypeScript) usados no módulo.

## Tecnologias Principais
- **React**: Framework para a criação do frontend.
- **json-server**: Simulador de backend para operações CRUD.
- **Docker**: Para containerizar a aplicação.
- **Cypress**: Para testes end-to-end.

---

## Configuração e Execução

### Pré-requisitos
1. **Node.js** instalado (versão 18 ou superior).
2. **NPM** para gerenciar dependências.
3. **Docker** (opcional, caso queira executar via contêiner).

---

### Passos para configurar e rodar localmente

1. Clone este repositório:
   git clone [https://github.com/fguilherme12/backend-g4f](https://github.com/fguilherme12/frontend-g4f.git)
   cd projeto-g4f

2. Instale as dependências:
   npm install

3. Inicie o React e o json-server:
   - Iniciar o frontend:

     npm run dev

   - Iniciar o json-server:

     npx json-server --watch db.json --port 3001


4. Acesse a aplicação em:
   http://localhost:5173

5. O backend mockado estará disponível em:
   http://localhost:3001

---

### Executando a aplicação com Docker

1. **Crie o contêiner Docker**:
   docker build -t g4f-frontend .

2. **Inicie o contêiner**:
   docker run -p 5173:5173 -p 3001:3001 g4f-frontend

3. Acesse a aplicação em:
   http://localhost:5173

4. O backend estará disponível em:
   http://localhost:3001

---

## Testes Automatizados

Este projeto utiliza o framework **Cypress** para executar testes de integração (e2e).

1. Inicialize a interface do Cypress:

   npx cypress open

2. Selecione qual navegador deseja utilizar e clique na opção "E2E Testing".

3. Os testes disponíveis estão localizados na pasta cypress/src/e2e.

## Funcionalidades

- **Gerenciamento de Notícias:**
  - Criar, editar e excluir notícias.
  - Visualizar lista de notícias.
  - Backend com json-server.

- **Busca de CEPs:**
  - Consulta de CEPs utilizando a API externa de CEP no projeto backend (NestJS + ViaCEP).

---

## Endpoints do json-server

- **Endpoints para CRUD de Notícias:**
  ```
  GET    /news        -> Lista todas as notícias
  POST   /news        -> Adiciona uma nova notícia
  PUT    /news/:id    -> Atualiza uma notícia pelo ID
  DELETE /news/:id    -> Remove uma notícia pelo ID
  ```

---

## Funcionalidade de Busca de CEP

A funcionalidade de consulta de CEP utiliza um projeto backend externo que se integra à API ViaCEP. 

- **Descrição:**
  - Busca informações detalhadas de um endereço a partir de um CEP fornecido pelo usuário.
  - O backend realiza essa integração e retorna os dados formatados.

- **Como funciona:**
  - O frontend envia o CEP para o backend externo.
  - O backend, por sua vez, consulta a API ViaCEP e retorna os dados processados.

- **Repositório da API Externa:**
  - Para executar a funcionalidade de CEP, clone e configure o repositório da API externa:

    git clone https://github.com/fguilherme12/backend-g4f
    cd backend-g4f
    npm install
    npm run start


- **Exemplo de endpoint no backend (NestJS):**
  GET /cep/:cep -> Retorna os detalhes do endereço com base no CEP informado.


