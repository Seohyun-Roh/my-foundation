import { Fragment } from 'react'

import { TreeNode } from 'services/directory'

interface Props {
  data: TreeNode[] | undefined
  depth?: number
}

const Child = ({ data, depth = 1 }: Props) => {
  return (
    <li>
      <ul>
        {data?.map((child) => {
          return (
            <Fragment key={`${child.id}-${child.name}`}>
              <li style={{ marginLeft: depth * 20 }}>{child.name}</li>
              {child.type === 'folder' && <Child data={child.children} depth={depth + 1} />}
            </Fragment>
          )
        })}
      </ul>
    </li>
  )
}

export default Child
