import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";

interface Tarefa {
  nome: string;
  categoria: string;
  propriedades: any[]
}
@Component({
  templateUrl: "./tarefas.component.html"
})
export class TarefasComponent implements OnInit {

posicaoATrocar : number;
  categorias: string[];
  tarefas: Tarefa[] = [];

  tarefa: Tarefa = {
    nome: '',
    categoria: '',
    propriedades: null
  }
  cadastrarTarefa() {


    const tarefa: Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria,
      propriedades:this.tarefa.propriedades
    }
    this.tarefa.nome = ''
    this.tarefas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  removerTarefa(indice: number) {

    this.tarefas.splice(indice, 1)
    localStorage.removeItem("Tarefas");
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  ngOnInit() {

    const listaCategorias = localStorage.getItem('Categorias');
    this.categorias = JSON.parse(listaCategorias);
    console.log(this.categorias)

    console.log(listaCategorias)
    const tarefas = localStorage.getItem('Tarefas');
    if (tarefas) {
      this.tarefas = JSON.parse(tarefas);
    }
  }
  alterarTarefa(tarefa: Tarefa): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  atualizarTarefaDrop(tarefa: Tarefa) {
    let indice = this.tarefas.indexOf(tarefa)
    let removido = this.tarefas.splice(indice, 1)[0]
    console.log(indice, removido, this.posicaoATrocar)
    this.tarefas.splice(this.posicaoATrocar, 0, removido)
    tarefa.categoria = JSON.parse(localStorage.getItem("CatDrop"));
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas))
    this.posicaoATrocar = null;
  }
  pegarPosicao(tarefa : Tarefa){
   this.posicaoATrocar =  this.tarefas.indexOf(tarefa)
  }
  atualizarCat(categoria: String) {
    localStorage.setItem("CatDrop", JSON.stringify(categoria))
  }
}
