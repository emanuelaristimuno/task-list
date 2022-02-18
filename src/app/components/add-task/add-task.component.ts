import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();

  text:string= "";
  day:string = "";
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription? : Subscription;

  constructor(uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe(
      value=>{
        this.showAddTask = value;

      }
    );

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("La tarea no puede estar vacia");
    }
    if(this.day.length === 0){
      alert("el dia y la hora no puede estar vacia");
    }

    const {text,day,reminder} = this;
    const newTask = {text,day,reminder};

    this.onAddTask.emit(newTask);

  }

}
