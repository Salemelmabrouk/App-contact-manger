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


/* delete(id: number) {
    this.confirmService.showConfirm("Are you sure want to Delete? contact with id: ${id}",
     () => {
     
        if (confirm("Are you sure you want to delete this user?")) {
          this.contactService.delete(id).subscribe(
            res => {
              console.log(res);
             
            },
            error => {
              console.error('Error deleting contact', error);
            }
          );
        }
 
      
    },
    () => {
      this.dialog.closeAll();
    })
  }*/

  public logData() {
    console.log('Data:', this.data);
  }

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
 



/* 
  delete(): void {
    if (this.data && this.data.id) {
      console.log(`Deleting contact with id: ${this.data.id}`);
      this.contactService.delete(this.data).subscribe(
        () => {
          console.log('Contact deleted successfully.');
    
        },
        error => {
          console.error('Error deleting contact', error);
        }
      );
    } else {
      console.error('Invalid data or missing id for deletion');
    }
  } */

/* 
  public delete(id: number) {
     {
      this.contactService.delete(id).subscribe(
        res => {
          console.log(res);
        
        },
        error => {
          console.error('Error deleting contact', error);
        }
      );
    }
  } */

}
  



  

