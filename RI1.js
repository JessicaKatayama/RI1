const homemDeFerro = {
    nome: 'Tony Stark',
    codinome: 'Homem de ferro',
    armaPrincipal:'armadura',
    armaSecundaria:'jarvis',
    velocidade:80,
    forca: 70,
    resistencia:80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Velocidade: ' + this.velocidade + '\n'
            + 'Força: ' + this.forca + '\n'
            + 'Resistencia: ' + this.resistencia + '\n'
    }

}

const thor = {
nome: "Thoreto",
codinome: "Deus do Trovão",
armaPrincipal: "Martelo",
armaSecundaria: "Trovão",
velocidade: 75,
forca: 98,
resistencia: 90,
descricao: function () {
return "Nome do personagem: " + this.nome + "\n"
+ "Codinome do personagem: " + this.codinome + "\n"
+ "Arma principal: " + this.armaPrincipal + "\n"
+ "Arma secundaria: " + this.armaSecundaria + "\n"
+ "Nível de força: " + this.forca + "\n"
+ "Nível de velocidade: " + this.velocidade + "\n"
+ "Nível de resistência: " + this.resistencia + '\n';
}
};

const thanos = {
nome: "Thanos",
codinome: "Roxão do mal",
armaPrincipal: "Manopla",
armaSecundaria: "Joias",
velocidade: 65,
forca: 100,
resistencia: 95,
descricao: function () {
return "Nome do personagem: " + this.nome + "\n"
+ "Codinome do personagem: " + this.codinome + "\n"
+ "Arma principal: " + this.armaPrincipal + "\n"
+ "Arma secundaria: " + this.armaSecundaria + "\n"
+ "Nível de força: " + this.forca + "\n"
+ "Nível de velocidade: " + this.velocidade + "\n"
+ "Nível de resistência: " + this.resistencia + '\n';
}
};

const personagens = [homemDeFerro, thor, thanos];
const vilao = personagens[2];

for (let i =0; i<personagens.length-1; i++){
    
    let heroi = personagens[i];
    let mediaHeroi = (heroi.forca + heroi.resistencia + heroi.velocidade)/ 3
    let mediaVilao = (vilao.forca + vilao.resistencia + vilao.velocidade)/ 3

    console.log('Batalha: '+ heroi.codinome + ' VS ' + vilao.codinome);
    console.log('--Descrição Herói--');
    console.log(heroi.descricao());
    console.log('--Descrição do Vilão--');
    console.log(vilao.descricao());
    console.log('--Resultado da Batalha--');
    

    if (mediaHeroi > mediaVilao){
        console.log(heroi.codinome + " Venceu")
    }
    else if (mediaHeroi < mediaVilao){
        console.log(vilao.codinome + " Venceu")
    }
    else{
        console.log("Empate")
    }

    console.log('------------------------');

}

