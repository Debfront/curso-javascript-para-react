import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js';

function BoardGame(amountCards){
    window.boardGame = {};
    window.boardGame.handleClick = () => {
      const flipAndHideCards = ($cardsActive ) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
      }

      const swapPlayer = () => {
        const $arrowDown = document.querySelector('.arrow-down');
        const currentPLayer =  $arrowDown.getAttribute('data-currentplayer');
        $arrowDown.setAttribute('data-currentplayer', currentPLayer == 1 ? 2 : 1);
      }
      const $boardGame = document.querySelector('.board-game');
     
      const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

      if($cardsActive.length === 2){
        setTimeout(() => {
    
          flipAndHideCards($cardsActive )
          swapPlayer()
        }, 1000);
      }
    }

    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
     <section class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
    
    </section>`;

}

export default BoardGame;

