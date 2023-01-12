import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriComponent as criteriRF } from './Projecte/Components/criteri/criteri.component';
import { RubricaComponent as rubrica } from './Projecte/Components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'criteri', component: criteriRF },
  { path: 'rubrica', component: rubrica },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
