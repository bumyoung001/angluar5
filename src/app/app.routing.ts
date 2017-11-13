import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { AuthGuardService } from './shared/auth-guard.service';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent},
   { path: 'join', component: JoinComponent},
   { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
   { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
