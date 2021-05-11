import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos = [
    {
      name: 'setup angular material',
      done: false,
    },
    {
      name: 'setup tests',
      done: false,
    },
    {
      name: 'call api',
      done: false,
    },
    {
      name: 'setup ci',
      done: false,
    },
  ]

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.todos.push({
        name: 'test' + i,
        done: false
      })
    }
  }

  ngOnInit(): void {
  }

}
