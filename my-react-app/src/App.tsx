import { useMemo } from 'react'
import './App.css'
import { List } from '@gravity-ui/uikit'
import { ListItem } from './ListItem'

function App() {
  const renderItem = ({ name }: { name: string }) => {
    return <ListItem name={name}/>
  }

  const options = useMemo(() => {
    return [
      { name: 'one' },
      { name: 'two' },
      { name: 'three' },
    ]
  }, [])

  return (
    <>
      <List 
        items={options} 
        itemsHeight={160} 
        renderItem={renderItem} 
        filterItem={(f) => (item) => item.name.includes(f)}
      />
    </>
  )
}

export default App
