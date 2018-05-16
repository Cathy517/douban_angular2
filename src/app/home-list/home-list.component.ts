import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { HttpServiceService} from '../http-service.service';
import {eventListModel} from './model'
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
  providers: [HttpServiceService]
})

export class HomeListComponent implements OnInit {
  private eventList;

  constructor(private HTTP: HttpServiceService) { }

  ngOnInit() {
    this.HTTP.loadMore().then((result: any) => {
      console.log(result.events);
      this.eventList=result.events;
    })
  }

}

@Pipe({name:'content'})
export class contentPipe implements PipeTransform{
  transform(value){
    let newVal = value.replace(/<.*?>/g, '')
    return newVal.slice(0, 30)
  }
}
