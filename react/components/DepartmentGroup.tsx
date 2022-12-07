import React from 'react'

type Props = {
  departments: [Category],
  handleSetSlug: any,
  classes: string
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({departments, handleSetSlug, classes}: Props) => {

  const onHandleSetSlug = (event: any)=> {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Category)=>{
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <div className={classes}>
      <select name="" id="" defaultValue="value0" onChange={onHandleSetSlug}>
        <option disabled value="value0">Seleccione una opción</option>
        {departmentOptions}
      </select>
    </div>
  )
}

export default DepartmentGroup
