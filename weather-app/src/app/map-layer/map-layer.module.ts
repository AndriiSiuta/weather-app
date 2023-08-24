import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapLayersRoutingModule } from './map-layers-routing.module';
import { MapLayerContainerComponent } from './map-layer-container.component';

@NgModule({
	imports: [LeafletModule, MapLayersRoutingModule],
	declarations: [
		MapLayerContainerComponent
	]
})

export class MapLayerModule {
}
