import { Fragment } from 'react'

import { TreeNode } from 'services/directory'

interface Props {
  data: TreeNode[] | undefined
}

const Child = ({ data }: Props) => {
  return (
    <li>
      <ul>
        {data?.map((child) => {
          return (
            <Fragment key={`${child.id}-${child.name}`}>
              <li>{child.name}</li>
              {child.type === 'folder' && <Child data={child.children} />}
            </Fragment>
          )
        })}
      </ul>
    </li>
  )
}

export default Child
