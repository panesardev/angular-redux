import { Action } from './action';
import { State } from './state';

export function reducer(state: State, action: Action): State {
	let next: State;
	
	switch (action.type) {
		case 'ADD_ITEM':
			next = { items: [...state.items, action.payload] };
			break;
		default:
			next = { ...state };
	}

	return next;
}