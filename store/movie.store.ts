import { create } from 'zustand'

interface ModalState {
    url: string;
    open: boolean
    onToggle: (url: string) => void
    onClose: () => void
}

export const useMovieStore = create<ModalState>()((set) => ({
    url: '',
    open: false,
    onToggle: (url) => set((state) => ({ open: !state.open, url })),
    onClose: () => set(() => ({ open: false }))
}))
