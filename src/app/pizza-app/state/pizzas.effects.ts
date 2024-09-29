import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { PizzaService } from 'src/app/shared/services/pizzas.service';
import {
  loadPizzaPresets,
  loadPizzaPresetsFailure,
  loadPizzaPresetsSuccess,
  savePizzas,
  savePizzasFailure,
  savePizzasSuccess,
} from './pizzas.actions';

@Injectable({ providedIn: 'root' })
export class PizzasEffects {
  // Load pizza presets effect
  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPizzaPresets),
      switchMap(() =>
        this.pizzaService.getPizzaPresets().pipe(
          map(({ pizzas }) => loadPizzaPresetsSuccess({ pizzas })),
          catchError((error) => of(loadPizzaPresetsFailure({ error })))
        )
      )
    )
  );

  // Save pizzas effect
  savePizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(savePizzas),
      mergeMap((action) =>
        this.pizzaService.savePizzas(action.pizzas).pipe(
          map((pizzas) => savePizzasSuccess({ pizzas })),
          catchError((error) => of(savePizzasFailure({ error })))  
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pizzaService: PizzaService
  ) {}
}
