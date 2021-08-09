// export const StatusFilters = {
//     All: 'all',
//     Completed: 'completed',
//     Active: 'active'
// }

const initState = {
    status: 'all'
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/statusFilterChange':
            return {
                ...state,
                status:action.payload
            }
        default:
            return state
    }

}

export default filterReducer