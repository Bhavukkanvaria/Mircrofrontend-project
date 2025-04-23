import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    // initialState: { user: null },
    initialState: {
        user: null,
        token: null,
        role: 'guest' // 'admin' | 'user' | 'guest'
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role; // 'admin' | 'user
        },
        logout: (state, _action) => {
            state.user = null;
            state.token = null;
            state.role = 'guest';
        }
    },
});

export const authSliceReducer = authSlice.reducer;
export const {login, logout} = authSlice.actions;



// export const analyticsSlice = createSlice({
//     name:'analytics',
//     initialState:{ pageViews: 0 },
//     reducers:{
//         incrementPageView: (state,_action) => {
//             state.pageViews += 1;
//         }
//     }
// })


export const fetchData = createAsyncThunk(
    'analytics/fetchData',
    async()=>{
        // Mock API call
        return new Promise((resolve,_reject)=>{
            setTimeout(()=>{
                resolve([
                    { month: 'Jan', value: 345 },
                    { month: 'Feb', value: 412 },
                    { month: 'Mar', value: 587 }
                ])
            },1000)
        })
    }
)

export const analyticsSlice = createSlice({
    name:'analytics',
    initialState:{
        data:[],
        loading: false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        });
    }   

})

export const {incrementPageView} = analyticsSlice.actions