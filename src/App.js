import React from "react";
import "minireset.css";
import "./styles.css";
import { Helmet } from "react-helmet";

export default function App() {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>mottox2 ポートフォリオ</title>
				<meta name="description" content="ポートフォリオサイトのサンプルです" />
			</Helmet>

			<header className="header">
				<h1 className="header-title">Portfolio</h1>
				<nav className="headerNav">
					<a className="headerNav-item" href="#about">
						About
					</a>
					<a className="headerNav-item" href="#works">
						Works
					</a>
				</nav>
			</header>
			<div className="hero">
				<h1 className="hero-title">mottox2</h1>
				<p className="hero-description">Web Engineer, Prototyper</p>
			</div>
			<section className="section" id="about">
				<h2 className="section-title">About</h2>
				<p className="aboutDescription">
					React、Gatsby、Ruby on Railsを中心に都内で開発しているエンジニアです。
				</p>
			</section>
			<section className="section" id="works">
				<h2 className="section-title">Works</h2>
				<ul>
					<li className="workItem">
						<img src="" alt="" />
						<h3 className="workItem-category">成果物1</h3>
						<h3 className="workItem-title">すごいC向けサービス</h3>
					</li>
					<li className="workItem">
						<img src="" alt="" />
						<h3 className="workItem-category">成果物1</h3>
						<h3 className="workItem-title">すごいC向けサービス</h3>
					</li>
				</ul>
			</section>
			<footer className="footer">
				<a href="https://twitter.com/mottox2">Twitter</a>
			</footer>
		</div>
	);
}
