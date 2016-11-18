import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{
    private newstUrl: string;

    constructor(private _http:Http){

    }

    getNews(str:any){
        this.newstUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=428954a633c9483d93a6abefd6eeb4fc';
        return this._http.get(this.newstUrl)
            .map(res => res.json());
    }

}
