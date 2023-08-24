import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLayerContainerComponent } from './map-layer-container.component';

const mapLayersRoutes: Routes = [{
	path: '',
	component: MapLayerContainerComponent
}]

@NgModule({
	imports: [RouterModule.forChild(mapLayersRoutes)],
	exports: [RouterModule]
})

export class MapLayersRoutingModule {
}
