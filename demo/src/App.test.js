import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });
test("renders non-empty component without crashing", () => {
  const wrapper = shallow(<App />);
  // if you not sure to what contain render use
  console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});
