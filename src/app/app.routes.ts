import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EventDetailComponent } from "./event-detail/event-detail.component"

export const rootRouterConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: EventDetailComponent }
]
