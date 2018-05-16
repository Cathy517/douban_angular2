import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers:[HttpServiceService]
})
export class HomePageComponent implements OnInit {

  constructor(private HTTP: HttpServiceService) { }
  

  ngOnInit() {
  }

}
