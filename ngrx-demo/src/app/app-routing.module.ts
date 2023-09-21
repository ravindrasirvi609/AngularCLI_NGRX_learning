import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./components/counter/counter.component";
import { LoginComponent } from "./core/login/login.component";

const routes: Routes = [
  { path: "counter", component: CounterComponent },
  { path: "", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
