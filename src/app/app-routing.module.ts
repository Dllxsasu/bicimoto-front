import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { PagproductosComponent } from './pagproductos/pagproductos.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
{
  path:'inicio',
  component: HomeComponent,
  pathMatch: 'full'
},

{
  path:'nosotros',
  component: NosotrosComponent,

},
{
  path:'ubicanos',
  component: UbicanosComponent,

},
{
  path:'productos',
  component: PagproductosComponent,

},
{
  path:'**',
  redirectTo: ''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
