# Usar uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o Vite usa (pode alterar se necessário)
EXPOSE 5173

# Comando para iniciar o servidor Vite
CMD ["npm", "run", "dev", "--", "--host"]
