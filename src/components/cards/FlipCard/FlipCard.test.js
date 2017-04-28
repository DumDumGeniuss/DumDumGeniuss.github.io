import React from "react";
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from "enzyme";
import FlipCard from "./FlipCard.js";

describe('FlipCard', () => {
	let props;
	let mountedFlipCard;
	const flipCard = () => {
		if (!mountedFlipCard) {
			mountedFlipCard = mount(
				<FlipCard {...props} />
			);
		}
		return mountedFlipCard;
	}

	beforeEach(() => {
		props = {
			width: 300, 
			widthUnit: 'px',
			height: 100,
			heightUnit: 'px',
			titleWords: 'Taiwan',
			frontWords: '1st',
			backWords: 'Taipei',
			show: true,
			onMouseEnter: jest.fn(),
			onMouseLeave: jest.fn(),
		};
		mountedFlipCard = undefined;
	});

	it("always renders a div", () => {
		const divs = flipCard().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("props show controll the class successfully while true", () => {
		let divs = flipCard().find("div");
		expect(divs.first().props().className).toBe('FlipCard-mainZone FlipCard-mainZoneShow');
	});

	it("props show controll the class successfully while false", () => {
		props.show = false
		let divs = flipCard().find("div");
		expect(divs.first().props().className).toBe('FlipCard-mainZone');
	});

	it("Shoud properly do callback function after mouse enter", () => {
		let divs = flipCard().find("div");
		const mainDiv = divs.first();
		mainDiv.simulate('mouseEnter');
		expect(flipCard().props().onMouseEnter).toBeCalled();
	});

	it("Shoud properly do callback function after mouse leave", () => {
		let divs = flipCard().find("div");
		const mainDiv = divs.first();
		mainDiv.simulate('mouseLeave');
		expect(flipCard().props().onMouseLeave).toBeCalled();
	});
});
