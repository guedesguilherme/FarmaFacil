# Use uma imagem base leve do Node.js
FROM node:18-alpine

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Crie um grupo e um usuário não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copie apenas os arquivos essenciais para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install --ignore-scripts

# Copie apenas os arquivos que são necessários para o build
COPY src/ ./src/
COPY public/ ./public/

# Altere o proprietário dos arquivos para o usuário não-root
RUN chown -R appuser:appgroup /app

# Altere para o usuário não-root
USER appuser

# Construa o projeto
RUN npm run build

# Exponha a porta
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
