# Node.js

<p>Estudo realizado com o livro Node Essencial do autor Ricardo R Lecheta

Os códigos salvos neste repositório sao referentes aos exercícios dos capítulos do livro.

<h3>Criando o banco de dados!</h3>

Neste estudo utilizamos o banco de dados mysql que esta disponivel para download nos site: https://dev.mysql.com/downloads/windows/installer/8.0.html.

Para a criação da tabela do banco de dados de acordo com as regras de negocio, basta inserir os comandos abaixo:

```
create database livro;
grant all privileges on livro.* to "livro"@"localhost" identified by "livro123";
flush privileges;

use livro;

create table carro
    (id bigint not null auto_increment,
    nome varchar(255),
    descricao varchar(255),
    url_foto varchar(255),
    url_video varchar(255),
    latitude varchar(255),
    longitude varchar(255),
    tipo varchar(255), primary key (id) );
    
desc carro;
```
O primeiro comando indica que criaremos um banco de dados com o nome **livro** e para esse banco passamos para ele as mesmas permissoes de um usuario root padrão. Após criar o novo banco de dados, o comando **use livro**, ira dar acesso ao banco que acabamos de criar, para assim podermos criar a tabela de carros.

<h3>Inserindo dados na tabela carros</h3>

Após criar a tabela carros, precisamos inserir todos os carros que estarão disponiveis no banco, para inserir os carros basta colar os comandos abaixo no mysql:

```
#Carros Clássicos
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Tucker 1948','Descrição Tucker 1948','http://www.livroandroid.com.br/livro/carros/classicos/Tucker.png','http://www.livroandroid.com.br/livro/carros/classicos/tucker.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Chevrolet Corvette','Descrição Chevrolet Corvette','http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_Corvette.png','http://www.livroandroid.com.br/livro/carros/classicos/corvette.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Chevrolet Impala Coupe','Descrição Chevrolet Impala Coupe','http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_Impala_Coupe.png','http://www.livroandroid.com.br/livro/carros/classicos/chevrolet_impala.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Cadillac Deville Convertible','Descrição Cadillac Deville Convertible','http://www.livroandroid.com.br/livro/carros/classicos/Cadillac_Deville_Convertible.png','http://www.livroandroid.com.br/livro/carros/classicos/cadillac_deville.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Chevrolet Bel-Air','Descrição Chevrolet Bel-Air','http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_BelAir.png','http://www.livroandroid.com.br/livro/carros/classicos/chevrolet_bel_air.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Cadillac Eldorado','Descrição Cadillac Eldorado','http://www.livroandroid.com.br/livro/carros/classicos/Cadillac_Eldorado.png','http://www.livroandroid.com.br/livro/carros/classicos/cadillac_eldorado.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Ferrari 250 GTO','Descrição Ferrari 250 GTO','http://www.livroandroid.com.br/livro/carros/classicos/Ferrari_250_GTO.png','http://www.livroandroid.com.br/livro/carros/classicos/ferrari_gto.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Dodge Challenger','Descrição Dodge Challenger','http://www.livroandroid.com.br/livro/carros/classicos/Dodge_Challenger.png','http://www.livroandroid.com.br/livro/carros/classicos/dodge_challenger.mp4','','','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Camaro SS 1969','Descrição Camaro SS 1969','http://www.livroandroid.com.br/livro/carros/classicos/Camaro_SS.png','http://www.livroandroid.com.br/livro/carros/classicos/camaro_ss.mp4','-23.564224','-46.653156','classicos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Ford Mustang 1976','Descrição Ford Mustang 1976','http://www.livroandroid.com.br/livro/carros/classicos/Ford_Mustang.png','http://www.livroandroid.com.br/livro/carros/classicos/ford_mustang.mp4','-23.564224','-46.653156','classicos');


#Carros Esportivos
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Ferrari FF','Descrição Ferrari FF','http://www.livroandroid.com.br/livro/carros/esportivos/Ferrari_FF.png','http://www.livroandroid.com.br/livro/carros/esportivos/ferrari_ff.mp4','44.532218','10.864019','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('AUDI GT Spyder','Descrição AUDI GT Spyder','http://www.livroandroid.com.br/livro/carros/esportivos/Audi_Spyder.png','http://www.livroandroid.com.br/livro/carros/esportivos/audi_gt.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Porsche Panamera','Descrição Porsche Panamera','http://www.livroandroid.com.br/livro/carros/esportivos/Porsche_Panamera.png','http://www.livroandroid.com.br/livro/carros/esportivos/porsche_panamera.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Lamborghini Aventador','Descrição Lamborghini Aventador','http://www.livroandroid.com.br/livro/carros/esportivos/Lamborghini_Aventador.png','http://www.livroandroid.com.br/livro/carros/esportivos/lamborghini_aventador.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Chevrolet Corvette Z06','Descrição Chevrolet Corvette Z06','http://www.livroandroid.com.br/livro/carros/esportivos/Chevrolet_Corvette_Z06.png','http://www.livroandroid.com.br/livro/carros/esportivos/chevrolet_corvette.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('BMW M5','Descrição BMW M5','http://www.livroandroid.com.br/livro/carros/esportivos/BMW.png','http://www.livroandroid.com.br/livro/carros/esportivos/bmw-m5.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Renault Megane RS Trophy','Descrição Renault Megane RS Trophy','http://www.livroandroid.com.br/livro/carros/esportivos/Renault_Megane_Trophy.png','http://www.livroandroid.com.br/livro/carros/esportivos/renault_megane.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Maserati Grancabrio Sport','Descrição Maserati Grancabrio Sport','http://www.livroandroid.com.br/livro/carros/esportivos/Maserati_Grancabrio_Sport.png','http://www.livroandroid.com.br/livro/carros/esportivos/renault_megane.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('McLAREN MP4-12C','Descrição McLAREN MP4-12C','http://www.livroandroid.com.br/livro/carros/esportivos/McLAREN.png','http://www.livroandroid.com.br/livro/carros/esportivos/mcLaren.mp4','-23.564224','-46.653156','esportivos');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('MERCEDES-BENZ C63 AMG','Descrição MERCEDES-BENZ C63 AMG','http://www.livroandroid.com.br/livro/carros/esportivos/MERCEDES_BENZ_AMG.png','http://www.livroandroid.com.br/livro/carros/esportivos/mercedes.mp4','-23.564224','-46.653156','esportivos');


#Carros de Luxo
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Bugatti Veyron','Descrição Bugatti Veyron','http://www.livroandroid.com.br/livro/carros/luxo/Bugatti_Veyron.png','http://www.livroandroid.com.br/livro/carros/luxo/bugatti_veyron.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Ferrari Enzo','Descrição Ferrari Enzo','http://www.livroandroid.com.br/livro/carros/luxo/Ferrari_Enzo.png','http://www.livroandroid.com.br/livro/carros/luxo/ferrari_enzo.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Lamborghini Reventon','Descrição Lamborghini Reventon','http://www.livroandroid.com.br/livro/carros/luxo/Lamborghini_Reventon.png','http://www.livroandroid.com.br/livro/carros/luxo/lamborghini _reventon.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Leblanc Mirabeau','Descrição Leblanc Mirabeau','http://www.livroandroid.com.br/livro/carros/luxo/Leblanc_Mirabeau.png','http://www.livroandroid.com.br/livro/carros/luxo/leblanc_mirabeau.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Shelby Supercars Ultimate','Descrição Shelby Supercars Ultimate','http://www.livroandroid.com.br/livro/carros/luxo/Shelby_Supercars_Ultimate.png','http://www.livroandroid.com.br/livro/carros/luxo/shelby.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Pagani Zonda','Descrição Pagani Zonda','http://www.livroandroid.com.br/livro/carros/luxo/Pagani_Zonda.png','http://www.livroandroid.com.br/livro/carros/luxo/pagani_zonda.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Koenigsegg CCX','Descrição Koenigsegg CCX','http://www.livroandroid.com.br/livro/carros/luxo/Koenigsegg_CCX.png','http://www.livroandroid.com.br/livro/carros/luxo/koenigsegg.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Mercedes SLR McLaren','Descrição Mercedes SLR McLaren','http://www.livroandroid.com.br/livro/carros/luxo/Mercedes_McLaren.png','http://www.livroandroid.com.br/livro/carros/luxo/mclaren_slr.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Rolls Royce Phantom','Descrição Rolls Royce Phantom','http://www.livroandroid.com.br/livro/carros/luxo/Rolls_Royce_Phantom.png','http://www.livroandroid.com.br/livro/carros/luxo/rolls_royce.mp4','-23.564224','-46.653156','luxo');
insert into carro (nome,descricao,url_foto,url_video,latitude,longitude,tipo) VALUES('Lexus LFA','Descrição Lexus LFA','http://www.livroandroid.com.br/livro/carros/luxo/Lexus_LFA.png','http://www.livroandroid.com.br/livro/carros/luxo/lexus.mp4','-23.564224','-46.653156','luxo');

#filtro para a listagem de todos os carros no banco.
select id,nome,tipo from carro;
```
Os carros inseridos são separados por 3 categorias (calssicos, esportivos, luxo,), onde que são inseridos 10 carros de cada cateoria no banco. O ultimo comando listado **select id,nome,tipo from carro;**, gera uma pesquisa pelos carros filtrando os 3 campos indicados como id, nome e tipo, isto para facilitar a pesquisa por carros na tabela. 


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
