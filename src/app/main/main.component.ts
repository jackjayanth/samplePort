import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  images: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getImages().subscribe(data => this.images = data );
  }

}
