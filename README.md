# Node.js

<p>Estudo realizado com o livro Node Essencial do autor Ricardo R Lecheta

Os códigos salvos neste repositório sao referentes aos exercícios dos capítulos do livro.

<h2>Node.js</h2>

Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade (como um servidor web), com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física.


<h3>Instalação do node.js e NPM</h3>

Primeiramente, para criar um projeto node, devemos instalar o Node.js. Para instalação no sistema Operacional Windows e Mac basta acessar o site https://nodejs.org/en/download/ e instalar conforme a arquitetura do seu sistema operacional. Caso voce esteja usando linux (Debian, Ubuntu e derivados), basta abrir o terminal e instalar diretamente do repositorio da sua distribuição com o comando **"sudo apt-get install nodejs"**, e logo em seguida basta instalar o gerenciador de pacotes do node chamado NPM (node package manager), **"sudo apt-get install npm"**

<h3>Inicialização do projeto node</h3>

Depois de instalado, para começar um projeto node, basta acessar o diretório do seu projeto no terminal (cmd no windows) e digitar o comando **"npm init"**, assim com este comando ele irá gerar um arquivo chamado **"package.json"**, este arquivo que define seu projeto node, e guarda informações como os modulos utilizados e o arquivo de inicialização do projeto.

<h3>Instalação de módulos</h3>

Para fazer a instalação de módulos no projeto, como po exemplo o conector de banco de dados mysql, o framework Express entre outros, basta voce abrir o terminal (cmd no windows) e digitar o comando **"npm install <'nome do modulo'> --save"** dentro do diretóro de seu projeto. O parametro **"--save"**, fara com que o modulo seja salvo apenas no seu projeto atual, colocando assim o modulo na tag de dependências do seu arquivo package.json. Para remover um módulo basta digitar o comando **"npm remove <'nome do modulo'> --save"**, que ele será removido do seu projeto, e do seu package.json.
</p>

<h3>Executando a aplicação</h3>

Para executar uma aplicação, basta digitar o comando **node <'nome do arquivo'>** que a sua aplicação sera executada. Porem se sua aplicação tiver uma configuração para levantar um servidor, voce podera executar como **npm start** ou utilizando o comando **nodemon**, que assim sua aplicação sera executada levantando o arquivo do servidor mapeado no seu package.json. A diferença dos dois comandos, é que executando a aplicação com **nodemon**, voce não precisara executar novamente o projeto se fizer alguma ateração no seu codigo backend, ja com o comando **npm start** você tera de reniciar toda vez que fizer alguma mudança. Você tambem pode instalar o modulo do nodemon no seu projeto digitando o comando **npm install nodemon -- save**. 


</p>

<h3>Capitulo 4 - Node Basico</h3>

Neste capitulo, começamos a estudar uma pequena introdução do que é o nodeJs, e realizamos o seguinte exercicios: 

  >Criando um servidor HTTP;
    
  >Detalhes sobre a função CreateServer;
    
  >Adicionando Rotas no servidor HTTP;
    
  >Web Service simples com arquivos;
    
  >Criando um servidor TCP (Socket);

<h3>Capitulo 5 - NPM</h3>

Neste capitulo, estudamos um pouco sobre o NPM (Node package manager), o gerenciador de pacotes do Node.js, realizando os seguintes exercicios:

>Estudo teorico do NPM(Node package manager);

>Comando NPM start;

>Estudo e utilização do nodemon no projeto node;

>Comandos para instalar dependencias com o NPM;

<h3>Capitulo 6 - JSON Basico</h3>

Neste capitulo estudamos um pouco sobre JSON (JavaScript Object Notation), Json é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas, especificado por Douglas Crockford em 2000:

 >JSON basico;
 
 >Retornando o JSON no metodo response;
 
 >Convertendo um objeto em javascipt para JSON;
 
 >Convertendo um array em JavaScript para JSON;
 
 >Trabalhando com classes;
 
 <h3>Capitulo 7 - Mysql</h3>

Neste capitulo, estudamos como fazer conexao e integração de um projeto Node.Js com o banco de dados mysql, alem de desenvolver um pequeno CRUD com os metodos, **INSERT, UPDATE, DELETE, SELECT:**

>Criando um banco de dados e usuario no mysql;

>Conectando-se ao banco de dados;

>Criando e importando um banco de dados;

>Web Service que retorna a lista de carros em JSON;

>Seleionando registros da tabela no banco de dados (SELECT);

>Selecionando um registro especifico na tabela de banco de dados (SELECT);

>Inserindo um registro na tabela (INSERT);

>Atualizando um registro na tabela (UPDATE);

>Deletando um registro na tabela (DELETE);

>Organizando o codigo em classes;

<h3>Capitulo 8 - Web Services em Node.js</h3>
 
Neste capitulo, criamos um web service que retorna a lista de carros salva no banco de dados em formato JSON, alem de usar o metodo POST para salvar dados e carros:

>Web Servcie que retorna a lista de carros em JSON;

>Salvando dados com o metodo POST;

>Salvando carros com o metodo POST;

<h3>Capitulo 9 - Express</h3>

Neste capitulo começamos a estudar o framework Express, e com ele desenvolvemos alguns codigos para estudo de acordo com o itens abaixo:

>Retornando JSON;

>Informando o status na resposta;

>Informando o tipo de conteudo (mime-type) na resposta;

>Lendo parametros por GET do tipo Quey Parameters;

>Lendo parametros por GET do tipo Path Parameters;

>Lendo Parametros do tipo chave = valor por POST;

>Lendo um JSON enviado por POST;

>Determinando o tipo de conteudo que o web service aceita;

A partir do capitulo 10, começou-se a desenvolver um projeto APIRest completo ate o final do livro. Este projeto esta armazenado em um repositorio a parte de nome APIRest, os codigos contidos neste repositorio, são codigos de exercicios desenvolvidos nestes capitulos de acordo com o sumario de cada capitulo acima.
