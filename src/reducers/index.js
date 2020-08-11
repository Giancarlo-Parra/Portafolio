const reducer = (state,action)=>{
	switch (action.type) {
		case 'Español':
			return state.español;
		
		case 'English':
			return state.ingles;

		default:
			return state.español;
	}
	
	
}

export default reducer;