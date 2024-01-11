import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { NgConfirmService } from 'ng-confirm-box';
import { AppearanceAnimation, ButtonLayoutDisplay, ButtonMaker, ConfirmBoxInitializer, DialogInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { contact } from 'src/app/contact';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
closeAll: any;

constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private contactService: ContactService,
  private dialog: MatDialog,
  private fb: FormBuilder,

) {}


public delete(id: number) {

  if (confirm("Are you sure you want to delete this user?")) 


  this.contactService.delete(id).subscribe(
    () => {
      console.log('Contact deleted successfully.');
     // Refresh the contact list or perform any necessary actions.
    },
    error => {
      console.error('Error deleting contact', error);
    }
  );
}
  
  closeDialog() {
    this.dialog.closeAll();
  
  }
 

}
  



  

