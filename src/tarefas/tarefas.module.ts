import { NgModule } from "@angular/core";
import { TarefasComponent } from "./tarefas.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRepository } from 'src/repositories/user.repository';


@NgModule({
  declarations: [TarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [
    UserRepository
  ],
  bootstrap: []
})

export class TarefasModule {

}