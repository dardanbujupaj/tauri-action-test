import { Component } from '@angular/core';
import { getVersion } from '@tauri-apps/api/app'


interface Todo {
  name: string,
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tauri-test';
  constructor() {
    getVersion().then(console.log)
  }
}
