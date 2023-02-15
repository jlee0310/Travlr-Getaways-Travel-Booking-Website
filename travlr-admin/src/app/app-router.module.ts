import { NgModule } from '@angular/core';
import { RouterModule, Routes} from  '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'delete-trip', component: DeleteTripComponent },
    { path: 'list-trip', component: TripListingComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, pathMatch: 'full'}
    // { path: '', component: TripListingComponent, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}