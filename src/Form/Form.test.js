
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';
configure({ adapter: new Adapter()});

it('show the alert message', ()=> {
  const from = shallow(<Form />);
  const spy = jest.spyOn(from.instance(),"submituserRegistrationForm" );
  from.instance().forceUpdate();
  const e = {
    alert: "form submited"
  }
  form.find("button").simulate("onSubmit", e);
   expect(spy).toHaveBeenCalledWith(e);
})
it('render the onChange event', user => {
const UserComponent = mount(<Form />),
userInput = EmailComponent.find("input[type='text']");
UserComponent.instance().handleChange = jest.fun();
userInput.simulate('change', {target: {value: "Parul"}});
user();

expect(UserComponent.instance().handleChange.mock.calls.length).toBe(1);
})
describe("render the form validation", () => {
  test("should display an error when no value is input filed  EmailId", () => {
    const validation = spy();
    wrapper = mount(<Form validation={validation} />)
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.emailid
    ).toBe('Please enter your emailid');

  })
  test("should dispaly an error when no value is input filed Username ", () => {
     validation = spy();
     wrapper = mount(<Form validation={validation} />)
     wrapper.find('form').simulate('Register');
     expect(
       wrapper.state().fieldErrors.username
     ).toBe("please enter your username");
  })
  test("should display an error when no value is input filed mobileno", () => {
    validation = spy();
    wrapper = mount(<Form  validation={validation}/>)
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.mobileno
    ).toBe("please enter your number");
  })
  test("should display an error when no value is input filed password", ()=> {
    validation = spy();
    wrapper = mount(<Form  validation={validation}/>)
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.password
    ).toBe("please enter your password");
  })
})
