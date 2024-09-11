import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { SizePipe } from './shared/pipes/SizePipe/size.pipe';
import { NavBarComponent } from './shared/components/NavBarComponent/nav-bar.component';
import { PizzasService } from './shared/services/PizzasService/pizzas.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PizzaAppComponent, SizePipe, NavBarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ PizzasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
