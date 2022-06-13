const cardColors = ["geralt", "geralt", "ciri", "ciri", "iorweth", "iorweth", "jaskier", "jaskier", "triss", "triss", "yen", "yen"];

let cards = document.querySelectorAll(".karta"); //NodeList
cards = [...cards]; //Tworzymy tablicę z listy 

let activeCard = ""; 
const activeCards = []; //tablica dla dwóch kart

let turnCounter = 0;
let scoreEl = document.querySelector(".score")
let plansza = document.querySelector(".board");

const gameLength = cards.length / 2; 
let gameResult = 0;



const clickCard = function () 
{
    activeCard = this; //w co zostało kliknięte    

    //czy to kliknięcie w ten sam element (tylko drugi może dać true) Musi być przed ukryciem dodane
    if (activeCard == activeCards[0]) return;

    activeCard.classList.remove("hidden"); 

    //czy to 1 kliknięcie, czy tablica ma długość 0
    if (activeCards.length === 0) 
    {        
        activeCards[0] = activeCard; 
        return;
    }
    //czy to 2 kliknięcie 
    else 
    {    
        cards.forEach(card => card.removeEventListener("click", clickCard))
        
        activeCards[1] = activeCard;
        
        setTimeout(function () 
        {
            //sprawdzenie czy to te same karty 
            if (activeCards[0].className === activeCards[1].className) 
            {                
                activeCards.forEach(card => card.classList.add("off"));                
                gameResult++;
                cards = cards.filter(card => !card.classList.contains("off"));  

                //Sprawdzenie czy nastąpił koniec gry
                if (gameResult == gameLength) 
                {
                    plansza.innerHTML = ("<h2>Wygrałeś!</h2>Udało Ci się odkryć wszystkie karty w " + turnCounter + " ruchach");
                    scoreEl.innerHTML = ""
                }                
            }
            
            else 
            {                
                activeCards.forEach(card => card.classList.add("hidden")); 
            }
            //Reset gry
            activeCard = ""; 
            activeCards.length = 0; 
            cards.forEach(card => card.addEventListener("click", clickCard));            

        }, 500);

        turnCounter++;  
        scoreEl.innerHTML = ("Licznik ruchów: "+turnCounter);      
    }
};


const init = function () 
{
    //losowanie kart    
    cards.forEach(card => {        
        const position = Math.floor(Math.random() * cardColors.length);         
        card.classList.add(cardColors[position]);        
        cardColors.splice(position, 1); //usunięcie wylosowanego elementu
    });
    
    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener("click", clickCard);
        })
    }, 2000);
};

init();