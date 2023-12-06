import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  contact: any;
closeDialog: any;

  id!: number;
  updateForm!: FormGroup;



  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private contactService: ContactService,private dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: [this.data.id || ''],
       user_Name: [this.data.user_Name || ''],
       email:[this.data.email|| ''],
       password: [this.data.password ||''],
       phone:[this.data.phone||''],
       gender:[this.data.gender ||''],
     });
   
  }

formControl = new FormControl('', [
Validators.required

]);

 public update(data:any): void {
 

  this.contactService.update(data.id, this.updateForm.value).subscribe(res => {
    
    this.data = res;
    console.log(this.data);
    console.log('User Registered successfully!!');
  
  },
  (error) => {
    console.error('Error adding contact', error);

  });
  this.dialogRef.close();
} 




getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {

}

onNoClick(): void {
this.dialogRef.close();
}



}


