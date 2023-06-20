import { Component, OnInit } from '@angular/core';

interface Propriedade{
 titulo:string;
 tipo:string;
 descricao:any;
 opcoes?:string[];
}
@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent implements OnInit {

  listaPropriedades:Propriedade[] = [];

  ngOnInit():void {
    
      const propriedadesInit = localStorage.getItem('Propriedades');
      if (propriedadesInit) {
          this.listaPropriedades = JSON.parse(propriedadesInit);
      }
  
  }


  propriedade: Propriedade = {
    titulo: '',
    tipo: '',
    descricao: null
  }
  cadastraPropriedade(){
    const propriedade : Propriedade = {
      titulo : this.propriedade.titulo,
      tipo : this.propriedade.tipo,
      descricao: null
      
    }
    

}
removerPropriedade(propriedade :Propriedade, indice: number) {
  this.listaPropriedades.splice(indice, 1)
  localStorage.removeItem("Propriedades");
  localStorage.setItem("Propriedades", JSON.stringify(this.listaPropriedades));
}
}