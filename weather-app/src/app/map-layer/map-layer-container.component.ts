import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as L from 'leaflet';
import {latLng, Layer, MapOptions, marker, tileLayer} from 'leaflet';
import {ActivatedRoute} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-map-layer-container',
  templateUrl: './map-layer-container.component.html',
  styleUrls: ['./map-layer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapLayerContainerComponent implements OnInit, OnDestroy {
  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }),
    ],
    zoom: 5,
    center: [0, 0],
  };
  layers: Layer[] = [];

  private readonly destroyed$ = new Subject();
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => {
        if (Object.keys(params).length > 0) {
          const userPicture = JSON.parse(
            decodeURIComponent(params['userPicture']),
          );
          const {lat, lon} = params;

          // setup user image as custom icon
          const customIcons = L.icon({
            iconUrl: userPicture.large,
            iconSize: [32, 32],
            className: 'leaflet-avatar-icon',
            iconAnchor: [16, 16],
            popupAnchor: [0, -16],
          });

          // setup option for map
          this.options = {
            layers: [
              tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
              }),
            ],
            zoom: 5,
            center: latLng(lat, lon),
          };

          this.layers = [marker([lat, lon], {icon: customIcons})];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
