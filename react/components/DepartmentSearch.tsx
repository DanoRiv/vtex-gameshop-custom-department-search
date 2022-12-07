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
    'departmentSearchContainer'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return loading
    ?
    <div>Loading...</div>
    :
    <div className={`${handles.departmentSearchContainer} flex items-center w-100`}>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Encuentra productos..."
        displayMode="search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch
