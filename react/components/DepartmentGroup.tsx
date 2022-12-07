import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  const CSS_HANDLES = [
    'selectContainer',
    'selectDropdown',
    'selectOption'
  ]
  const handles = useCssHandles(CSS_HANDLES)
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id} className={handles.selectOption}>
        {department.name}
      </option>
    )
  })

  return (
    <div className={handles.selectContainer}>
      <select
        defaultValue="value0"
        onChange={onHandleSetSlug}
        className={handles.selectDropdown}
      >
        <option
          disabled
          value="value0"
          className={handles.selectOption}>Todo</option>
        {departmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup
