import React from "react";
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from "enzyme";
import EmergeMarker from "./EmergeMarker.js";

describe('SocialIcon', () => {
	let props;
	let mountedEmergeMarker;
	const emergeMarker = () => {
		if (!mountedEmergeMarker) {
			mountedEmergeMarker = mount(
				<EmergeMarker {...props} />
			);
		}
		return mountedEmergeMarker;
	}

	beforeEach(() => {
		props = {
			show: true,
			onMouseEnter: jest.fn(),
			onMouseLeave: jest.fn(),
		};
		mountedEmergeMarker = undefined;
	});

	it("always renders div tag", () => {
		const divs = emergeMarker().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});

	// it("props grow controll the class successfully while true", () => {
	// 	props.grow = true;
	// 	let divs = elegantModal().find("div");
	// 	expect(divs.first().props().className).toBe('ElegantModal-mainZone ElegantModal-mainZoneGrow');
	// });

	it("Shoud properly do some action function after mouse enter", () => {
		let divs = emergeMarker().find("div");
		const circleDiv = divs.at(1);
		circleDiv.simulate('mouseEnter');
		expect(emergeMarker().props().onMouseEnter).toBeCalled();
	});

	it("Shoud properly do some action function after mouse leave", () => {
		let divs = emergeMarker().find("div");
		const circleDiv = divs.at(1);
		circleDiv.simulate('mouseLeave');
		expect(emergeMarker().props().onMouseLeave).toBeCalled();
	});
});
