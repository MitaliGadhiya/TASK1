import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Password', field: 'password', sortable: true, filter: true },
    { headerName: 'DOB', field: 'dob', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
    { headerName: 'City', field: 'city', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    { headerName: 'Hobbies', field: 'hobbies', sortable: true, filter: true, valueFormatter: this.hobbiesFormatter }
  ];

  rowData: any = [];

  constructor(private userService: ServicesService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      this.rowData = data;
    });
  }

  hobbiesFormatter(params: any) {
    return params.value ? params.value.join(', ') : '';
  }
}
