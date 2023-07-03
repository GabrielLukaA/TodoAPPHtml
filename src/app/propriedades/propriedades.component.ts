import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent implements OnInit {

  id: string = "";
  name: string = "";
  password: string = "";
  email: string = "";
  private users: User[] = [];
  user: User = {
    id: '',
    name: '',
    password: '',
    email: '',
    groups: '',
    cardPermissions: [],
    propertiesPermissions: []

  };
  url: string  = "http://localhost:4300/usuarios/";

  fazRequisicao(){
    const usuario = {
      id:this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      groups: 'N/A',
      cardPermissions: 'Move, Edit, Add, Delete',
      propertiesPermissions: 'Edit, Add, Delete'

    };
    async function createUser() {
      try {
        const response = await fetch('http://localhost:4300/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Usuário criado:', data);
        } else {
          console.error('Ocorreu um erro:', response.status);
        }
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    }
    createUser();

    this.id = ''
    this.name = ''
    this.email = ''
    this.password = ''
  }
  
  constructor(
    private userRepository: UserRepository
  ) {
    userRepository.getUsers().subscribe({
      next: (value) =>{
        this.users = value;
        // console.log("Oi user  ")
        // console.log(this.users)
      }
    })

  }
  ngOnInit() {
  }

  
}
