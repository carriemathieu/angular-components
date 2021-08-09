import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

// whenever user goes to /elements (first '/elements' comes from approuting), show elementshomecomponent
const routes: Routes = [
  {
    path: '', 
    component: ElementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
