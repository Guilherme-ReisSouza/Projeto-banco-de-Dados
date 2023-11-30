<div style="allign:center;">
<img src="https://github.com/Guilherme-ReisSouza/Projeto-banco-de-Dados/blob/main/assets/bannerProjeto2.png" alt="logo"/>
</div>

## 💼 Projeto banco de dados 💼

Usando a base de dados de exemplo do livro, escolha um dos bancos NoSQL visto em aula (wide-colum storage, document storage ou graph database) e escreva os scripts necessários para salvar os mesmos dados no formato do banco escolhido. Faça as modificações necessárias nas relações dos dados para armazenar da melhor forma possível no banco NoSQL escolhido.

Além do script para a escrita dos dados no banco, faça as mesmas queries da atividade 1 no banco que você escolheu (estas queries devem estar no repositório junto com o script).

## 👔  NOSSO TIME
Nosso time é composto por 3 pessoas, sendo elas:

<div style="allign:center;">
<img src="https://github.com/Guilherme-ReisSouza/Projeto-banco-de-Dados/blob/main/assets/1.png" alt="logo"/>
</div>

## 🤔 Mudanças nas tabelas

Ao analizarmos o fluxo do banco original, percebemos que poderiamos realizar aalgumas junções de tabelas, e ao final de tudo conseguimos chegar na seguinte junção:

<div style="allign:center;">
<img src="https://github.com/Guilherme-ReisSouza/Projeto-banco-de-Dados/blob/main/assets/tabelaNova.png" alt="logo"/>
</div>

As junções das tabelas  section e classroom foram juntadas com as informações building e room_number, virando uma tabela só com tudo do section e a adição do capacity. Já na junção do teaches takes as tabelas continham os mesmos valores com exceção da grade. Com isso fizemos 2 ids, ID_Prof e ID_student e o resto se manteve o mesmo em uma tabela só. 

## 🤔 Banco escolhido

Com tudo isso em mente, escolhemos o Mongo DB para realizar a conversão, criação das tabelas e a população das mesmas.
Pra isso utilizamos o Mongo DB atlas  e o  o playground através do mongo DB for VS Code.
Escolhemos o seguinte banco pois pensamos que realizar está atividade em documento fazia mais sentido para a conversão.

<div style="allign:center;">
<img src="https://github.com/Guilherme-ReisSouza/Projeto-banco-de-Dados/blob/main/assets/MongoDB.png" alt="logo"/>
</div>





