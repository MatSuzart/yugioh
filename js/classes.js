class Player {

    _life = 10;
    maxLife = 10;
    attack = 0;
    defence = 0;

    constructor(name){
        this.name = name;   
    }

    get life () {
        return this._life;
    }

    set life(newlife){
        this._life = newlife <0 ? 0 : newlife;
    }
}


class PlayerOne extends Character {
    constructor(name){
        super(name);

    this.life = 100;
    this.attack = 10;
    this.defence = 10;
    this.maxLife = this.life;
    }
}


class PlayerTwo extends Character {
    constructor(name){
        super(name);

    this.life = 100;
    this.attack = 20;
    this.defence = 5;
    this.maxLife = this.life;
    }
}



class MonsterOne extends Character {
    constructor(){
        super('Mago Negro');
        this.life = 40;
        this.attack = 4;
        this.defence = 4;
        this.maxLife = this.life;
    }
}


class MonsterTwo extends Character {
    constructor(){
        super('Dragão Branco');
        this.life = 40;
        this.attack = 16;
        this.defence = 7;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(monsterOne, monsterTwo, monsterOneZone,monsterTwoZone){
        this.monsterOne = monsterOne;
        this.monsterTwo = monsterTwo;
        this.monsterOneZone = monsterOneZone;
        this.monsterTwoZone = monsterTwoZone;
        this.log = logObject;
    }


    start (){
        this.update();

        this.monsterOneZone.querySelect('.attack').addEventListener
        ('click', ()=> this.doAttack(this.monsterOne, this.monsterTwo));

        this.monsterTwoZone.querySelect('.attack').addEventListener
        ('click', ()=> this.doAttack(this.monsterTwo, this.monsterOne));
    }

    update (){
        //monster 1
        this.monsterOneZone.querySelect('.name').innerHTML = `${this.monsterOne.name} - ${this.monsterOne.life.toFixed(1)}HP`;
        let m1 = (this.monsterOne.life/this.monsterOne.maxLife) * 100;
        this.monsterOneZone.querySelect('.bar').style.width = `${m1}%`;

        //monster 2
        this.monsterTwoZone.querySelect('.name').innerHTML = `${this.monsterTwo.name} - ${this.monsterTwo.life.toFixed(1)}HP`;
        let m2 = (this.monsterOne.life/this.monsterOne.maxLife) * 100;
        this.monsterOneZone.querySelect('.bar').style.width = `${m2}%`;
    }

    doAttack (attacking, attacked){
        if(attacking.life <=0 || attacked.life <=0){
            this.log.addMessage('VOCÊ FOI OBLITERADO');
            return;
        }

        let attackFactor = (Math.random()*2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);


        let actualDefende = attacked.defense * defenseFactor;
        let actualAttack = attacking.attack * attackFactor;

        if(actualAttack > actualDefende){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacked.name} causou ${actualAttack.toFixed(2)}
             de dano em ${attacked.name}`);
        }else {
            this.log.addMessage(`${attacked.name} conseguiu defender`);
        }

        this.update();
    }
}

class Log {
    list = [];

    constructor(listZone){
        this.listZone = listZone;
    }

    addMessage(msg){
        this.list.push(msg);

    }
    render (){
        this.listZone.innerHTML = '';

        for( let i in this.list){
            this.listZone.innerHTML += `<li>${this.ist[i]}</li>`
        }
    }
}