import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmapComponent} from "./component/emap/emap.component";

const routes: Routes = [
  {path: 'login', component: EmapComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
