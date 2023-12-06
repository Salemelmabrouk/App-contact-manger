import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './Components/contactlist/contactlist.component';
import { AddcontactComponent } from './Components/addcontact/addcontact.component';
import { PopupComponent } from './Components/popup/popup.component';
import { UpdateComponent } from './Components/update/update.component';
import { HomeComponent } from './Components/shared/home/home.component';

const routes: Routes = [
                         {path:'list',component:ContactlistComponent},
                         {path:'create',component:AddcontactComponent},
                         {path:'pop',component:PopupComponent},
                         {path:'update',component:UpdateComponent},
                         {path:'Home',component:HomeComponent},
                         { path: '', component: HomeComponent, pathMatch: 'full' }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
