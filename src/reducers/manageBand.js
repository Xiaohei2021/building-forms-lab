export default function manageBand(state = {bands: [],}, action) 
{
  switch(action.type){

    case "ADD_BAND":{
      return{
        ...state, bands: [...state.bands,action.bandData]  
      }
    }
    default: return state;
  }

 
};
