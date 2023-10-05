import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts:Contact[]=[
    {id: 1, name: 'fatima', email: 'f@nahaus.de', phone: '71747131'},
    {id: 2, name: 'rima', email: 'r@nahaus.de', phone: '123456'},
  ];
  
  constructor() { }

  private contactSubject=new BehaviorSubject<Contact[]>(this.contacts);

  getContacts(): Observable<Contact[]>{
    return this.contactSubject.asObservable();
  }

  addContact(contact:Contact): void{
    contact.id=this.contacts.length+1;
    this.contacts.push(contact);
    this.contactSubject.next([...this.contacts])
  }

  deleteContact(contactt:Contact):void{
    const index=this.contacts.findIndex((contact)=>contact.id === contactt.id);
    if(index!==-1){
      this.contacts.slice(index,1);
      this.contactSubject.next([...this.contacts])
    }
  }

  updateContact(updatedContact:Contact):void{
    const index=this.contacts.findIndex(contact=>contact.id===updatedContact.id);
    if(index!==-1){
      this.contacts[index]=updatedContact;
      this.contactSubject.next([...this.contacts])
    }
  }
  
  searchContact(query:string):Contact[]{
    query=query.toLowerCase();
    return this.contacts.filter(
      contact=>contact.name.toLowerCase().includes(query) ||contact.email.toLowerCase().includes(query)
    );
  }

}
