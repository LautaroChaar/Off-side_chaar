import React from 'react';
import '../RedirectPageGithub/Redirecting.css';


export default function RedirectPageInstagram() {

    React.useEffect(() => {
      window.location.replace('https://www.instagram.com/lautichaar');
    }, [])
    
  return (
    <div className='redirectingContainer'><h3>Redirecting...</h3></div>
  )
}
