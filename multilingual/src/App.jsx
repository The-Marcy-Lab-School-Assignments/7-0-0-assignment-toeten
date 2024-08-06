import { useState } from 'react'
import './App.css'
import Greeting from './assets/components/Greeting'
import LanguageButton from './assets/components/LanguageButton'
import SizeButtons from './assets/components/SizeButtons'



function App() {
  const [greeting, setGreeting] = useState('Good Morning')
  const [fontSize, setFontSize] = useState(24)

  const languages = [
    {name: 'Spanish', greeting: 'Buenos Días'},
    {name:'German', greeting: 'Guten Morgen'},
    {name: 'Chinese', greeting:'早上好'},
    {name: 'Vietnamese', greeting:'Chào buổi sáng'},
    {name: 'Swahili', greeting: 'Habari za asubuhi'}
]

  const handleLanguageChange = (newGreeting) => {
    setGreeting(newGreeting)
  };
  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2)
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2)
  };

  return (
    <div>
      <Greeting greeting={greeting} fontSize={fontSize} />
      <SizeButtons onIncrease={increaseFontSize} onDecrease={decreaseFontSize}/>
      <LanguageButton languages={languages} onLanguageChange={handleLanguageChange} />
    </div>
  )
}

export default App
