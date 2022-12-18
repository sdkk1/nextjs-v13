import create from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}
type LoginUser = {
  id: string | undefined
  email: string | undefined
}
type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}

const useStore = create<State>((set) => {
  return {
    editedTask: { id: '', title: '' },
    updateEditedTask: (payload) => {
      return set({
        editedTask: payload,
      })
    },
    resetEditedTask: () => {
      return set({ editedTask: { id: '', title: '' } })
    },
    loginUser: { id: '', email: '' },
    updateLoginUser: (payload) => {
      return set({
        loginUser: payload,
      })
    },
    resetLoginUser: () => {
      return set({ loginUser: { id: '', email: '' } })
    },
  }
})

export default useStore
