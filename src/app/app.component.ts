import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
interface Pessoa {
  nome: string;
  categoria: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  trueTodo: boolean = true;
  trueDoing: boolean = true;
  trueDone: boolean = true;
  usuariosDoing: Pessoa[]=[];
  usuariosTodo: Pessoa[]=[];
  usuariosDone: Pessoa[]=[];
  usuarios: Pessoa[] = [];

  pessoa: Pessoa = {
    nome: '',
    categoria: ''
  }
  cadastrarUsuario() {

    const usuario: Pessoa = {
      nome: this.pessoa.nome,
      categoria: this.pessoa.categoria
    
    }
    this.pessoa.nome = ''
    this.usuarios.push(usuario);
    localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
    if (usuario.categoria=="to-do"){
      this.usuariosTodo.push(usuario);
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo));
      if(this.usuariosTodo.length>1){
        this.trueTodo= false;
      }
    } else if (usuario.categoria=="doing"){
      this.usuariosDoing.push(usuario);
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing));

      if(this.usuariosDoing.length>1){
        this.trueDoing= false;
      }
    } else if (usuario.categoria=="done"){
      this.usuariosDone.push(usuario);
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone));
      if(this.usuariosDone.length>1){
        this.trueDone= false;
      }
    }

  }
  removerTarefa(indice: number) {

    this.usuarios.splice(indice, 1)
    localStorage.removeItem("Usuários");
    localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
  }
  ngOnInit() {
    const tarefas = localStorage.getItem('Usuários');
    if (tarefas) {
      this.usuarios = JSON.parse(tarefas);
    }
    const tarefasTodo = localStorage.getItem('UsuariosTodo');
    if (tarefasTodo) {
      this.usuariosTodo = JSON.parse(tarefasTodo);
    }
    const tarefasDoing = localStorage.getItem('UsuariosDoing');
    if (tarefasDoing) {
      this.usuariosDoing = JSON.parse(tarefasDoing);
    }
    const tarefasDone = localStorage.getItem('UsuariosDone');
    if (tarefasDone) {
      this.usuariosDone = JSON.parse(tarefasDone);
    }
  }
  alterar(usuario : Pessoa, indice : number): void{

    if(usuario.categoria=='to-do'){
    /*  this.usuarios.splice(indice, 1)
      localStorage.removeItem("Usuários");
      localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDoing");
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDone");
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone));*/
      usuario.categoria= 'to-do'
      this.usuariosTodo.push(usuario)
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo))
    } 
   else  if(usuario.categoria=='doing'){
      /*this.usuarios.splice(indice, 1)
      localStorage.removeItem("Usuários");
      localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosTodo");
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDone");
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone));*/
      usuario.categoria= 'doing'
      this.usuariosDoing.push(usuario)
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing))
    } 
   else  if(usuario.categoria=='done'){
      /*this.usuarios.splice(indice, 1)
     localStorage.removeItem("Usuários");
      localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosDoing");
      localStorage.setItem("UsuariosDoing", JSON.stringify(this.usuariosDoing));
      this.usuarios.splice(indice, 1)
      localStorage.removeItem("UsuariosTodo");
      localStorage.setItem("UsuariosTodo", JSON.stringify(this.usuariosTodo));*/
      usuario.categoria= 'done'
      this.usuariosDone.push(usuario)
      localStorage.setItem("UsuariosDone", JSON.stringify(this.usuariosDone))
    } 
     
}
}
