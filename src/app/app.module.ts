import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatDialogModule} from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogComponent } from './components/contact/add-dialog/add-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactService,ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
