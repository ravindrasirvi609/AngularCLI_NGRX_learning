import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as CounterActions from "src/app/state/counter/counter.action";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styles: [],
})
export class CounterComponent {
  counter$: Observable<number> = this.store.select("counter");

  increment() {
    this.store.dispatch(CounterActions.increment());
  }
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
  resetSate() {
    this.store.dispatch(CounterActions.reset());
  }

  constructor(public store: Store<{ counter: number }>) {}
}
