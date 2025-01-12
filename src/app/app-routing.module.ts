import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasComponent } from './datas/datas.component';

const routes: Routes = [{path:"data", component:DatasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
