import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
//import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() userId;
  items$: Observable<any>;

  public todoItem = new FormGroup({
    itemTitle: new FormControl(),
    itemDescription: new FormControl()
  });

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.items$ = this.af.list('/' + this.userId).snapshotChanges().map(items => {
      var res = items.map( c => (
        {
          key: c.payload.key, 
          title: c.payload.val().title,
          description: c.payload.val().description,
          done: c.payload.val().done
        }
      ))
      return res
    });
  }

  resetForm() {
    this.todoItem.reset();
  }

  addTodo() {
    let title = this.todoItem.get('itemTitle').value,
        desc  = this.todoItem.get('itemDescription').value

    this.af.list('/' + this.userId).push({title: title, description: desc, done: false})
    this.resetForm()
  }

  deleteTodo(todo: any): void {
    if(todo.done) {
      this.af.object('/' + this.userId + '/' + todo.key).remove()
    }
  }

  toggleDone(todo: any): void {
    this.af.object('/' + this.userId + '/' + todo.key)
    .update({title: todo.title, done: !todo.done})
  }

  updateTodo(todo: any, newValue: string): void {
    this.af.object('/' + this.userId + '/' + todo.key)
    .update({title: newValue, done: todo.done})
  }

}
