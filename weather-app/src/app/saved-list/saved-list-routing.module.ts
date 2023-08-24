import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedListContainerComponent } from './saved-list-container.component';

const savedListRoutes: Routes = [{
	path: '',
	component: SavedListContainerComponent
}]

@NgModule({
	imports: [RouterModule.forChild(savedListRoutes)],
	exports: [RouterModule]
})

export class SavedListRoutingModule {
}
