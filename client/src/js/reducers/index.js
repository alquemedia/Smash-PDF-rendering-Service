import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import pdf from "./pdfReducer"

export default combineReducers({
  tweets,
  user,
  pdf
})
