import { Component, Input } from '@angular/core';

@Component({
  selector: 'todolist',
  styleUrls:['./style.css'],
  template: `
            <ul id="todo_widget">
            <li class="header"><h2 class="title">My to do list</h2></li>
              <li class="new_item">
                <input type="text"  placeholder="Add a new task..." name="newItem" />
              </li>
              <li class="button add">
                <button (click)="_handleAddItem(newItem)">Add</button>
              </li>
              <li class="button reset">
                <button (click)="_handleResetList($event)">Reset</button>
              </li>
              <li class="todo_item" *ngFor="let item of list; let i = index" >
                 <input class="checkbox"  type="checkbox" [attr.id]="i"
                  (click)="_handleUpdateDoneList($event,i)"
                />
               <span>{{ item }}</span>
              </li>
              <li class="footer">
                <button class="remove" (click)="_handleRemoveDoneItems($event)">Remove</button>
              </li>
            </ul>
            `
})
export class ToDoList {
   list= ["item1", "item2"];
   doneList= [];
   
  _handleAddItem(newItem) {
  }
  _handleUpdateDoneList(e,i) {
  }
  _handleRemoveDoneItems(e) {
  }
  _handleResetList(e) {
  }
}
