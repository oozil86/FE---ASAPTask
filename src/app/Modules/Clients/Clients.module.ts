import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbDropdownModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/Shared.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TableModule } from 'primeng/table';
import { ApplicationServiceProxy, JobServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { ClientsComponent } from './Pages/clients/clients.component';
import { ClientEditComponent } from './Pages/clients/client-edit/client-edit.component';
import { ClientsRoutingModule } from './Clients-routing.module';


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
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastrService,
    JobServiceProxy,
    ApplicationServiceProxy,
    BsModalService
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsModule {
}
