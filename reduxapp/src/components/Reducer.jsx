import {useDispatch, useSelector,Provider } from "react-redux";
import {createStore} from "redux";


import React from 'react'

export default function Reducer() {

   const INCREMENT="INCREMENT";
   const DECREMENT="DECREMENT";
   const RESET="RESET";

   const increment=()=>{{type:'INCREMENT'}}   ;
   const decrement=()=>{{type:'DECREMENT'}};
   const reset=()=>{{type:'RESET'}};

   const initialState={count:0};

   const counterReducer = (state = initialState, action) => {
     switch (action.type) {
       case "INCREMENT":
         return { ...state, count: state.count + 1 };
       case "DECREMENT":
         return { ...state, count: state.count - 1 };
       case "RESET":
         return { ...state, count: 0 };
       default:
         return state;
     }
   }

   const store=createStore(counterReducer);
   
  return (
    <div>
      
    </div>
  )
}
