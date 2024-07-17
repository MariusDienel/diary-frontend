import { Component } from '@angular/core';
import {DiaryEntryListingComponent} from "../diary-entry-listing/diary-entry-listing.component";

@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [
    DiaryEntryListingComponent
  ],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.css'
})
export class StartingPageComponent {

}
