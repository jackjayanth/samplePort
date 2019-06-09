import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: MainComponent
  },
  {
    path: 'sample1',
    component: MainComponent
  },
  {
    path: 'sample2',
    component: MainComponent
  },
  {
    path: 'sample3',
    component: MainComponent
  },
  {
    path: 'sample4',
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
