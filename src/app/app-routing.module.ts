import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroListarComponent } from './libro-listar/libro-listar.component';
const routes: Routes = [
  {path: '', component:LibroListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
