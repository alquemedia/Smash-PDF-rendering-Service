export default function reducer(state={
    pdf_filename:''
  }, action) {

    switch (action.type) {
        case 'GENERATE_PDF_FULFILLED':{
            return {...state,pdf_filename:action.payload.data.pdf_filename};
        }

    }

    return state
}
