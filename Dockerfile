# Use uma imagem base leve do Node.js
FROM node:18-alpine

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Crie um grupo e um usuário não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copie apenas os arquivos essenciais para instalar dependências
COPY package*.json ./

# Instale as dependências (essa etapa pode ser feita como root)
RUN npm install --ignore-scripts

# Copie o restante dos arquivos necessários
COPY . .

# Altere o proprietário dos arquivos para o usuário não-root
RUN chown -R appuser:appgroup /app

# Altere para o usuário não-root
USER appuser

# Construa o projeto (caso seja produção)
RUN npm run build

# Exponha a porta do servidor de desenvolvimento
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
