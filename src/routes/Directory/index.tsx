import { useEffect, useState } from 'react'

import api, { TreeNode } from 'services/directory'

import * as Styled from './index.styles'
import Child from './Child'

const Directory = () => {
  const [directory, setDirectory] = useState<TreeNode[]>()

  useEffect(() => {
    api.getDirectoryTree().then((res) => setDirectory(res))
  }, [])

  return (
    <Styled.Directory>
      {directory && (
        <Styled.ChildContainer>
          {directory.map((d) => (
            <Child key={`${d.id}-${d.name}`} child={d} />
          ))}
        </Styled.ChildContainer>
      )}
    </Styled.Directory>
  )
}

export default Directory
