#  PokeApi Angular

## Sobre o projeto

Este projeto é uma aplicação construída em Angular 10, com o intuito de criar uma Pokedex utilizando a api PokeApi.
Este projeto foi desenvolvido com o layout focado para desktop, porém é possível abri-lo em um dispositivo móvel e navegar tranquilamente já que está responsivel.
Esta pokedex foi pensada para funcionar de maneira simples, apenas com a página Home, porém possuindo opções de filtros e paginação para facilitar a navegação do usuário, e para obter mais detalhes do Pokemon é necessário apenas clicar no botão para abrir um modal, assim não sendo necessário sair da página atual no estado em que se encontra.

## Rodar projeto
O projeto não possúi nenhuma dependência externa, para rodá basta possuir instalado em sua máquina:
- Angular 10
- Node

Depois de já ter esses requisitos instalados basta:
- 1 - Baixar o projeto do GIT
- 2 - Rodar o comando no terminal "npm install" dentro da pasta do projeto
- 3 - Ligar o servidor do projeto rodando "ng serve -o" via terminal
- 4 - Pronto o projeto já estará rodando :)

## Sobre o código e desenvolvimento
O código do projeto está separado em pastas:
- Components: componentes genéricos que servem para a aplicação inteira
- Pages: Páginas/modulos da aplicação, onde os usuários irão navegar
- Services: Onde é montada as chamadas para as API`s e as regras de negócio, caso sejam necessárias
- Url base definida no envrionment, para caso possua diferença entre dev e produção
- Estilos que serão utilizados na aplicação inteira estão no Style.scss
- Testes realizados: ng lint - OK
- Testes automatizados e unitários não realizados (não possuo experiência)

## Libs externas
- Bootstrap 5
- Ngx pagination

## Build
Depois de de verificar o funcionamento do projeto foi rodado o comando de build "ng build --prod" e deram certo, gerando o build do projeto sem nenhum problema.

## Qualquer dúvida
E-mail: joaosena.contato@gmail.com
Linkedin: https://www.linkedin.com/in/joaovscardoso/

## Prints da aplicação
<span>
  <img src="https://raw.githubusercontent.com/Joao-Sena/Pokeapi---Angular-10/master/src/assets/img/home.PNG" width="48%">
</span>
<span>
  <img src="https://raw.githubusercontent.com/Joao-Sena/Pokeapi---Angular-10/master/src/assets/img/modal.png" width="48%">
</span>
