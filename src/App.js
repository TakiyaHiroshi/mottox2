import React from "react";
import "./styles.css";

const App = () => {
	return (
		<div className="App">
			<header>
				<h1>Hello CodeSandbox</h1>
				<nav>
					<a href="#about">About</a>
					<a href="#works">Works</a>
				</nav>
			</header>
			<div>
				<h1>mottox2</h1>
				<p>Web Engineer, Prototyper</p>
			</div>
			<section>
				<h2>About</h2>
				<p>
					React、Gatsby、Ruby on Railsを中心に都内で開発しているエンジニアです。
				</p>
			</section>
			<section>
				<h2>Works</h2>
				<ul>
					<li>
						<img src="" />
						<h3>成果物1</h3>
					</li>
					<li>
						<img src="" />
						<h3>成果物2</h3>
					</li>
				</ul>
			</section>
			<footer>
				<a href="https://twitter.com/mottox2">Twitter</a>
			</footer>
		</div>
	);
};
