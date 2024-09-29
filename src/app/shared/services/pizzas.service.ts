import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaEntity, PizzaSize } from 'api/lib/api-interfaces';

export interface PizzaForm {
  size: PizzaSize;
  toppings: string[];
}

export interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  // Fetch pizza presets from API
  getPizzaPresets(): Observable<PizzaResponse> {
    return this.http.get<PizzaResponse>('/api/pizzas/presets');
  }

  // Save pizzas to API
  savePizzas(pizzas: PizzaForm[]): Observable<PizzaEntity[]> {
    return this.http.post<PizzaEntity[]>('/api/pizzas', { pizzas });
  }
}
