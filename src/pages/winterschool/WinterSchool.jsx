import React from "react";

import $ from 'jquery';
import optiver_logo from "./media/optiverlogo.png";
import eco_logo from "media/eco.png";
import "./winterschool.css";
import EventsTimeline from "./Timeline/EventsTimeline";

class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click((event) => function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId !== newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}
export default class WinterSchool extends React.Component{
    controller = new StickyNavigation();
    sectionIds = ["about", "timeline", "register"]
    render(){
        return(
            <div className="hero-container">
            {/* Hero */}
            <section className="et-hero-tabs">
                <img src={eco_logo} alt="Optiver" width={200}/>
                <h3>Presents</h3>
                <h1>WINTER SCHOOL 2023</h1>
                <h3>Sponsored by</h3>
                <img src={optiver_logo} alt="Optiver" width={200}/>
                <div className="et-hero-tabs-container">
                    <a className="et-hero-tab" href={"#" + this.sectionIds[0]}>
                        About
                    </a>
                    <a className="et-hero-tab" href={"#" + this.sectionIds[1]}>
                        Timeline
                    </a>
                    <a className="et-hero-tab" href={"#" + this.sectionIds[2]}>
                        Register
                    </a>
                    <span className="et-hero-tab-slider" />
                </div>
            </section>
            {/* Main */}
            <main className="et-main">
                <section className="et-slide" id={this.sectionIds[0]}>
                    <h1>About</h1>
                    <h3>something about es6</h3>
                </section>
                <section className="et-slide" id={this.sectionIds[1]}>
                    <EventsTimeline></EventsTimeline>
                </section>
                <section className="et-slide" id={this.sectionIds[2]}>
                    <h1>Register</h1>
                    <h3>something about react</h3>
                </section>

            </main>
        </div>
            
        );
    }
}