import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GroupListTeam from "./../../../../src/Domains/Groups/components/GroupListTeam";


describe("Test/Groups/Components/GroupListTeamTest", () => {

    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render groups list team row", () => {
        const team = {
            country: "Brazil"
        }

        const wrapper = Enzyme.shallow(<GroupListTeam team={team} />);
        expect(wrapper.find("td").at(0).text()).to.be.equal("Brazil");
    });

});