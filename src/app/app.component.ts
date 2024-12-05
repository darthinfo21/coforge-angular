import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  /* Parent component for Angular.It consistes of child component*/
  standalone: true,
  imports: [RouterLink,RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coforge-ltd';
}
