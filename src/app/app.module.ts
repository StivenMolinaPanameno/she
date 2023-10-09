import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ForyouComponent } from './pages/tulipanes/foryou/foryou.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TouchHereComponent } from './pages/touch-here/touch-here.component';
import { ImageComponent } from './pages/image/image.component';
import { MoreComponent } from './pages/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ForyouComponent,
    SideBarComponent,
    TodosComponent,
    TouchHereComponent,
    ImageComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
