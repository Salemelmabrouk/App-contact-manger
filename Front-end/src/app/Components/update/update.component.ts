import { Component, Inject, OnInit,inject } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contact } from 'src/app/contact';
import { ContactlistComponent } from '../contactlist/contactlist.component';
import { MatchPasswordDirective } from '../shared/match-password.directive';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
  
})
export class UpdateComponent implements OnInit {
contact: any;
closeDialog: any;

  id!: number;
  updateForm!: FormGroup;
  submitted=false
  formControl: any;
  isSubmitted = false;

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private contactService: ContactService,private dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit(): void {
  /*   this.updateForm = this.fb.group({
      id: [this.data.id || ''],
       user_Name: [this.data.user_Name || ''],
       email:[this.data.email|| '',],
       password: [this.data.password ||''],

       phone:[this.data.phone||''],
       gender:[this.data.gender ||''],
     }); */
   

     this.updateForm = this.fb.group({
      id: [this.data.id || ''],
      user_Name: [this.data.user_Name || '', Validators.required],
      email: [this.data.email || '', [Validators.required, Validators.email]],
      password: [this.data.password || '', Validators.minLength(8)],
      phone: [this.data.phone || ''],
      gender: [this.data.gender || ''],

      
     
    });
  }



public update(data:any): void {
 

  this.contactService.update(data.id, this.updateForm.value).subscribe(res => {
    this.isSubmitted = true;
    this.data = res;
    console.log(this.data);
    console.log('User Registered successfully!!');
    this.closeDialog()
  
  },
  (error) => {
    console.error('Error adding contact', error);

  }
  
  );
  this.dialog.closeAll();
  this.closeDialog()
} 




getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :

this.formControl.hasError('minLength') ? 'min length password =8' :'';
} 

submit() {
this.update(contact)
this.submitted = true;

}

onNoClick(): void {
this.dialogRef.close();
}



}
