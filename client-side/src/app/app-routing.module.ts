import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-new-list',component:AddNewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
