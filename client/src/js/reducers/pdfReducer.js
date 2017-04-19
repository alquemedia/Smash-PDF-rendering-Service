export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
        case 'GENERATE_PDF_FULFILLED':{
            console.log(action.payload.data);
            return state;
        }

    }

    return state
}
