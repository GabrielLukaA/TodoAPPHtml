import { NgModule } from "@angular/core";
import { PropriedadesComponent } from "./propriedades.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [PropriedadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: []
})

export class PropriedadesModule {

}