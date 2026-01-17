function getComputerChoice(){
    let choice = Math.random()
    
    if(choice < 0.4)
     {
        return "Rock"
        
        

    }
   

    
     else if(choice>= 0.4 && choice< 0.7){
        return "Paper"
          
    }
  
    else{
        return "Scissors"
          
        
    }

}
     console.log(getComputerChoice())
