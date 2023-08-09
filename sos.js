class Barco {
    constructor(modelo, tamanho, cor, potencia) {
        this.modelo  =  modelo;
        this.tamanho = tamanho;
        this.cor = cor;
        this.potencia = potencia;

    }
}

class Ficha {
    mostrarfichtecnica(obj) {
        console.log("Modelo: " + obj.modelo);
        console.log("tamanho: " + obj.tamanho);
        console.log("cor: " + obj.cor);
        console.log("potencia: " + obj.potencia);
    }
}

let lancha = new Barco("lancha", "pequeno", "preto", "20.000hp");
let Veleiro = new Barco("Veleiro", "medio", "branco", "22hp");
let Trawler = new Barco("Trawler", "medio", "branco", "300hp");
let Navio = new Barco("Navio", "grande", "preto", "1400hp");
let Iate = new Barco("Iate", "grande", "azul", "1015hp");
let Pesqueiro = new Barco("pesqueiro", "pequeno", "azul", "375hp");
let Bote = new Barco("Bote", "pequeno", "laranja", "70hp");
let Caiaque = new Barco("Caiaque", "pequeno", "verde", "50hp");
let Escuna = new Barco("Escuna", "medio", "laranja", "250hp");
let Canoa = new Barco("Canoa", "pequeno", "madeira", "15hp");

let sos = new Ficha();
sos.mostrarfichtecnica(lancha);
sos.mostrarfichtecnica(Veleiro);
sos.mostrarfichtecnica(Trawler);
sos.mostrarfichtecnica(Navio);
sos.mostrarfichtecnica(Iate);
sos.mostrarfichtecnica(Pesqueiro);
sos.mostrarfichtecnica(Bote);
sos.mostrarfichtecnica(Caiaque);
sos.mostrarfichtecnica(Escuna);
sos.mostrarfichtecnica(Canoa);