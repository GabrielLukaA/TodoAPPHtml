import { Component, OnInit } from "@angular/core";

interface Tarefa{
    nome: string;
    categoria: string;
}
@Component({
template: "./tarefas.component.html"
})
export class TarefasComponent implements OnInit{

        tarefa = "";
        



        cadastraTarefas(): void {


        }

getTarefas(categoria:string):Tarefa []{
    return this.tarefas.filter(tarefaCadastrada) => 
}


ngOnInit(): void {
    
}
}