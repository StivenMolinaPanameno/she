import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ForyouComponent } from './foryou/foryou.component';
import { TodosComponent } from '../todos/todos.component';
import { TouchHereComponent } from '../touch-here/touch-here.component';
import { ImageComponent } from '../image/image.component';
import { MoreComponent } from '../more/more.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'todos', component: TodosComponent},
      {path: 'touch-here', component: TouchHereComponent},
      {path: 'you', component: MoreComponent},
      {path: 'image/:codigo', component: ImageComponent},
      {path: ':id', component: ForyouComponent},
      {path: '**', redirectTo: 'todos'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TulipanesRoutingModule { }
