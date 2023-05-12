import { NgModule } from "@angular/core";
import { CategoriaComponent } from "./categoria.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CategoriaComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})

export class CategoriaModule {

}