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



  usuariosDoing: Tarefa[] = [];
  usuariosTodo: Tarefa[] = [];
  usuariosDone: Tarefa[] = [];
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
  alterar(tarefa: Tarefa, indice: number): void {

    if (tarefa.categoria == 'to-do') {
      /*  this.usuarios.splice(indice, 1)
        localStorage.removeItem("Tarefas");
        localStorage.setItem("Tarefas", JSON.stringify(this.usuarios));
        this.usuarios.splice(indice, 1)
        localStorage.removeItem("UsuariosDoing");
        localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing));
        this.usuarios.splice(indice, 1)
        localStorage.removeItem("UsuariosDone");
        localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone));*/
      tarefa.categoria = 'to-do'
      this.usuariosTodo.push(tarefa)
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo))
    }
    else if (tarefa.categoria == 'doing') {
      /*this.usuarios.splice(indice, 1)
      localStorage.removeItem("Tarefas");
      localStorage.setItem("Tarefas", JSON.stringify(this.usuarios));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosTodo");
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDone");
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone));*/
      tarefa.categoria = 'doing'
      this.usuariosDoing.push(tarefa)
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing))
    }
    else if (tarefa.categoria == 'done') {
      /*this.usuarios.splice(indice, 1)
     localStorage.removeItem("Tarefas");
      localStorage.setItem("Tarefas", JSON.stringify(this.usuarios));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDoing");
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosTodo");
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo));*/
      tarefa.categoria = 'done'
      this.usuariosDone.push(tarefa)
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone))
    }

  }
}