import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ForyouComponent } from './foryou/foryou.component';
import { TodosComponent } from '../todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {path: ':id', component: ForyouComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TulipanesRoutingModule { }
