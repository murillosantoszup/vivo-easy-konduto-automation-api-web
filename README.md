# Projeto de Testes Automatizados de API com Cypress

Este projeto é destinado para teste automatizados de APIs usando a ferramenta Cypress api de integração entre o Vivo Easy e o sistema antifraude da Konduto. Ele possui uma série de testes pré-configurados que podem ser executados em diferentes ambientes.

## Configuração do ambiente

Para executar os testes, é necessário ter o Cypress instalado na sua máquina. Para isso, siga os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Digite o comando npm install para instalar as dependências do projeto.
5. Digite o comando npx cypress open para abrir a interface do Cypress.

## Executando os testes

Existem dois modos de executar os testes: o modo interativo e o modo headless.

### Modo interativo

O modo interativo é útil para depurar testes e verificar se eles estão funcionando conforme o esperado. Para executar os testes no modo interativo, siga os seguintes passos:

1. Abra a interface do Cypress com o comando npx cypress open.
2. Clique no arquivo de teste que deseja executar.
3. O navegador será aberto e os testes serão executados.
4. Após a execução dos testes, os resultados serão exibidos na interface do Cypress.

### Modo headless

O modo headless é útil para integração com ferramentas de CI/CD e para executar os testes em um ambiente sem interface gráfica. Para executar os testes no modo headless, siga os seguintes passos:

1. Abra o terminal e navegue até o diretório do projeto.
2. Digite o comando npx cypress run para executar os testes no modo headless.
3. Após a execução dos testes, os resultados serão exibidos no terminal.

## Estrutura do projeto

O projeto está estruturado da seguinte forma:

* integration: Diretório que contém os arquivos de teste da API
* contracts: Pasta aonde vamos colocar os arquivos Joi/js para validação de schema
* payloads: Pasta aonde vamos adicionar arquivos json para a criação do corpo da requisição
* request: Pasta para adicionar somente a requisição realizada para o path
* tests: Onde de fato adicionaremos nossos cenários de testes
* support: Diretório que contém o arquivo 'index.js' e 'commands.js' que são responsáveis por definir os plugins do cypress
* cypress.config.js: É um arquivo de configuração que é usado pelo framework de teste de integração Cypress para definir configurações e opções globais para um projeto de teste
* report: Pasta criada ao rodar os testes no modo headless contendo o relatório dos testes e o vídeo de resultados dos testes
* videos: Pasta criada ao rodar os testes no modo headless contendo o vídeo de resultado dos testes