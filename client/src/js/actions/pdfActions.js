import axios from "axios";

export function generatePDF( params ) {
  return {
    type: "GENERATE_PDF",
    payload: axios.post( "http://smashpdf-server.alquemedia.com",{
      json: JSON.parse(params.json),
      template: params.template
    })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
