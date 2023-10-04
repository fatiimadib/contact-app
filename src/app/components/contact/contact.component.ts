import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts:Contact[]=[];
  newContact: Contact = { id: 0, name: '', email: '', phone: '' };
  searchQuery: string = '';
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','actions'];

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
   this.getContacts();
   console.log(this.contacts)
  }

  getContacts():void{
   this.contacts= this.contactService.getContacts();
  }

  addContact(): void {
    this.contactService.addContact(this.newContact);
    this.newContact = { id: 0, name: '', email: '', phone: '' };
    this.ngOnInit; 
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.ngOnInit;
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact);
    this.ngOnInit; 
  }

  searchContacts(): void {
    this.contacts = this.contactService.searchContact(this.searchQuery);
  }
}
