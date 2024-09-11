import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DocumentFormComponent } from './components/document-form/document-form.component';
import { DocumentDashboardComponent } from './components/document-dashboard/document-dashboard.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module'; // Ensure this is correctly set up

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentFormComponent,
    DocumentDashboardComponent,
    EditDocumentComponent,
    DocumentViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
