import './style.css';

function ArrowDownn (currentPlayer =1){
    return /*html*/ `
    <img class = "arrow-down"
         data-currentPlayer="${currentPlayer}"
         src="images/IconArrowDown.png" 
         alt="Icone de uma seta para baixo">
    
    `;
}

export default ArrowDownn; 