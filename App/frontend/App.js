"use strict";

//import { } from "Components/";

class App {
	constructor(){
		this.iframe = document.getElementById('url');
		this.title = document.title;
		app.setPage(site.welcome);
	}

	getPage(){

	}

	setPage(urlPage){
		this.title = urlPage.name
		this.iframe.src = urlPage.path + '.html';
		this.setSession(urlPage);
	}

	setSession(urlPage){
		this.html = document.body.innerHTML;
		window.history.pushState(this.html, urlPage.name, ("http://" + this.page.domain + urlPage.path));
	}
};