class vehiculo{
    
    constructor (p1, p2, p3) {
        this.marca = p1;
        this.modelo = p2;
        this.año = p3;

    }
    obtenerInformacion (){
        document.write(`Hola soy un vehiculo de marca, ${this.marca} modelo ${this.modelo} 
            del año ${this.año}`); }


    }

    class Automovil extends vehiculo () {
       color;
        precio;

       constructor (p1, p2, p3, p4, p5,) {
           super(p1, p2, p3);
            this.color = p4;
            this.precio = p5;

        }
        obtenerInformacion (){
            document.write(`${super.obtenerInformacion()} de color ${this.color}`);}
    } 
         const miAutito = new Automovil("Fiat", "Cronos","2022", "rojo", "15000000")

  miAutito.obtenerInformacion
    

