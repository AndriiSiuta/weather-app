import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
	path: '',
	pathMatch: 'full',
	redirectTo: 'dashboard',
}, {
	path: 'dashboard',
	loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
}, {
	path: 'saved-list',
	loadChildren: () => import('./saved-list/saved-list.module').then(mod => mod.SavedListModule),
}, {
	path: 'map-layer',
	loadChildren: () => import('./map-layer/map-layer.module').then(mod => mod.MapLayerModule),
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
