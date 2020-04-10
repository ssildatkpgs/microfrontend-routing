import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-item',
  templateUrl: './angular-item.component.html',
  styleUrls: ['./angular-item.component.css']
})
export class AngularItemComponent implements OnInit {
  @Input() itemid: string = '1';
  images: Array<{ id: string, title: string, url: string, desc: string}>;
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
      this.itemDetails = this.images.find(item => item.id === this.itemid);
    });
  }
}
