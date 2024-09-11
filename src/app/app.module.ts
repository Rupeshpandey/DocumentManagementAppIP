import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentDashboardComponent } from './components/document-dashboard/document-dashboard.component';
import { DocumentFormComponent } from './components/document-form/document-form.component';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentDashboardComponent,
    DocumentFormComponent,
    DocumentViewerComponent,
    EditDocumentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
