import {inject } from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(Router)
export class NavigateToProductPickerCommand {
    
    constructor(private routeConfig, private router : Router) { }

    navigate(appRouter: Router) {
        this.router.navigateToRoute("product-picker", { returnTo: this.routeConfig.name });
    }
}