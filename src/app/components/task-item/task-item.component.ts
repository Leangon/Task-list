import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { TASK } from "../../mock-task";
import { faTimes, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0]
  //**Sacamos la funcion hacia afuera para que la maneje el componente de la lista de tareas y no el componente del item de la tarea */
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faPen = faPen;
   
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit()
  }

  onToggle(task: Task){
    this.onToggleReminder.emit()
  }
}
