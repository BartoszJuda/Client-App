import { ConfirmDialogService } from './../shared/confirm-dialog.service';
import { NotificationService } from './../shared/notification.service';
import { LinkService } from './../shared/link.service';
import { LinksComponent } from './../links/links.component';
import { LinkDto } from './../models/link-dto';
import { MatDialogConfig } from '@angular/material/dialog';
import { MainService } from './../main.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialog} from '@angular/material/dialog'
import { LinkComponent } from '../links/link/link.component';
import { MapsComponent } from '../maps/maps.component';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  dataSource;
  displayedColumns = ['operator', 'linkName', 'technology', 'cityA', 'streetA', 'zipCodeA', 'cityB', 'streetB', 'zipCodeB', 'actions'];
  flag: boolean = false;



  constructor(private mainService: MainService,
    private dialog: MatDialog,
    private service: LinkService,
    private notificationService: NotificationService,
    private dialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.mainService.getLinks().subscribe(results => {
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "110%";
    this.dialog.open(LinkComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "110%";
    this.dialog.open(LinkComponent, dialogConfig);
  }

  onMap(row){
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  this.dialog.open(MapsComponent, dialogConfig);
}

onDelete(id){
this.dialogService.openConfirmDialog('Are you sure to delete this record?')
.afterClosed().subscribe(res => {
  if(res){
    this.service.delete(id);
    this.notificationService.warn('! Deleted Successfully');
  }
});
}
}
