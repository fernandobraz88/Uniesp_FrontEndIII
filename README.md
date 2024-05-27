# Uniesp: Front end III
Repositório dedicado a disciplina front end III da Uniesp, no qual foi utilizado a Biblioteca **React** 

## Aula 00:
### Tema abordado:
- Conceitos de Node.js
- Gerenciamento de pacotes com o ***npm***
- Criação de um projeto react com a ferramenta ***vite***

### Exercicio:
Exibir renderizado a mensagem: ***"Hello World"***

## Aula 01:
### Tema abordado:
- Conceitos do **.jsx**
- Criação de componentes
- trabalhando com propriedades de componentes

### Exercicio:
Criar os componentes ***Adicao***, ***Subtracao***, ***Multiplicacao*** e ***Divisao*** repassar os operandos como parametros e renderizar os respectivos resultados

## Aula 02:
### Tema Abordado:
- Eventos
- Imagens
- Hooks

### Exercicios
#### Excercicio 1:
Crie um componente chamado:**RenderizandoComFuncoes**
- Neste componente crie uma função chamada: **escolhaDeRenderizacao** que terá um parâmetro chamado: ***oQueRenderizar***
- Nesta função, se o valor de ***oQueRenderizar*** for a string **“h1”**, terá como retorno um JSX com o texto **“Texto em h1”** envolto pela tag h1.
- Se a string for diferente de **“h1”**, o retorno será: **“Texto em h2”** envolto pela tag h2.
- Na tela chame essa função através de duas template expressions, uma passando como parâmetro “h1” e outra “h2”.

#### Exercicio 2:
Crie um componente chamado: **TrabalhandoComImagens**
- Neste componente importe uma imagem da pasta *public* e uma de *assets*
- Importe o componente na App e renderize

#### Exercicio 3:
Crie um componente chamado: **HookContador**
- Neste componente terá um *useState* **"contador"** com estado inicial = **1**
- Crie uma função **"incrementarContador"** que altera o valor do contador em +1
- Crie um button "Incrementar" para utilizar a função
- Renderize

## Aula 03:
### Tema Abordado:
- If/ Else no JSX
- Props e Destructuring props
- Reaproveitamento de componentes
- Fragments

### Exercicios:
#### Exercicio 01:
Crie um componente chamado: **EstouConseguindoAprenderReact**
- Neste componente crie um operador ternário para verificar uma props chamada **estouConseguindo** (boolean)
- Se True => `<h1>Estou indo bem... </h1>`
- Se False => `<h1>Preciso Estudar mais </h1>`

#### Exercicio 02:
Crie um componente chamado: **Aluno** 
- Este componente vai renderizar informaçoes sobre o aluno como *nome*,*email*, *curso* e *media*
- Utilise a tecnica de **Destructuring** para extrair todas as propriedades de uma vez só
- Renderize o componente **Aluno** em um elemento da página
- Para isso crie um Array com 3 alunos em objetos literais
- Percorra esse arrau através de ***.map*** para renderizar esses 3 alunos na tela

## Aula 04:
### Tema Abordado:
- CSS com React

### Exercicios:
#### Exercicio 01:
Crie um estilo **Global** que contenha:
- Cor de fundo do corpo #d77d7d
- Tamanho da fonte padrão 50px
- Todas as imagens devem ter uma borda sólida de 20px e com #ccc

#### Exercicio 02:
CSS in line
- Cor do texto #f00
- Cor de Fundo #00f
- Largura 200px
- Alinhamento centralizado

#### Exercicio 03:
CSS in Module
- Crie um CSS Modularizado para um componente chamado **Campanha**
- A mensagem e a cor de fundo devem mudar de acordo com o mes passado como prop

## Aula 05:
### Tema abordado:
HTTP com React
- Criando servidor http fake
- Resgatando dados (Get)
- Enviando dados (Post)

### Exercicios:
#### Exercicio 01:
- Crie uma RESTful API fake que retorne uma lista de **Alunos** onde cada instancia terá *nome*, *email* e *curso*
- Faça um *get* nessa lista de Alunos e obtenha o retorno da lista
- Mostre o resultado em um cliente http

#### Exercicio 02:
- Crie uma pagina que retorne a lista de **Alunos** que sua API fake está retornando
- Retorne esses dados organizados em uma tabela
