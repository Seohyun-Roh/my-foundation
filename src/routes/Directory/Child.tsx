import { Fragment } from 'react'

import { TreeNode } from 'services/directory'

interface Props {
  data: TreeNode[] | undefined
  depth?: number
}

const Child = ({ data, depth = 0 }: Props) => {
  return (
    <ul>
      {data?.map((child) => {
        return (
          <Fragment key={`${child.id}-${child.name}`}>
            <li style={{ marginLeft: depth * 20 }}>{child.name}</li>
            {child.type === 'folder' && (
              <li>
                <Child data={child.children} depth={depth + 1} />
              </li>
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default Child
