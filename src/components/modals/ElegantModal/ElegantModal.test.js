import React from "react";
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from "enzyme";
import ElegantModal from "./ElegantModal.js";

describe('SocialIcon', () => {
	let props;
	let mountedElegantModal;
	const elegantModal = () => {
		if (!mountedElegantModal) {
			mountedElegantModal = mount(
				<ElegantModal {...props} />
			);
		}
		return mountedElegantModal;
	}

	beforeEach(() => {
		props = {
			grow: true,
			borderColor: 'black',
			backgroundColor: 'white',
			onClick: jest.fn()
		};
		mountedElegantModal = undefined;
	});

	it("always renders div tag", () => {
		const divs = elegantModal().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("props grow controll the class successfully while true", () => {
		props.grow = true;
		let divs = elegantModal().find("div");
		expect(divs.first().props().className).toBe('ElegantModal-mainZone ElegantModal-mainZoneGrow');
	});

	it("props grow controll the class successfully while false", () => {
		props.grow = false;
		let divs = elegantModal().find("div");
		expect(divs.first().props().className).toBe('ElegantModal-mainZone');
	});

	it("Shoud properly do some action function after mouse click", () => {
		let divs = elegantModal().find("div");
		const firstDiv = divs.first();
		firstDiv.simulate('click');
		expect(elegantModal().props().onClick).toBeCalled();
	});
});
