import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  showDialog=false;
  constructor() { }


  list = [
    {
      id: 1,
      label: 'Maharashtra',
      city: [
        {
          id: 101,
          label: 'Kolhapur'
        },
        {
          id: 102,
          label: 'pune'
        },
        {
          id: 103,
          label: 'Mumbai'
        },
      ]
    },
    {
      id: 2,
      label: 'Karrnatak',
      city: [
        {
          id: 201,
          label: 'Belgaon'
        },
        {
          id: 202,
          label: 'Bengluru'
        },
      ]
    }
  ]
}
