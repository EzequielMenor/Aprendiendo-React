import { Action, type State } from '../types'
import { useReducer } from 'react'

// 1. Create a initialState
const initialState: State = {
  fromLanguege: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguege: state.toLanguage,
      toLanguage: state.fromLanguege,
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguege: action.payload,
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload,
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: '',
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload,
    }
  }

  return state
}

export function useStore() {
  // 3. usar el hook useReducer
  const [{ fromLanguege, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  return {
    fromLanguege,
    toLanguage,
    fromText,
    result,
    loading,
  }
}
