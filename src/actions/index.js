

export function selectBook(book) {
    ///selectBook is an ActionCreator, it needs to return an action,
    //an object with an action property
    return {
        type: "BOOK_SELECTED",
        //type is always uppercase usually string
        payload: book
    };
}


