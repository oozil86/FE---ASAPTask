import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ClientModel, Service } from '../../../Shared/services/api-client.Service';
import { GridDataResult } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit, OnDestroy {

  rows: any = [];
  getdata: Subscription | undefined;
  loading: boolean = true;
  totalRecords: number;
  skip = 1;
  pageSize = 5;
  gridView: GridDataResult;
  Clients: ClientModel[] = [];

  constructor(
    private _modalService: BsModalService,
    private _apiService: Service,
    private toastrService: ToastrService) {
  }

  public loadItems(): void {
    this.gridView = {
      data: this.Clients.slice(this.skip, this.skip + this.pageSize),
      total: this.Clients.length,
    };
  }

  public pageChange(event: any): void {
    this.skip = event.skip;
    this.loadItems();
  }

  ngOnInit(): void {
    this.getdata = this._apiService.getPagedClients(1, 10, 1, 'FirstName')
      .subscribe((Response: any) => {
        this.Clients = Response.items;
        this.loadItems();
      });
  }

  ngOnDestroy(): void {
    if (this.getdata !== null && this.getdata !== undefined) {
      this.getdata.unsubscribe();
    }
  }


 

  OnClientAdded() {
    console.log('OnClientAdded');
    this.getdata = this._apiService.getPagedClients(1, 10, 1, 'FirstName')
      .subscribe((Response: any) => {
        this.Clients = Response.items;
        this.loadItems();
      });
  }


  OnClientEdited(data: { entity: any } | undefined, content: TemplateRef<any>) {
    let client = <ClientModel>data?.entity;
    this._modalService.show(
      content,
      {
        class: 'modal-lg',
        initialState: {
          client: client,
        }
      });
  }


  close() {
    this._modalService.hide();
  }

}
