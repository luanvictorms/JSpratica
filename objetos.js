//Objeto

const pessoa = {
    nome:"luan",
    cansaco: 0,
    isOn: true,
    andar: function(){
        if(cansaco == 0 && cansaco <10 || pessoa.isOn == true){
            cansaco = 10;
            console.log("Voce andou bastante!!!!");
            console.log("_______")
            console.log("[ O  O ]")
            console.log("[  <>  ]")
            console.log(" ------")
            pessoa.isOn = !pessoa.isOn;
        }else{
            console.log("Voce esta cansado!!")
            console.log("Descanse um pouco")
            
        }
    },
    descansar: function(){
        if(pessoa.isOn == false){
            cansaco = 0;
        console.log("_______     ZZZZ")
            console.log("[ O  O ]")
            console.log("[   -  ]")
            console.log(" ------")
        console.log("Voce Descansou!!");
        }else{
            console.log("Voce pode andar! voce não esta cansado...");
        }
    pessoa.isOn = true;
    }
}
cansaco = 0;
console.log(pessoa.nome);
console.log("Seu indice de cansaco e igual a: ", cansaco);

