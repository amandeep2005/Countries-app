import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

export default function UseThem() {
    const [isDark,setIsDark] = useContext(ThemeContext)
  return [isDark,setIsDark]
}
