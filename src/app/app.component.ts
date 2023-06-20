import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserRepository } from 'src/repositories/user.repository';


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
  title= "teste-app"

constructor(
private userRepository:UserRepository
) {
  console.log(this.userRepository.getUsers())
// this.userRepository = userRepository;
// this.title = this.userRepository.getHello();
}


}
