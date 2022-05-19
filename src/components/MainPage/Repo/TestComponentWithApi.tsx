import axios from 'axios';
import {useEffect, useState} from "react";

export const TestComponent = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    axios.get('https://api.github.com/users/Masha-Gorb')
      .then((res) => {
        setState(res.data.name);
      })

  }, [])

  return <div> here are my name: {JSON.stringify(state)}</div>
}
