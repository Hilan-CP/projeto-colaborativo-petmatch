# 🐾 PetMatch & Care

Sistema de adoção e cuidado animal.

## 🚀 Padrão de Commits
Seguindo as orientações, utilizaremos:
- `feat:` Funcionalidades novas.
- `fix:` Correção de bugs.
- `docs:` Alterações em documentação.

## 📂 Estrutura
- `/server`: Back-end
- `/web`: Front-end

### 📂 Back-end
- `/database`: configuração do Drizzle e conexão do banco
- `/repositories`: objetos de operações CRUD
- `/services`: lógica de negócio
- `/routes`: definição dos endpoints
- `/lib`: configuração de bibliotecas de código
- `/types`: definição de tipos

Como executar o back-end:
1. Após fazer o git pull, abra o terminal na pasta `/server` e execute `bun install` para instalar as dependências do projeto
2. Execute o comando `docker-compose up -d` para subir o banco de dados
3. Execute o comando `bun db:push` para criar o esquema no banco de dados
4. Execute o comando `bun db:seed` para inserir os dados de teste
5. Execute o comando `bun dev` para inicar o servidor back-end
6. (Opcional) É possível usar `bun db:studio` para visualizar os dados do banco

Para interromper a aplicação:
1. Pressione CTRL + C para derrubar o servidor back-end
2. Execute o comando `docker-compose down -v` para derrubar o banco de dados

## Endpoints
Os endpoints estão disponíveis na interface gráfica da OpenApi, disponível em `http://localhost:3000/openapi` após a inicialização do servidor.

OBS: apenas estes endpoints do BetterAuth foram testados:
- `POST http://localhost:3000/api/auth/sign-up/email`: cadastrar usuário
- `POST http://localhost:3000/api/auth/sign-in/email`: login de usuário