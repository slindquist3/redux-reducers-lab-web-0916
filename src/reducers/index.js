export default function ingredientReducer(state = [], action) {
   switch (action.type) {
     case "ADD_INGREDIENT":
       return [...state, action.payload]
     case "REMOVE_INGREDIENT":
       return state.filter((item, index) => index !== action.payload )
     default:
       return state
   }
 }
