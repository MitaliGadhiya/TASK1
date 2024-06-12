import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';

const routes: Routes = [
  { path: 'Profile', component: FormDataComponent},
  { path: 'profileInfo', component: ProfileInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
