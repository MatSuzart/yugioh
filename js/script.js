let log = new Log(document.querySelector('.log'));

let monsterOne = new Player('Mago Negro');
let monsterTwo = new Player('Dragão Branco');

const stage =  new Stage(
    monsterOne,
    monsterTwo,
    document.querySelector('.#MonsterOne'),
    document.querySelector('.#MonsterTwo'),
    log
);

stage.start();
