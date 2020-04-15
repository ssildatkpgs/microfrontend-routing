import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-item',
  templateUrl: './angular-item.component.html',
  styleUrls: ['./angular-item.component.css']
})
export class AngularItemComponent implements OnInit {
  @Input('itemid') set setItemId(id: string) {
    this.id = id;
    this.setHits();
    this.onHitsRefreshEvent.emit();
  }
  @Output() onHitsRefreshEvent: EventEmitter<string> = new EventEmitter();
  images: Array<{ id: string, title: string, url: string, desc: string}>;
  id: string = '1';
  hits: number = 1;
  itemDetails: { id: string, title: string, url: string, desc: string} = {
    id: '0',
    title: 'Title',
    url: '',
    desc: 'Lorem ipsum.'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/images.json').subscribe((data: any) => {
      this.images = data.images;
      this.itemDetails = this.images.find(item => item.id === this.id);
    });
  }

  private setHits() {
    const hitsState: string = localStorage.getItem(`hits-item-${this.id}`);

    if(hitsState) {
      this.hits = parseInt(hitsState) + 1;
    }

    localStorage.setItem(`hits-item-${this.id}`, this.hits.toString());
  }
}
