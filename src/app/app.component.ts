import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StartingPageComponent} from "./components/starting-page/starting-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
