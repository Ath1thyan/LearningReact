function Reducer(state, action) {
    switch (action.change) {
      case 'update_name' :
        return {
          ...state,
            name: action.name
        }
  
      case 'update_position' :
        return {
        ...state,
          Position: action.position
        }
  
      case 'update_email' :
        return {
        ...state,
          email: action.email
        }
  
      default:
        return state;
    }
  }

  export default Reducer;