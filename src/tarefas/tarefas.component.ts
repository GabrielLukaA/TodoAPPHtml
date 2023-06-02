import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";

interface Tarefa {
  nome: string;
  categoria: string;
}
@Component({
  templateUrl: "./tarefas.component.html"
})
export class TarefasComponent implements OnInit {


  categorias: string[];
  tarefas: Tarefa[] = [];

  tarefa: Tarefa = {
    nome: '',
    categoria: ''
  }
  cadastrarTarefa() {


    const tarefa: Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
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
    tarefa.categoria = JSON.parse(localStorage.getItem("CatDrop"));
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas))
  }
  atualizarCat(categoria: String) {
    localStorage.setItem("CatDrop", JSON.stringify(categoria))
  }
}
