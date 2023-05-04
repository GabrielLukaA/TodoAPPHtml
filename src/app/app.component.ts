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

  }
  removerUsuario(indice: number) {
    this.usuarios.splice(indice, 1)
    localStorage.removeItem("Usuários");
    localStorage.setItem("Usuários", JSON.stringify(this.usuarios));
  }
  ngOnInit() {
    const tarefas = localStorage.getItem('Usuários');
    if (tarefas) {
      this.usuarios = JSON.parse(tarefas);
    }
  }
  salvar(usuario : Pessoa): void{
    this.salvarLocalStorage()
  }
  salvarLocalStorage(){
    localStorage.setItem("Usuários", JSON.stringify(this.usuarios)); 
  }
}
