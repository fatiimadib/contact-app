import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts:Contact[]=[];
    
  searchQuery: string = '';
  
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','actions'];

  constructor(private contactService:ContactService,private dialog:MatDialog) { }

  ngOnInit(): void {
   this.getContacts();
  }

  getContacts():void{
    this.contactService.getContacts().subscribe((contacts)=>{
        this.contacts=contacts;
    });
  }

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact);
  }

  updateContact(contact: Contact): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: contact, // Pass the element data to the dialog
    });
  }

  searchContacts(searchQuery:string){
   this.contacts=this.contactService.searchContact(searchQuery);
  }

  openDialog(){
    this.dialog.open(AddDialogComponent);
  }

}
