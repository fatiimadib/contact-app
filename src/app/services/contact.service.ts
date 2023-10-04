import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public  contacts:Contact[]=[
    {id: 1, name: 'fatima', email: 'f@nahaus.de', phone: '71747131'},
  ];
  
  constructor() { }

  addContact(contact:Contact){
    this.contacts.push(contact);
  }

  getContacts(): Contact[]{
    return this.contacts;
  }

  deleteContact(id:number){
    this.contacts=this.contacts.filter(contact=>contact.id!==id)
  }

  updateContact(updatedContact:Contact):void{
    const index=this.contacts.findIndex(contact=>contact.id===updatedContact.id);
    if(index!==-1){
      this.contacts[index]=updatedContact;
    }
  }
  
  searchContact(query:string):Contact[]{
    query=query.toLowerCase();
    return this.contacts.filter(
      contact=>contact.name.toLowerCase().includes(query) ||contact.email.toLowerCase().includes(query)
    );
  }

}
