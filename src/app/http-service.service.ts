import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from "rxjs/Subject";
import axios from 'axios';

const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore(state, payload) {
    state.skip += 3,
      state.events = state.events.concat(payload.res)
  },
  getSingleEvent(state, payload) {
    state.eventItem = payload.res
  }
}

@Injectable()
export class HttpServiceService {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
  // private profileUrl = 'https://api.douban.com/v2/';
  private profileUrl = 'http://localhost:3000';

  constructor(private http: Http) { }
  //eventList
  loadMore() {
    return new Promise((resolve, reject) => {
      axios.get(this.profileUrl + '/eventList').then((response: any) => {
        console.log(response.data);
        resolve(response.data)
      }).catch((err) => {
        console.log(err);
      })
    })

  }
  //eventDetail
  getEventDetail(id) {
    return new Promise((resolve, reject) => {
      axios.get(this.profileUrl + '/eventDetail/' + id).then((response: any) => {
        // console.log(response.data);
        resolve(response.data)
      }).catch((err) => {
        console.log(err);
      })
    })
  }

}


export default {
  state,
  mutations
}