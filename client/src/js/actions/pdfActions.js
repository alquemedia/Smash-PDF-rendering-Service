import axios from "axios";

export function generatePDF() {
  return {
    type: "GENERATE_PDF",
    payload: axios.post("http://smash.localhost.com",{
      json: { "a":"b"},
      template: "<p>Hi</p>"
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
