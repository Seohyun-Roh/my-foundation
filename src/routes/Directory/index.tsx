import { useEffect, useState } from 'react'

import api, { TreeNode } from 'services/directory'

import Child from './Child'

const Directory = () => {
  const [directory, setDirectory] = useState<TreeNode[]>()

  useEffect(() => {
    api.getDirectoryTree().then((res) => setDirectory(res))
  }, [])

  return (
    <div>
      {directory && (
        <ul>
          {directory.map((d) => (
            <Child key={`${d.id}-${d.name}`} child={d} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Directory
