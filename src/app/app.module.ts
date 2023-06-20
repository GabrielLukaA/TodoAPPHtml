import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRountingModule } from './app-rounting.module';
import { CategoriaComponent } from 'src/categoria/categoria.component';
import { TarefasModule } from 'src/tarefas/tarefas.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { PropriedadesModule } from './propriedades/propriedades.module';
import { UserRepository } from 'src/repositories/user.repository';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule,
    CategoriaModule,
    TarefasModule,
    PropriedadesModule
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
