import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask:boolean = false;
  subscription:Subscription; 

  constructor(private uiService:UiService) {
      this.subscription = this.uiService.onToggle().subscribe(
          value=>{
            this.showAddTask = value;
            
          }
        );
   }

  title:string= "Lista de tareas"

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("entro al toggle del agregar");
    
    this.uiService.toggleAddTask();
  }

}
