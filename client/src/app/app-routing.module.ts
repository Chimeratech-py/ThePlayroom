import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { MemberDetailComponent } from './_components/member-detail/member-detail.component';
import { RoomlistComponent } from './_components/roomlist/roomlist.component';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: RoomlistComponent},
  {path: 'rooms/profiles/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
