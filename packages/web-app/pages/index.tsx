import foo from 'foo'
import { Button } from 'ui'

export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Button color="blue">Test</Button>
    </div>
  )
}
