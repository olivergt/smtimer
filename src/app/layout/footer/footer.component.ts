import { Component, OnInit } from '@angular/core';
import { META } from 'src/app/data/constants/meta';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  version = META.version;

  constructor() { }

  ngOnInit(): void {
  }

}
