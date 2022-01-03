import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[]= [];

  constructor( private taskServices: TaskService) { 
   
  }

  ngOnInit(): void {
    this.taskServices.getTask().subscribe((tasks)=>{
      this.tasks = tasks;
     }
      );
  }

  onClick(){
    console.log("onclick!");
    console.log(this.tasks);
  }

}
