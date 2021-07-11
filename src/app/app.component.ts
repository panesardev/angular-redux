import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from './store/action';
import { State } from './store/state';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  state$: Observable<State>;

  constructor(private store: Store) {}
  
  ngOnInit() {
    this.state$ = this.store.state$;
  }

  addItem() {
    this.store.dispatch(new Action('ADD_ITEM', 'example item'));
  }

}
