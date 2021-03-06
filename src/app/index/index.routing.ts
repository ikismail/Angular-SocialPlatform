import { IndexComponent } from "./index.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "../layout/home/home.module#HomeModule"
      }
    ]
  }
];

export const IndexRoutes = RouterModule.forChild(routes);
