import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRountingModule } from './app-rounting.module';
import { CategoriaComponent } from 'src/categoria/categoria.component';
import { TarefasModule } from 'src/tarefas/tarefas.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { PropriedadesModule } from './propriedades/propriedades.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';

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
    PropriedadesModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
