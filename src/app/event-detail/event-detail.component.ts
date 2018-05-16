import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HttpServiceService } from '../http-service.service';
import {eventItemModel} from './model';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
  providers: [HttpServiceService]
})
export class EventDetailComponent implements OnInit {
  private eventItem: any;
  constructor(private route: ActivatedRoute, private router: Router, private HTTP: HttpServiceService) {
    this.eventItem=new eventItemModel()
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.HTTP.getEventDetail(id).then((result: any) => {
      console.log(result);
      this.eventItem = result;
    })
  }

}
