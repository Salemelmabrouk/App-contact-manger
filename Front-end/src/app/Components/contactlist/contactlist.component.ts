import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
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
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ContactlistComponent implements OnInit {

  dataSource!: any ;

  dataArray: any;
  contacts!: contact[];
  displayedColumns: string[] = ['id', 'user_Name', 'email', 'password', 'phone', 'gender', 'action'];
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  value = 'Clear me';

  contact: contact = new contact;


  email?: String;
  password?: String;
  phone?: Number;
  gender!: String;
  id?: number;
  error: any;
  inputValue: string | undefined;
element: any;


  constructor(private contactService: ContactService, private dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.getContactList();
    this.dataSource.paginator = this.paginator;

  
  }


  openaddForm() {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      height: '520px',
      width: '360px',
    });
  
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result === true) {
          this.getContactList();
        } this.getContactList();
      }, 
      (error) => {
        console.error('Error updating contact', error);
    
      } 
    );
   
  }

  clearInput() {
    this.inputValue ='';
  }




  



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

 public delete(id: any) {
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
  }  getRowHeight(row: any, index: number): number {
    // You can set a fixed height or calculate it based on row content, for example:
    // return row.someProperty ? 30 : 20; // Set different heights based on row content
    return 10; // Set a fixed height (adjust this value as needed)
  }


 public update(element:any): void {
     { 
        const dialogRef = this.dialog.open(UpdateComponent, {
          height: '520px',
          width: '360px',
          data: element 
        });
    
        dialogRef.afterClosed().subscribe(
          (result) => {
            if (result === true) { this.getContactList();
       
            }  this.getContactList();
          },
          (error) => {
            console.error('Error updating contact', error);

          }
        );
      }
    
      
        
       
      
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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  Sortchange(event: SortEvent) {
    if (event.multiSortMeta) {
      this.dataSource.sort = this.sort;
      console.log('Sorting event:', event);
    }
  }



}