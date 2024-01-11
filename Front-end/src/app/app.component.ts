import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AddcontactComponent } from './Components/addcontact/addcontact.component'; 
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactService } from './Components/contact.service';
import { contact } from 'src/app/contact';
import { ContactlistComponent } from './Components/contactlist/contactlist.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  template: ` 
    <button (click)="add()">Click me</button> 
  ` 
})
export class AppComponent implements OnInit {
[x: string]: any;
contact: contact = new contact;
 


constructor( private contactService: ContactService, private dialog: MatDialog,private router: Router){}
public add(element:any): void {
  { 
     const dialogRef = this.dialog.open(AddcontactComponent, {
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
 }}
ngOnInit(){


}
onSubmit(){
this.add(contact)
}

}
