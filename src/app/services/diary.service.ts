import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {DiaryEntry} from "../models/diaryEntry";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {


  constructor() { }


  getDiaryEntries(): Observable<DiaryEntry[]> {
    const entries: DiaryEntry[] = [{
      id: "550e8400-e29b-41d4-a716-446655440000",
      title: "My first entry",
      date: new Date(),
      content: "Today i walked along..."
    },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        title: "My second entry",
        date: new Date(),
        content: "Today I did other things..."
      }
    ];
    return of(entries);
  }
}
