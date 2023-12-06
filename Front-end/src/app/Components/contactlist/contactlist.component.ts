import { Component, OnInit, ViewChild } from '@angular/core';
import { contact } from 'src/app/contact';
import { ContactService } from '../contact.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';
import { ViewComponent } from '../view/view.component';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer } from '@costlydeveloper/ngx-awesome-popup';
import { ConfirmBoxInitializer} from '@costlydeveloper/ngx-awesome-popup';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  
  dataSource!: MatTableDataSource<contact>;
  dataArray: any;
  contacts!: contact[];
  displayedColumns: string[] = ['id', 'user_Name', 'email', 'password', 'phone', 'gender', 'action'];
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  value = 'Clear me';

  contact: contact = new contact;


  email?: String;
  password?: String;
  phone?: Number;
  gender!: String;
  id?: number;
  error: any;
  inputValue: string | undefined;


  constructor(private contactService: ContactService, private dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.getContactList();

  
  }


  openaddForm() {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      height: '520px',
      width: '360px',
    });
  
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result === true) {
   
        }
      },
      (error) => {
        console.error('Error updating contact', error);
    
      }
    );
    this.getContactList();
  }

  clearInput() {
    this.inputValue ='';
  }

/*

  delete(id:number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '150px',
      width: '450px',
    });
  
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result === true) {
          this.getContactList();
        }
      },
      (error) => {
        console.error('Error updating contact', error);
       
      }
    );
    this.getContactList();
  }




  del(id:number) {

    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '200px',
      width: '450px',
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      },
      
    }); 
  

    
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result === true) {
          this.delete(id);
        }
      },
      (error) => {
        console.error('Error updating contact', error);
       
      }
    );
    this.getContactList();
  }
*/
 


  



  public getContactList() {
    this.contactService.getContactList().subscribe(
      (res: any) => {
        console.log(res);
        this.contacts = res;
        this.dataSource = new MatTableDataSource<contact>(this.contacts);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
        console.log('DataSource:', this.dataSource);
      },
      (error: any) => {
        console.error('Error getting contact list', error);
      }
    );
  }

 public delete(id: number) {
   if (confirm("Are you sure you want to delete this user?")) {
      this.contactService.delete(id).subscribe(
        res => {
          console.log(res);
          this.getContactList();
        },
        error => {
          console.error('Error deleting contact', error);
        }
      );
    }
  }  
/*   public update(id: any) {
 
      this.contactService.update(id).subscribe(
        next: (res) => {
this.dialog.reset();
         this.dialog.closeAll;
          this.getContactList();
        },
        error => {
          console.error('Error deleting contact', error);
        }
      );
    }


    

    public delete(id: number) {
      this.contactService.delete(id).subscribe(
        () => {
          console.log('Contact deleted successfully.');
          this.getContactList(); // Refresh the contact list or perform any necessary actions.
        },
        error => {
          console.error('Error deleting contact', error);
        }
      );
    
    } */

 public update(element:any): void {
     { 
        const dialogRef = this.dialog.open(UpdateComponent, {
          height: '520px',
          width: '360px',
          data: element 
        });
    
        dialogRef.afterClosed().subscribe(
          (result) => {
            if (result === true) {
       
            }
          },
          (error) => {
            console.error('Error updating contact', error);

          }
        );
      }
      this.getContactList();
      
        
       
      
    }

    openConfirmBox(id: number) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '250px',
        data: { message: 'Are you sure you want to delete this item?' }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
     
          this.id = id;
          this.delete(this.id);
        }
      });
    }
  


    public view(element:any): void {
      { 
         const dialogRef = this.dialog.open(ViewComponent, {
          height: '520px',
          width: '360px',
           data: element 
         });
     
         dialogRef.afterClosed().subscribe(
           (result) => {
             if (result === true) {
        
             }
           },
           (error) => {
             console.error('Error updating contact', error);
 
           }
         );
       
       }
       this.getContactList();
     }
  onSubmit() { 

    this.getContactList();   
  } 


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  Sortchange(sort: Sort) {
    if (sort.direction) {
      this.dataSource.sort = this.sort;
    }
  }
}


