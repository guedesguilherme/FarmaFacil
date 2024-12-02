# Use uma imagem base leve do Node.js
FROM node:18-alpine

# Configure o diretório de trabalho no contêiner
WORKDIR /app

# Copie apenas os arquivos essenciais para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install --ignore-scripts

# Copie o restante dos arquivos necessários
COPY . .

# Construa o projeto (caso seja produção)
RUN npm run build

# Exponha a porta do servidor de desenvolvimento
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
