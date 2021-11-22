import { ADD_TAG, SELECTED_TAG ,REMOVE_TAG } from "../content"
const initStore = [{ id: 0, icon: "", title: "首页", key: "0", route: "/home" }]
export function TagList(prevStore = initStore, action) {
  const { type, data } = action
  switch (type) {
    case ADD_TAG:
      const findNode = prevStore.find((item) => {
        return item.id === data.id
      })
      if (findNode) return prevStore
      return [...prevStore, data]
    case REMOVE_TAG:
      const newStore = prevStore.filter((item) => {
        return item.id !== data.id
      })
      return newStore
    default:
      return prevStore
  }
}

export function SelectedTag(prevStore = initStore[0], action) {
  const { type, data } = action
  switch (type) {
    case SELECTED_TAG:
      return data
    default:
      return prevStore
  }
}
