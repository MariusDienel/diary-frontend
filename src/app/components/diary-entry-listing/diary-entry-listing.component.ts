import {Component, Injector, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import {DatePipe, NgFor, NgForOf} from "@angular/common";
import {DiaryEntry} from "../../models/diaryEntry";
import {DiaryService} from "../../services/diary.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-diary-entry-listing',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './diary-entry-listing.component.html',
  styleUrl: './diary-entry-listing.component.css'
})
export class DiaryEntryListingComponent implements OnInit {

  diaryEntries: Signal<DiaryEntry[] | undefined> = signal([]);

  constructor(private injector: Injector,
              private diaryService: DiaryService) {
  }

  ngOnInit(): void {
    this.diaryEntries = toSignal(this.diaryService.getDiaryEntries(), {injector: this.injector});
  }

}
