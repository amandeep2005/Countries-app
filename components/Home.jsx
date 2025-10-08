import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';
import UseThem from '../Hooks/UseThem';

export default function Home() {

  const [query, setQuery] = useState('')
  const [isDark] = UseThem()
  
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
