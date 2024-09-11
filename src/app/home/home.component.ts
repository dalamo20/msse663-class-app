import { Component } from "@angular/core";
import { PizzasService } from "../shared/services/PizzasService/pizzas.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
  })
  export class HomeComponent {
    title = 'home'
    readonly pizzas$ = this.pizzasService.getPizzas();

    constructor(private pizzasService: PizzasService) {}
  }