import React from 'react';


import'./global.css';

import Routes from './routes';




// JSX Javascript XML, é quando o html está integrado dentro do javascript

function App() {
  /*
    Sempre que for necessário refletir uma alteração na tela, é necessário utilizar o conceito de state.
    useState nos retorna um array com duas posições. [].
    A primeira posição desse vetor é o valor, e a segunda posição é um espaço para mudar o valor de counter

    É importante usar o conceito de imutabilidade para que a página saber se deve renderizar um conteudo novamente
  */

  return (
    <Routes/>
  );
}

export default App;
