import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import  Form  from '../Form/Form';

describe('Test case for testing form',() =>{

it('calls onSubmit prop function when form is submitted', () => {
  const submituserRegistrationForm = jest.fn();
  const wrapper = shallow(<Form onSubmit={submituserRegistrationForm}/>);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(submituserRegistrationForm).toHaveBeenCalledTimes(1);
});
it('renders text input with label (default type)', () => {
  const wrapper = mount(<Form name="name" label="Name" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('name');
  expect(label.text()).toEqual('Name');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('name')).toEqual('username');
  
});
it('renders email input with label given the type', () => {
  const wrapper = mount(<Form type="email" name="emailid" label="Email ID" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('emailid');
  expect(label.text()).toEqual('Email ID');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('email');
  expect(input.prop('name')).toEqual('emailid');
});
it('renders mobile no input with label given the type', () => {
  const wrapper = mount(<Form type="mobile no" name="mobile no" label="Mobile no" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('mobile no');
  expect(label.text()).toEqual('Mobile no');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('mobile no');
  expect(input.prop('name')).toEqual('mobile no');
});
it('renders password input with label given the type', () => {
  const wrapper = mount(<Form type="password" name="password" label="Password" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('password');
  expect(label.text()).toEqual('Password');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('password');
  expect(input.prop('name')).toEqual('password');
  
});
test('<form> element should have onSubmit attribute', () => {
  expect(
    wrapper.props.onSubmit
  ).toBeDefined();
});
test('onSubmit attrubute should be of type `function`' , () =>{
  expect(
    typeof wrapper.props().onSubmit === 'function'
  ).toBe(true);
  
});
 describe('`<input>` ',() => {
   test('<input> element should be of type text' , ()=> {
     expect(
       wrapper.find('form').childAt(0).props().type
     ).toBe('text');
   });
  
   test('should display an error when no value is input',() => {
    const validation = spy();
    wrapper = mount(<Form validation={validation}/>);
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.name
    ).toBe('Please enter your username');
  });
  test('should display an error when no value is input',() => {
    const validation = spy();
    wrapper = mount(<Form validation={validation}/>);
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.emailid
    ).toBe('Please enter your  emailid');
  });
  test('should display an error when no value is input',() => {
    const validation = spy();
    wrapper = mount(<Form validation={validation}/>);
    wrapper.find('form').simulate('Register');
    expect(
      wrapper.state().fieldErrors.password
    ).toBe('Please enter your password');
  });
 })
})


