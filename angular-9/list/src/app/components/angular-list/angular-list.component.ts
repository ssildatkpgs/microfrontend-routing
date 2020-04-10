import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {
  @Input() activeid: string;
  imagesArray: Array<{ id: string, title: string, url: string, desc: string}>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/images.json').subscribe((data: any) => {
      this.setImagesArray(data.images);
    });
  }

  private setImagesArray(images: Array<any>) {
    if(this.activeid) {
      this.imagesArray = images.filter(item => item.id !== this.activeid);
    } else {
      this.imagesArray = images;
    }
  }
}
