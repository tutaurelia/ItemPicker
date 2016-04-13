import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient, Router )
export class App {
    router: Router;
    http: HttpClient;

    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .withBaseUrl("http://localhost:64439/api/");
        });
        this.http = http;
    }

    configureRouter(config, router: Router) {
        this.router = router;
        config.title = "Products Dashboard";
        config.map([
            { route: ["", "dash-board"], moduleId: "./views/dash-board", nav: false },
            { route: "change-product-name", moduleId: "./views/change-product-name", nav: false, title: "Change Product Name", name: "change-product-name" },
            { route: "change-category-name", moduleId: "./views/change-category-name", nav: false, title: "Change Category Name", name: "change-category-name" },
            { route: "change-supplier-name", moduleId: "./views/change-supplier-name", nav: false, title: "Change Supplier Name", name: "change-supplier-name" },
            { route: "product-picker", moduleId: "./components/product-picker", title: "", name: "product-picker" }
        ]);
    }
}