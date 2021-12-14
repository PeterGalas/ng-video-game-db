import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getGameList(sort: string, search: string | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
