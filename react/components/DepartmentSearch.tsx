import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import { SearchBar } from 'vtex.store-components'
import { useCssHandles } from 'vtex.css-handles'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  const CSS_HANDLES = [
    'department-search__container',
    'department-search__select-container',
    'department-search__search-container',
  ]
  const handles = useCssHandles(CSS_HANDLES)
  console.log(slug)
  return loading
  ?
    <div>Loading...</div>
  :
    <div className={`${handles['department-search__container']} flex items-center w-100`}>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
        classes={handles['department-search__select-container']}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Encuentra productos..."
        displayMode="search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch
