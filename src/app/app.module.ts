import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatDialogModule
    ],
  providers: [
    Title                   
  ],
  declarations: [
    AppComponent,
    GameMenuComponent,
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
