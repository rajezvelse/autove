import React from "react";
import logo from "./logo.svg";
import { ThemeProvider } from "styled-components";
import { AppHeader } from "./styled-components";
import AppTheme from "./App.theme";

import "./App.css";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={AppTheme}>
			<div className="App">
				<AppHeader>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</AppHeader>
			</div>
		</ThemeProvider>
	);
};

export default App;
