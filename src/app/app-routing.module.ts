import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ResultComponent } from './pages/result/result.component';
import { RulesComponent } from './pages/rules/rules.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
