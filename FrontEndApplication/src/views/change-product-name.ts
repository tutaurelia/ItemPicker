import {NavigateToProductPickerCommand} from "../components/navigate-to-product-picker-command";
import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(Router)
export class ChangeProductName {
    productId: string;
    
    constructor(private router : Router) { }
    
    canActivate(params, routeConfig, navigationInstruction): boolean | NavigateToProductPickerCommand {
        if (!params.productId) {
            return new NavigateToProductPickerCommand(routeConfig,this.router);
        }
        return true;
    }

    activate(params) {
        this.productId = params.productId;    
    }
}