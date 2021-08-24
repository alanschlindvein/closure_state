export function closureState(init) {
	let state;

	if(init !== undefined) {
		state = init;
	}


	return [
		() => state,
		(value) => {
			if(typeof value === 'function') {
				state = value(state);
				return state;
			}

			state = value;
			return state;
		}
	]
}