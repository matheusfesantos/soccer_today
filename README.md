  
Um site front-end desenvolvido com **React** que utiliza a API **Football Data** para exibir informações detalhadas das principais ligas de futebol do mundo.  

## **📖 Sobre o Projeto**  
O **Quem Joga Agora** foi criado para fãs de futebol que desejam informações rápidas e detalhadas sobre as principais ligas do mundo. O site permite que você:  
- Veja o nome da liga e o país de origem.  
- Confira as datas de início e término da temporada atual.  
- Explore a tabela de artilheiros da temporada.  
- Navegue entre as rodadas da temporada atual para acompanhar os jogos.  

Tudo isso em uma interface moderna e fácil de usar, alimentada pela API **Football Data**.  

## **📂 Estrutura de Arquivos**  
```plaintext
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── LeagueDetails.js
│   │   ├── TopScorers.js
│   │   └── MatchdayNavigator.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── App.css
│   │   └── LeagueDetails.css
│   ├── App.js
│   ├── index.js
│   └── .env
├── package.json
├── README.md
└── .gitignore
```  

## **✨ Funcionalidades**  
- Listar informações detalhadas de ligas e temporadas.  
- Tabela de artilheiros atualizada da temporada.  
- Navegação por rodadas para ver os jogos e resultados.  
- Design responsivo, acessível de qualquer dispositivo.  

## **📸 Capturas de Tela**  
### Página Inicial  
A interface principal com informações das ligas.  
![Página Inicial](https://drive.google.com/uc?export=view&id=1z0u5n_vNXGEEKN8XwcGGvGRQPMmRz7my)  

### Tabela de Artilheiros  
Exibição dos artilheiros da temporada atual.  
![Tabela de Artilheiros](https://drive.google.com/uc?export=view&id=1z0u5n_vNXGEEKN8XwcGGvGRQPMmRz7my)  

### Navegação por Rodadas  
Sistema que permite explorar as rodadas da temporada atual.  
![Navegação por Rodadas](https://drive.google.com/uc?export=view&id=17qnFnDv8C0n7nCW5uboQMgbA8v6ka6YC)  

## **🛠️ Tecnologias Utilizadas**  
- **React.js**  
- **Axios** (para consumo de APIs)  
- **CSS Modules** (ou outro framework de estilização)  
- **Football Data API**  

## **🚀 Como Executar o Projeto**  

### Pré-requisitos  
- Node.js (versão LTS recomendada)  
- Gerenciador de pacotes: NPM ou Yarn  

### Passos para rodar o projeto:  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/matheusfesantos/QuemJogaAgora.git
   ```  

2. Navegue até o diretório do projeto:  
   ```bash
   cd QuemJogaAgora
   ```  

3. Instale as dependências:  
   ```bash
   npm install  
   # ou
   yarn install  
   ```  

4. Crie um arquivo `.env` na raiz do projeto e insira sua chave da API Football Data:  
   ```env
   REACT_APP_API_KEY=suachaveaqui
   ```  

5. Inicie o servidor de desenvolvimento:  
   ```bash
   npm start  
   # ou
   yarn start  
   ```  

6. Acesse o site no navegador:  
   ```  
   http://localhost:3000  
   ```  

## **📞 Contato**  
- **Autor**: Matheus Ferreira  
- **GitHub**: [matheusfesantos](https://github.com/matheusfesantos)  
- **Email**: matheus.seuemail@example.com  
