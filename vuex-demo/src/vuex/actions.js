/**
 * Created by Yi on 16/8/15.
 */

export const incrementCounter = ({dispatch, state}) =>{
    dispatch('INCREMENT', 1)
}

export const decrementCounter = ({dispatch, state})=>{
    dispatch('DECREMENT', 1)
}