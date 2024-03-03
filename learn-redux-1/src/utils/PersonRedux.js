import { createSlice } from '@reduxjs/toolkit'

export const PersonRedux = createSlice( {
    name: 'person',
    initialState: {
        personal_info : {name: "Athi",
        position: "CEO"},
        proof : [{name: "id1", no : "572352352533"},{name: "id2", no : "123456908878768453fvad6"}]
    },
    reducers: {
        update_info: (state, callbackAction) => {
            state.personal_info = callbackAction.payload.name;
            return state;
        },
        update_proof: (state, dispatchactioncallback) => {
        }
    }
})

export const { update_info, update_proof } = PersonRedux.actions;

export default PersonRedux.reducer;

