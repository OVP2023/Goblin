class MoveGoblin{
  deactivateGoblin(index){
    document.getElementById(`hole${index}`).className = 'hole';
  }
  activateGoblin (index){
    document.getElementById(`hole${index}`).className = 'hole hole_has-mole';
  }
  countGoblin(index){
    document.getElementById("lost").textContent=String(index);
  }
}

class Player{
  killGoblin(){
    let cc = 0;
    let dd = 0;
    let index = 0;
    var st = "";
    const c = document.getElementById("dead");
    const d = document.getElementById("lost");
    while (index < 9){
      st="hole";
      index+=1;
      st=st+index;
      let p = document.getElementById(st);
      p.onclick=() =>{            
        if (p.classList.contains( 'hole_has-mole' )){
          cc+=1
          c.textContent=Number(c.textContent)+1; 
          countGoblin = countGoblin - 1;    
        } 
      }
    }          
  }
}

function next(){
  setTimeout(() => {
    newGoblin.deactivateGoblin( activeGoblin );
    activeGoblin = Math.floor( 1 + Math.random() * 16 );
    newGoblin.activateGoblin( activeGoblin );
    countGoblin = countGoblin + 1
    if (document.getElementById("lost").textContent==String(5)){   
      countGoblin=0                     
      alert('Игра завершается - 5 гоблинов пропустил !!!')
    }
    newGoblin.countGoblin( countGoblin )
    next();
  }, 1000 );
}
let activeGoblin = 1;
let countGoblin = 0;
const newGoblin = new MoveGoblin();
const newPlayer = new Player();

next();
newPlayer.killGoblin()