import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbDropdownModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/Shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TableModule } from 'primeng/table';
import { ClientsComponent } from './Pages/clients/clients.component';
import { ClientEditComponent } from './Pages/clients/client-edit/client-edit.component';
import { ClientsRoutingModule } from './Clients-routing.module';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from '@progress/kendo-angular-grid';
import { Service } from '../Shared/services/api-client.Service';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientEditComponent
  ],
  imports: [
    ClientsRoutingModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    NgbModule,
    ButtonsModule,
    GridModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService,
    BsModalService,
    Service
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsModule {
}
