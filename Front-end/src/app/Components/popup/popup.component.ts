import { Component, Injectable, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../contact.service';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { ContactlistComponent } from '../contactlist/contactlist.component';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
 
})
@Injectable({
  providedIn: 'root',
})
export class PopupComponent implements OnInit {

constructor(private matDialog: MatDialog) {}
  ngOnInit(): void {
    this.onButtonClick();
    throw new Error('Method not implemented.');
  }


public onButtonClick(): void {
  this.openPopup();
}

openPopup() {
      const dialogRef = this.matDialog.open(AddcontactComponent, { width: '350px', height: '550px', });

      dialogRef.afterClosed().subscribe(result => {
    console.log(` Dialog closed with result: ${result} `);
    });
} 



}
