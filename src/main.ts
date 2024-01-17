import './style.css'

const hora = new Date().getHours();

if (hora >= 12 && hora <= 14) {
	const tudoElement = document.getElementById("tudo");
	if (tudoElement) {
		tudoElement.style.backgroundColor = "#00fa6c";
	}

	const appElement = document.querySelector<HTMLDivElement>('#app');
	if (appElement) {
		appElement.innerHTML = `
			<div>
				<h1>Jah podi</h1>
			</div>
		`;
	}
} else if (hora >= 15 && hora <= 23) {
	const tudoElement = document.getElementById("tudo");
	if (tudoElement) {
		tudoElement.style.backgroundColor = "#ec3830";
	}

	const appElement = document.querySelector<HTMLDivElement>('#app');
	if (appElement) {
		appElement.innerHTML = `
			<div>
				<h1>não podih maise</h1>
			</div>
		`;
	}
}



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