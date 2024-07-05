import { MantineColorScheme } from '@mantine/core'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type LaunchState = {
  mode?: MantineColorScheme
  lang?: string
}

export type LaunchActions = {
  changeDarkMode: () => void
  changeLightMode: () => void
}

export type LaunchStore = LaunchState & LaunchActions

export const defaultInitState: LaunchState = {
  lang: 'en',
  mode: 'auto',
}

export const useLaunchStore = create(
  persist<LaunchStore>(
    (set, get) => ({
      ...defaultInitState,
      changeDarkMode: () => set((state) => ({ ...state, mode: 'dark' })),
      changeLightMode: () => set((state) => ({ ...state, mode: 'light' })),
    }),
    {
      name: 'launch-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
