import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ResidentListComponent }  from './resident-list.component';
import { EditResidentComponent } from './edit-resident.component';
import { NewResidentComponent } from './new-resident.component';
import { YoungAndOldPipe } from './youngAndOld.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  ResidentListComponent,
                  EditResidentComponent,
                  NewResidentComponent,
                  YoungAndOldPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
