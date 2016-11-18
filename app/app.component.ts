import { Component, Directive } from '@angular/core';
import { NewsService } from './services/news.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [NewsService]
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor() {}
}
