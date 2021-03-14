## Teste para estágio back-end na empresa Nave

## Exercícios de lógica:
* Link de acesso: https://codesandbox.io/s/teste-estagio-template-forked-dyvnq?file=/index.html

# Programas necessários
* Instalar o NodeJS e o Yarn de acordo com o sistema opracional que estiver utilizando
* Instalar o Docker e o PostgreSQL em seu computador 
* Criar uma imagem para o seu banco de dados no Docker e iniciá-la
* Se desejar, você pode instalar o programa DBeaver, a fim de visualizar as alterações feitas no banco de dados 

# Execução da API RESTful
* Abra o prompt de comando de sua IDE na pasta onde irá baixar o projeto
* Executar o comando yarn install para que todos os pacotes necessários sejam instalados
* Executar o comando yarn sequelize db:migrate para criar a estrutura do banco de dados
* Executar o comando yarn sequelize db:seed:all para popular o banco com os seeders configurados
* Abra o insomnia para testar as rotas criadas. A seguir, um exemplo de criação de rota:
* Exemplo teste de rota de listagem de Navers: crie uma new request no Insomnia, de tipo GET, nomeie como desejar, preenchar o espaço da url da seguinte maneira: "http://localhost:3333/navers". Clique em SEND e uma listagem de navers aparecerá em formato JSON.

# Dificuldades
* Até a entrega do teste, não encontrei uma forma de resolver o exercício de lógica número 10. Tentei utilizar as funções map e filter, mas admito que meu conhecimento para tal exercício ainda é limitado.
* Nos Exercícios de banco de dados (BONUS) => E.B.5: não consegui calcular o número de navers por project e retornar essas informações em um JSON. Logo, a função que fiz utiliza o método findAllAndCount, do sequelize, e retorna o total de navers em todos os projetos. 
* Consegui acessar o número de navers por projetos, mas de forma individual, não conseguindo uma função que percorre todo o array de projects e faça essa análise para cada project. 


