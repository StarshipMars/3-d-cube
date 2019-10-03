class Cube{
    constructor(name){
      this.container = document.querySelector(name);
      this.cubic = this.container.querySelector('#cubic');
      this.btns = this.container.querySelectorAll('.btn');
      this.sides = this.container.querySelectorAll('.side');
      this.btns[0].style.opacity = '1';
      this.createEvents();
    }

    changePosition(event){
        
        if(event.target.id == 0){
            this.sides[event.target.id].style.transform = 'rotateX(0deg)';
            this.sides[event.target.id].classList.add('show_change');
            this.cubic.style.transform = 'rotateY(20deg) rotateX(10deg)';
            this.btns[+event.target.id + 1].style.opacity = '1';
            
        }
        else if(event.target.id == 1){
            this.sides[event.target.id].style.transform = 'rotateY(90deg) translateZ(108px) translateX(108px)';
            this.sides[event.target.id].classList.add('show_change');
            this.cubic.style.transform = 'rotateY(40deg) rotateX(30deg)';
            this.btns[+event.target.id + 1].style.opacity = '1';
            
        }
        else if(event.target.id == 2){
            this.sides[event.target.id].style.transform = 'rotateY(90deg) translateZ(-108px) translateX(108px) rotateY(180deg)';
            this.sides[event.target.id].classList.add('show_change');
            this.cubic.style.transform = 'rotateY(50deg) rotateX(-40deg)';
            this.btns[+event.target.id + 1].style.opacity = '1'; 
        }
        else if(event.target.id == 3){
            this.sides[event.target.id].style.transform = 'rotateY(90deg) translateY(-108px) translateX(108px) rotateX(90deg) rotate(90deg)';
            this.sides[event.target.id].classList.add('show_change');
            this.cubic.style.transform = 'rotateY(60deg) rotateX(-40deg)';
            this.btns[+event.target.id + 1].style.opacity = '1';  
        }
        else if(event.target.id == 4){
            this.sides[event.target.id].style.transform = 'rotateY(90deg) translateY(108px) translateX(108px) rotateX(270deg) rotate(90deg)';
            this.sides[event.target.id].classList.add('show_change');
            this.cubic.style.transform = 'rotateY(-50deg) rotateX(-30deg)';
            this.btns[+event.target.id + 1].style.opacity = '1';  
        }
        else if(event.target.id == 5){
            this.forLastBtn(event.target.id);
        }
    }

    forLastBtn(id){
        this.sides[id].style.transform = 'translateZ(-216px) rotateX(180deg)';
        this.sides[id].classList.add('show_change');
        this.cubic.style.transform = 'rotateY(30deg) rotateX(-50deg)';
        setTimeout(()=>{
            this.cubePosition(25, -50);
        }, 3000);
    }

    cubePosition(rotateX, rotateY){
        this.cubic.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }



    createEvents(){
       for(let elem of Array.from(this.btns)){
           elem.addEventListener('click', this.changePosition.bind(this));
       }
    }
}