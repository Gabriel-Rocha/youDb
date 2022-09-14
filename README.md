# Teste youDb

##  1 - Você ira precisar das seguintes ferramentas para executar o projeto

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [NodeJS](https://nodejs.org/pt-br/download/package-manager/)
* Instalação do [Docker](https://www.docker.com)
* *Instalação do [Insominia](https://insomnia.rest) (Ou outro que seja do seu gosto, mas para esse exemplo ultizarei o Insominia)

É de suma importancia a instalação do Git, para o clone do projeto.

## 1 - Configuração do Ambiente

Clone este repositório com o comando abaixo:

```
$ git clone https://github.com/Gabriel-Rocha/smarkio-text-to-speech.git
```

Agora navegue até o diretório do projeto e carregue as dependências do projeto:

```
$ cd youDb
$ npm install
```

## 2 - Arquivos de Configuração Postgress

Precisamos editar os arquivos de conexão com o banco e o arquivo de configuração do token, que será utilizado para consumir o serviço.

Para facilitar, no arquivo database, já tem a preconfiguração, caso necessario basta alterar as variaveis para o seu ambiente.

```
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'ceps',
}
```
# 3 - Criando o Banco de Dados

Após configuração da conexão com o banco, precisamos criar a tabela onde os comentários serão registrados, execute o comando abaixo no diretório do projeto:

Use o comando a seguir para iniciar o docker
```
$ docker start pg

$ docker exec -it pg bash

$ psql -U root
```
# 4 - Agora na pasta schema.sql você ira copiar cada comando e rodar no terminal
Ex: 
```
CREATE DATABASE ceps;
```
O retorno esperado é:
```
CREATE DATABASE
```
Assim para todos os schemas.

# 5 - Inicializando a Aplicação

Para iniciar a aplicação, execute o comando abaixo dentro da pasta /src:

```
$ node index.js
```

Para testar as rotas, use o insominia.

Após entrar, basta criar uma rota com o metodo Get http://localhost:3000/saveAll e em seguida na rota basta listar os CEPs encontrados no endpoit http://localhost:3000/cep:

Retorno esperado do listCEPs
```
[
	{
		"id": "a5820148-550a-4b32-a5cb-a452276df526",
		"cep": "04176-150",
		"logradouro": "Rua Nelson Lins e Barros",
		"complemento": "",
		"bairro": "Jardim Vergueiro (Sacomã)",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	},
	{
		"id": "44dbf58b-2895-4b14-8cc8-58fda90608bb",
		"cep": "04165-010",
		"logradouro": "Rua Nossa Senhora das Mercês",
		"complemento": "até 636 - lado par",
		"bairro": "Vila das Mercês",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	},
	{
		"id": "19f66908-a01b-4f88-9431-e3899a543be5",
		"cep": "04565-000",
		"logradouro": "Rua Flórida",
		"complemento": "até 999/1000",
		"bairro": "Cidade Monções",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	},
	{
		"id": "a87021ee-56e4-4ccc-b304-8e04093392f5",
		"cep": "09683-020",
		"logradouro": "Rua Alto Noroeste",
		"complemento": "",
		"bairro": "Paulicéia",
		"localidade": "São Bernardo do Campo",
		"uf": "SP",
		"ibge": "3548708",
		"gia": "6350",
		"ddd": "11",
		"siafi": "7075"
	},
	{
		"id": "c6a04f05-a4d2-4aee-830f-fe655cda7704",
		"cep": "04038-000",
		"logradouro": "Rua Borges Lagoa",
		"complemento": "até 580 - lado par",
		"bairro": "Vila Clementino",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	},
	{
		"id": "1b182a9f-5c79-4507-a304-950b595fc1fd",
		"cep": "05847-620",
		"logradouro": "Rua Yoshimara Minamoto",
		"complemento": "",
		"bairro": "Jardim Brasília",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	},
	{
		"id": "f07e6d9f-c070-409f-aefd-0f24a373595c",
		"cep": "05025-000",
		"logradouro": "Rua Cajaíba",
		"complemento": "até 819/820",
		"bairro": "Vila Pompéia",
		"localidade": "São Paulo",
		"uf": "SP",
		"ibge": "3550308",
		"gia": "1004",
		"ddd": "11",
		"siafi": "7107"
	}
]
```
