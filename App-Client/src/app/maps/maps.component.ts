import { MainService } from './../main.service';
import { LinkDto } from './../models/link-dto';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GeocodeService } from '../shared/geocode.service'
import { Location } from '../models/location';
import {MatDialogRef} from '@angular/material/dialog';
import { LinkService } from '../shared/link.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {



  links: Array<LinkDto> = new Array<LinkDto>();
  link: LinkDto;
  address1 = '02-326';
  address2 = '02-326';
  location1: Location;
  location2: Location;
  locations: [Location];
  loading: boolean;





  constructor(
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private mainService: MainService,
    public service: LinkService,
    public dialogRef: MatDialogRef<MapsComponent>
  ) { }

  ngOnInit(
  ) {
    this.showLocation();
  }


  showLocation() {
    this.addressToCoordinates1();
    this.addressToCoordinates2();
  }

  addressToCoordinates1() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address1)
    .subscribe((location: Location) => {
        this.location1 = location;
        this.loading = false;
        this.ref.detectChanges();
      }
    );
  }

  addressToCoordinates2() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address2)
    .subscribe((location: Location) => {
        this.location2 = location;
        this.loading = false;
        this.ref.detectChanges();
      }
    );
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
