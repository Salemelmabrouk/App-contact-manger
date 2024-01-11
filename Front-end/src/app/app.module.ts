import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './Components/contactlist/contactlist.component';
import { AddcontactComponent } from './Components/addcontact/addcontact.component';
import { FormsModule,FormGroup}   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";

import {MatStepperModule} from '@angular/material/stepper';
import {NgConfirmModule} from 'ng-confirm-box'

import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableModule } from 'primeng/table';
import {MatSortModule} from '@angular/material/sort';
import {NgForm} from '@angular/forms';
import { DialogConfigModule, NgxAwesomePopupModule, ToastNotificationConfigModule} from '@costlydeveloper/ngx-awesome-popup';
import { SortDirective } from './Components/contactlist/sort.directive'

import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';


import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from './Components/update/update.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ViewComponent } from './Components/view/view.component';
import { ConfirmBoxConfigModule } from '@costlydeveloper/ngx-awesome-popup';
import { from } from 'rxjs';
import { MatchPasswordDirective } from './Components/shared/match-password.directive';
import { HomeComponent } from './Components/shared/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    AddcontactComponent,
   
    UpdateComponent,
        DeleteComponent,
        ViewComponent,
        MatchPasswordDirective,
        HomeComponent,SortDirective,
        
   
  ],
  imports: [MatTableModule,DialogConfigModule, NgxAwesomePopupModule, ToastNotificationConfigModule,MatDialogModule,TableModule,
    BrowserModule,MatFormFieldModule,MatIconModule,MatToolbarModule,MatCardModule,MatInputModule,MatSliderModule,MatTableModule,MatSortModule,NgConfirmModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatButtonModule,MatButtonToggleModule,MatChipsModule,MatCommonModule,MatDialogModule,
     BrowserAnimationsModule,MatCheckboxModule,FlexLayoutModule,MatStepperModule,MatBadgeModule,MatBottomSheetModule,MatTabsModule,MatPaginatorModule,MatRadioModule,FormsModule,

 

    
  ],
  providers: [],
  bootstrap: [AppComponent],



})
export class AppModule { }
