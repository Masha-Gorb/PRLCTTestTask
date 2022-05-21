import axios from 'axios';
import {useEffect, useState} from "react";

export const TestComponentUsername = () => {
  const [state, setState] = useState<any>(null)
  useEffect((username = 'Masha-Gorb') => {
      axios.get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setState(res.data.name);
      })

  }, [])
  return <div> TestComponent2: {JSON.stringify(state)}</div>
}
