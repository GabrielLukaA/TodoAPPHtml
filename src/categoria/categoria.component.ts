import { Component, OnInit } from "@angular/core";
@Component({
templateUrl: './categoria.component.html',
})
export class CategoriaComponent implements OnInit {

    nomeCategoria: string
    categorias: string []=[]; 

cadastraCategoria(): void{
    console.log("Cadastrando Categoria");
    console.log(this.nomeCategoria)
    localStorage.setItem("Categorias",JSON.stringify(this.nomeCategoria))
}
ngOnInit():void {
    console.log("Categorias Iniciado")
    let localStorageValor = localStorage.getItem('categorias');
    if (!localStorageValor){
    localStorageValor='[]'
}
this.categorias = JSON.parse(localStorageValor);
}
}