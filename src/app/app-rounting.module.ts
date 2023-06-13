import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/categoria/categoria.component";
import { TarefasComponent } from "src/tarefas/tarefas.component";
import { PropriedadesComponent } from "./propriedades/propriedades.component";

const rotas: Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent

    }
    , {
        path: 'tarefas',
        component: TarefasComponent

    },
    {
    path: 'propriedades',
    component: PropriedadesComponent

},
    {
        path: " ",
        redirectTo: 'tarefas',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})

export class AppRountingModule {

}