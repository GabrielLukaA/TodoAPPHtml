import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from 'src/models/users/user';

interface Tarefa {
  nome: string;
  categoria: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = "teste-app"

private userId: string = 'joao.silva';
private users:User[] = [];
user: User | undefined;

constructor(
  private userRepository: UserRepository
){
  this.users = this.userRepository.getUsers();
  this.getUsuarioLogado();
  console.log(this.user)
}

private getUsuarioLogado(): User {
   return this.users.find((user) => {
    return user.id === this.userId
   } );
}
adicionarTarefa():void{
 if(!this.hasPermission('edit')){
  alert("Não pode cadastrar");
  return;
 }
 alert("Pode Cadastrar")
}


private hasPermission(permission:string):Boolean{
  return this.user.cardPermissions.some((cardPermission) => {
return cardPermission === permission;
  });
}
}
