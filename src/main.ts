import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//make an api get request

//add cors header to the response
//https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo



const url = 'https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo'

fetch(url,
	{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'no-cors'
		}
	
	}
	).then(response => response.json()).then(data => {
	console.warn(data)
})

/*
document.querySelector<HTMLDivElement>('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
*/