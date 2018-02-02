//State argument is not app state only statethis reducer is responsible for 
//most are set up as switch statements
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}