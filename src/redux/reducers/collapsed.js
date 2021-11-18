import { FALSE, TRUE } from "../content"
export default function Collapsed (prevStore = false, action) {
  const { type, data } = action
  switch (type) {
    case FALSE:
      return data
    case TRUE:
      return data
    default:
      return prevStore
  }
}
