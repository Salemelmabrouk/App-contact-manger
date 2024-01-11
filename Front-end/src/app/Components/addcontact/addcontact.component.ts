import { Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter,inject, Inject } from '@angular/core';
import { contact } from 'src/app/contact';
import { AbstractControl, FormBuilder, NgForm, Validators } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],


 

})
export class AddcontactComponent implements OnInit {
  contact: contact = new contact();

formControl: any;
  addForm!: FormGroup;
submitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ContactService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}


     
    
    ngOnInit() {
      this.addForm = this.fb.group({
        id: [this.data?.id || ''],
        user_Name: [this.data?.user_Name || '', Validators.required],
        email: [this.data?.email || '', [Validators.required, Validators.email]],
        password: [this.data?.password || '',Validators.required, Validators.minLength(8)],
        phone: [this.data?.phone || '', Validators.required],
        gender: [this.data?.gender || '', Validators.required],
      });
    
 
    }



  public add(): void {
    this.contactService.add(this.addForm.value).subscribe(res => {
      this.data = res;
      console.log(this.data);
      console.log('User Registered successfully!!');
      this.getContactList();
      this.onReset()

    },
    (error) => {
      console.error('Error adding contact', error);
  
    });

   this.getContactList();
   this.dialog.closeAll();
  }


  
  onSubmit() {
    this.submitted = true;

 
    if (this.addForm.invalid) {
        return;
    }


}

onReset() {
  this.submitted = false;
  this.addForm.reset();
}

  getErrorMessage(controlName: string) {
    const control = this.addForm.get(controlName);
    return control?.hasError('required') ? 'Required field' : control?.hasError('email') ? 'Not a valid email' : '';
    this.addForm.markAllAsTouched();
  }

  getContactList() {

  }


  closeDialog() {
    this.dialog.closeAll();
    this.getContactList();
  }


 
  }



function submitted() {
  throw new Error('Function not implemented.');
}

