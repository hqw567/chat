import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'


export type TPresets = IPresets[]

export interface IPresets {
  name: string
  client: string
  options: IPresetsOptions
  createdAt: number
}

export interface IPresetsOptions {
  toneStyle: string
}
type LocalStorageResult<T> = [T, (value: T) => void]

export const usePresetsStore = defineStore('presetsStore', () => {
  const presets: LocalStorageResult<TPresets> = useLocalStorage<TPresets>('presetsStore/presets',[])
  const activePresetName: string = useLocalStorage<string>('presetsStore/activePresetName', 'chatgpt')
  const activePreset = computed(() => getPreset(activePresetName.value))

  function setActivePresetName(name: string) {
    activePresetName.value = name
  }

  function setPreset(name: string, client: string, options: any, setActive: boolean) {
    let preset
    // update preset by ID or add new
    const existingIndex = presets.value.findIndex((_preset: any) => _preset.name === name)
    if (existingIndex !== -1) {
      const existingPreset = presets.value[existingIndex]
      // only update options as the other values are not editable
      existingPreset.options = options
      presets.value[existingIndex] = existingPreset
      preset = existingPreset
    }
    else {
      preset = {
        name,
        client,
        options,
        createdAt: Date.now(),
      }
      presets.value.push(preset)
    }
    if (setActive)
      activePresetName.value = preset.name
  }

  function getPreset(name: string) {
    let nameToUse: string
    switch (name) {
      case 'chatgpt':
        nameToUse = 'OpenAI API'
        break
      case 'chatgpt-browser':
        nameToUse = 'ChatGPT'
        break
      case 'bing':
        nameToUse = 'Bing'
        break
      default:
        nameToUse = name
        break
    }
    return presets.value.find((preset: any) => preset.name === nameToUse)
  }

  function deletePreset(name: string) {
    const existingIndex = presets.value.findIndex((_preset: any) => _preset.name === name)
    if (existingIndex !== -1)
      presets.value.splice(existingIndex, 1)
  }

  return {
    presets,
    activePresetName,
    activePreset,
    setActivePresetName,
    setPreset,
    getPreset,
    deletePreset,
  }
})
