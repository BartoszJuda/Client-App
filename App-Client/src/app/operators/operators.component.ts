import { NotificationService } from './../shared/notification.service';
import { OperatorService } from './../shared/operator.service';
import { MainService } from './../main.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {OperatorComponent} from '../operators/operator/operator.component'
import { ConfirmDialogService } from '../shared/confirm-dialog.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  dataSource;
  displayedColumns = ['operatorName', 'actions'];
  flag: boolean = false;

  constructor(private mainService: MainService,
    private dialog: MatDialog,
    private service: OperatorService,
    private notificationService: NotificationService,
    private dialogService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.mainService.getOperators().subscribe(results => {
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }


  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "110%";
    this.dialog.open(OperatorComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "110%";
    this.dialog.open(OperatorComponent, dialogConfig);
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
