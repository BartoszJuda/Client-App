import { LinkService } from './shared/link.service';
import {OperatorService} from './shared/operator.service'
import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainService } from './main.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsertableComponent } from './usertable/usertable.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LinksComponent } from './links/links.component';
import { LinkComponent } from './links/link/link.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatorComponent } from './operators/operator/operator.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import * as Material from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule} from '@agm/core';
import { GeocodeService } from './shared/geocode.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    UsertableComponent,
    LinksComponent,
    LinkComponent,
    OperatorsComponent,
    OperatorComponent,
    DashboardComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  providers: [
    MainService,
    LinkService,
    OperatorService,
    GeocodeService,
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [LinkComponent, OperatorComponent, MapsComponent]
})
export class AppModule { }
