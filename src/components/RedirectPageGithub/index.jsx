import React from 'react';
import './Redirecting.css';



export default function RedirectPageGithub() {

    React.useEffect(() => {
      window.location.replace('https://github.com/LautaroChaar');
    }, [])
    
  return (
    <div className='redirectingContainer'><h3>Redirigiendo...</h3></div>
  )
}
