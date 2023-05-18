import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

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

}
