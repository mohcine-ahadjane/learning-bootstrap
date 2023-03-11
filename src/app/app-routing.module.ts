import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BslearningComponent} from "./components/bslearning/bslearning.component";

const routes: Routes = [
  {
    path: "bsLearning", component: BslearningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
