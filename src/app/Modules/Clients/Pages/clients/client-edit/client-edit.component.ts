import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ClientModel, SaveClientModel, Service } from '../../../../Shared/services/api-client.Service';
import { EnumToastrStatus } from '../../../../Shared/Enums/EnumToastrStatus';



@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html'
})
export class ClientEditComponent implements OnInit, OnDestroy {
  DataForm: FormGroup;

  clientcreated: SaveClientModel = new SaveClientModel();
  client: ClientModel = new ClientModel();
  @Output('ClientInserted') ClientInserted = new EventEmitter<{ client: ClientModel }>();
  adddata: Subscription | undefined;
  
  constructor(private _modalService: BsModalService,
    private _apiService: Service,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    var state = this._modalService.config.initialState;
    var content = <any>state;
    var client = <ClientModel>content.client;

    if (client !== null && client !== undefined) {
      this.client = client;
    }

    this.DataForm = new FormGroup({
      'FirstName': new FormControl(null, [Validators.required]),
      'LastName': new FormControl(null, [Validators.required]),
      'Email': new FormControl(null, [Validators.required]),
      'PhoneNumber': new FormControl(null, [Validators.required]),
    });
  }


  ValidateInput(ControlName: string){

    switch (ControlName) {
      case 'FirstName':
        if (this.DataForm.get(ControlName)?.touched && !this.DataForm.get(ControlName)?.valid) {
          return true;
        }
        break;
      case 'LastName':
        if (this.DataForm.get(ControlName)?.touched && !this.DataForm.get(ControlName)?.valid) {
          return true;
        }
        break;
      case 'Email':
        if (this.DataForm.get(ControlName)?.touched && !this.DataForm.get(ControlName)?.valid) {
          return true;
        }
        break;
      case 'PhoneNumber':
        if (this.DataForm.get(ControlName)?.touched && !this.DataForm.get(ControlName)?.valid) {
          return true;
        }
        break;        
    }
    return false;
  }


  ngOnDestroy(): void {
    if (this.adddata !== null && this.adddata !== undefined) {
      this.adddata.unsubscribe();
    }
   
  }

  SubmitData() {
    this.DataForm.markAllAsTouched();
    if (this.DataForm.valid) {

      this.clientcreated.firstName = this.client.firstName;
      this.clientcreated.lastName = this.client.lastName;
      this.clientcreated.email = this.client.email;
      this.clientcreated.phoneNumber = this.client.phoneNumber;

      this.adddata = this._apiService.
        clientPOST(this.clientcreated).subscribe
        ((response: any) => {
          this.toastrService.success('Client Added Successfully', EnumToastrStatus.SUCCESS);
          this.ClientInserted.emit({
            client: this.client,
          });
        },
          (error: any) => {
            this.toastrService.error('Failed in Saving Client', EnumToastrStatus.ERROR);
          });
    }
  }
}
