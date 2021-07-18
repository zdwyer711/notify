import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public year: string = '';
  public constructor() {
    this.year = moment().format('YYYY');
  }

  ngOnInit(): void {
  }

}