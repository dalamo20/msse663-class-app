import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { SizePipe } from "../../pipes/SizePipe/size.pipe";

interface PizzaEntity {
    size: SizePipe;
    toppings: string[];
  }

interface PizzaResponse {
    msg: string;
    pizzas: PizzaEntity[];
  }

  @Injectable({
    providedIn: 'root',
  })
  export class PizzasService {
    constructor(private http: HttpClient) {}
  
    getPizzas(): Observable<PizzaEntity[]> { 
      return this.http
        .get<PizzaResponse>('/api/pizzas')
        .pipe(map((data) => data.pizzas));
    }
  }