import { Component, OnInit, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news.service';
import { Article } from '../../Article';

import 'rxjs/add/operator/map';

declare var $: any;


@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css'],
    providers: [NewsService]
})
export class HomeComponent implements OnInit {
    searchRes : Article[];
    searchStr: any;


    constructor( private _newsService: NewsService ) {
    }
    ngOnInit(){
        this._newsService.getNews(this.searchStr).subscribe(res => {
            console.log ( res );
            this.searchRes = res.articles;
        });
    }

}
