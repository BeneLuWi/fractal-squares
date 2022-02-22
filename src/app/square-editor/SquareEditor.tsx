import React, { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useTree } from '../tree/TreeProvider'
import { SquareNode } from '../square/types'
import { updateNodeByCondition } from '../tree/TreeService'

type SquareEditorProps = {}

const SquareEditor: FunctionComponent<SquareEditorProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { tree, updateNode } = useTree()

  const [code, setCode] = useState('')

  const [output, setOutput] = useState<string>('')

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const evaluate = () => {
    const preamble = `const tree = ${JSON.stringify(tree)};
    const updateNodeByCondition = ${updateNodeByCondition};`
    const func = Function(preamble + code)
    const out: SquareNode = func()
    updateNode([], out, true)
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <div>
      <textarea
        rows={15}
        style={{ width: 360 }}
        className='bg-dark text-white p-2'
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <hr />
      <div className='p-2 text-white'>{output}</div>
      <hr />
      <Button onClick={evaluate}>Eval</Button>
    </div>
  )
}

export default SquareEditor
