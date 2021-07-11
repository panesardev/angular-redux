import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";
import { Action } from './action';
import { reducer } from './reducer';
import { initial, State } from "./state";

@Injectable({ providedIn: 'root' })
export class Store {

	private actions = new Subject<Action>();
	private stateSubject = new BehaviorSubject<State>(initial);

	state$ = this.stateSubject.asObservable();

	constructor() {
		this.actions.subscribe(action => {
			const state = this.stateSubject.value;
			const newState = reducer(state, action);
			this.stateSubject.next(newState);
		});
	}

	dispatch(action: Action): void {
		this.actions.next(action);
	}

}