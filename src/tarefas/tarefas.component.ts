import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

interface Tarefa {
  nome: string;
  categoria: string;
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
    categoria: ''
  }
  cadastrarTarefa() {


      if (!this.hasPermission('Add')) {
        alert('Não pode cadastrar');
        return;
      } else {
      alert('Pode cadastrar');
    
    const tarefa: Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }
    this.tarefa.nome = ''
    this.tarefas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  }
  removerTarefa(indice: number) {

    if (!this.hasPermission('Remove')) {
      alert('Não pode remover');
      return;
    } else{ 
      alert('Pode remover');
    this.tarefas.splice(indice, 1)
    localStorage.removeItem("Tarefas");
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  }
  ngOnInit() {

    const listaCategorias = localStorage.getItem('Categorias');
    this.categorias = JSON.parse(listaCategorias);

    const tarefas = localStorage.getItem('Tarefas');
    if (tarefas) {
      this.tarefas = JSON.parse(tarefas);
    }
  }
  alterarTarefa(tarefa: Tarefa): void {
    if (!this.hasPermission('Edit')) {
      alert('Não pode editar');
      return;
    } else {
      alert(' pode editar');
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  }
  atualizarTarefaDrop(tarefa: Tarefa) {
    if (!this.hasPermission('MoveCard')) {
      alert('Não pode mover');
      return;
    } else {
      alert(' pode mover');
    let indice = this.tarefas.indexOf(tarefa)
    let removido = this.tarefas.splice(indice, 1)[0]
    console.log(indice, removido, this.posicaoATrocar)
    this.tarefas.splice(this.posicaoATrocar, 0, removido)
    tarefa.categoria = JSON.parse(localStorage.getItem("CatDrop"));
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas))
    this.posicaoATrocar = null;
    }
  }
  pegarPosicao(tarefa : Tarefa){
   this.posicaoATrocar =  this.tarefas.indexOf(tarefa)
  }
  atualizarCat(categoria: String) {
    localStorage.setItem("CatDrop", JSON.stringify(categoria))
  }


  // Att Prof

  private userId: string = '1';
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository
  ) {
    userRepository.getUsers().subscribe({
      next: (value) =>{
        this.users = value;
        // console.log("Oi user  ")
        // console.log(this.users)
        this.user = this.getUsuarioLogado();
      }
    })

  }

  hasPermission(permission: string): boolean {
    return this.user.cardPermissions.some((cardPermission) => {
      return cardPermission === permission;
    });
  }

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId
    }) as User;
  }

}
