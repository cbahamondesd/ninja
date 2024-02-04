class Ninja{
    nombre;
    salud;
    velocidad;
    fuerza;

    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log("Nombre de Ninja : " + this.nombre);
    }

    showStats(){
        console.log("Nombre, fuerza, velocidad y salud de Ninja : " +  this.nombre + "," + this.fuerza + "," + this.velocidad + "," + this.salud);
    }

    drinkSake(){
        let resultado = this.salud + 10;
        this.salud = resultado;
        console.log("Nuevo valor salud ninja : " + this.salud);
        
    }
}
let vsalud = 0;
const ninja1 = new Ninja("Hyabusa", vsalud);
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
