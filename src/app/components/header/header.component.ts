import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title:string= "Lista de tareas"

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("add task!")
  }

}
