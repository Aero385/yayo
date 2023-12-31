import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle({ isYearly, onToggle }) {

  const [enabled, setEnabled] = useState(false)
  
  const handleChange = () => {
    const newValue = !enabled;
    setEnabled(newValue); 
    onToggle(newValue); 
  };
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${enabled ? 'bg-test2' : 'bg-test3'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-test1 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
