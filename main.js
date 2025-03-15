const handleResult =(userChoice)=>{
    const resultUpdate = document.querySelectorAll('span')
    const choice = ['Stone','Paper','Scissors']
    const random = Math.floor(Math.random()*choice.length)
    const computerChoice = choice[random]
if(userChoice==="Stone"&&computerChoice==="Scissors"||userChoice==="Paper"&&computerChoice==="Stone"||userChoice==="Scissors"&&computerChoice==="Paper"){
  alert('You Won')
  resultUpdate[0].textContent=` ${userChoice}`
  resultUpdate[1].textContent=` ${userChoice}`
  resultUpdate[2].textContent="You won the game"
  console.log(resultUpdate[0]);
  
  resultUpdate[2].textContent="You Won The Game"
}else if(userChoice===computerChoice){
    resultUpdate[2].textContent="Match Tie"
    resultUpdate[0].textContent=` ${userChoice}`
    resultUpdate[1].textContent=` ${userChoice}`
    alert("match Tie")
}else{
    resultUpdate[0].textContent=` ${userChoice}`
    resultUpdate[1].textContent=` ${userChoice}`
    resultUpdate[2].textContent="You Loss The Game"
    alert("Better Luck Next Time")
}
}

