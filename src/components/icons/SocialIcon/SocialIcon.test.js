import React from "react";
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from "enzyme";
import SocialIcon from "./SocialIcon.js";

describe('SocialIcon', () => {
	let props;
	let mountedSocialIcon;
	const socialIcon = () => {
		if (!mountedSocialIcon) {
			mountedSocialIcon = mount(
				<SocialIcon {...props} />
			);
		}
		return mountedSocialIcon;
	}

	beforeEach(() => {
		props = {
			type: 'linkedin',
			link: 'https://www.linkedin.com/in/messi-yang-671987b7/',
			backgroundColor: '#0077B5',
			color: 'white',
			onMouseEnter: jest.fn(),
			onMouseLeave: jest.fn(),
		};
		mountedSocialIcon = undefined;
	});

	it("always renders a \'a\' tag", () => {
		const a = socialIcon().find("a");
		expect(a.length).toBeGreaterThan(0);
	});

	it("Shoud properly do some action function after mouse enter", () => {
		let divs = socialIcon().find("div");
		const firstDiv = divs.first();
		firstDiv.simulate('mouseEnter');
		expect(socialIcon().props().onMouseEnter).toBeCalled();
		expect(socialIcon().state().spin).toBe(true);
		expect(firstDiv.props().className).toBe('SocialIcon-mainZone SocialIcon-mainZoneSpin');
	});

	it("Shoud properly do some action function after mouse leave", () => {
		let divs = socialIcon().find("div");
		const firstDiv = divs.first();
		firstDiv.simulate('mouseLeave');
		expect(socialIcon().props().onMouseLeave).toBeCalled();
		expect(socialIcon().state().spin).toBe(false);
		expect(firstDiv.props().className).toBe('SocialIcon-mainZone');
	});
});
