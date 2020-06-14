import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import "minireset.css";
import "./styles.css";
import WorkItem from "./WorkItem";

const App = () => {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>mottox2 ポートフォリオ</title>
				<meta name="description" content="ポートフォリオサイトのサンプルです" />
			</Helmet>

			<Header />
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
					<WorkItem title="すごいC向けサービス" category="2018 - Frontend" />
					<WorkItem
						title="すごいスマートフォンアプリ"
						category="2017 - Design"
					/>
				</ul>
			</section>
			<Footer />
		</div>
	);
};

export default App;
