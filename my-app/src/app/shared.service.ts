import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  owners :any[] = [];

  constructor(public _shared: SharedService){}
}

