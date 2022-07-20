import  {useState} from 'react'

export function useLocalStorage(key,inialValue) {
  const [storedValue, setStoredValue] = useState(()=>{
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : inialValue
    } catch (error) {
        return  inialValue
    }
})

  const setValue = value => {
    try{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }catch (error){
        console.log(error)
    }
  }
  return [storedValue, setValue]
}

