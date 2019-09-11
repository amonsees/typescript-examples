


export class Cat  {
    
    publi spe
    public delayedSpeak() {
        setTimeout(this.speak, 100);
    }

}

const cat = new Cat('Quiqley', 4);

cat.delayedSpeak();

 
