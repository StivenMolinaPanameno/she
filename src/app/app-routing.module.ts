import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [

  {
    path: 'tulipanes',
    loadChildren: ()=> import('./pages/tulipanes/tulipanes.module').then(m=>m.TulipanesModule),
  },
  {
    path: '**',
    redirectTo: 'tulipanes'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
