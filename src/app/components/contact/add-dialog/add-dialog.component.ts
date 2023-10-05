import { Component,Inject  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ContactComponent } from '../contact.component';
import { Contact } from 'src/app/models/contact.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  newContact:Contact={id:0,name:'',email:'',phone:''}

  constructor(private contactService:ContactService,private dialog:MatDialog,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject (MAT_DIALOG_DATA) private data: Contact){}

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
      this.newContact = { ...this.data };
    }
  }
  addContact(){
    if (this.data) {
      this.contactService.updateContact(this.newContact);
      this.dialog.closeAll();

    }
    else{
      this.contactService.addContact(this.newContact);
      this.dialog.closeAll();

    }
  }
  Close(){
    this.dialog.closeAll();
  }
}
