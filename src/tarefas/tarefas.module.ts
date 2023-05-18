import { NgModule } from "@angular/core";
import { TarefasComponent } from "./tarefas.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[TarefasComponent 
    ],
    imports: [
      BrowserModule,
      FormsModule
      
      ],
      providers: [],
      bootstrap: []
})

export class TarefasModule{

}