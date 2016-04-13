import {inject, bindable} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {Router} from "aurelia-router";

@inject(HttpClient, Router)
export class ProductPicker {
    @bindable productIdFilter = "";
    @bindable productNameFilter = "";
    @bindable categoryNameFilter = "";
    @bindable supplierNameFilter = "";
    returnRoute: any;
    products: any[] = [];

    constructor(private http: HttpClient, private router: Router) { }

    activate(params) {
        this.returnRoute = params.returnTo;
        this.refresh();
    }
    
    refresh() {
        return this.http.fetch("products?productIdFilter=" + this.productIdFilter + "&productNameFilter=" + this.productNameFilter +
            "&categoryNameFilter=" + this.categoryNameFilter + "&supplierNameFilter=" + this.supplierNameFilter)
            .then(response => response.json()).then(data => {
                    //this.products = [];                
                    //data.forEach(element => {
                    //var prod = element;
                    //this.products.push(prod);
                        //});
                        this.products = data;
                        
            });
    }

    productIdFilterChanged() { 
        this.refresh();
    }

    productNameFilterChanged() {
        this.refresh();
    }

    categoryNameFilterChanged() {
        this.refresh();
    }

    supplierNameFilterChanged() {
        this.refresh();
    }

    pickProduct(productId) {
        this.router.navigateToRoute(this.returnRoute, { productId: productId });
    }




}

