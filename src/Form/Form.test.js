import React from 'react';
import { mount } from 'enzyme';
import  Form  from '../Form/Form';

describe('Test case for testing form',() =>{

it('calls onSubmit prop function when form is submitted', () => {
  const submituserRegistrationForm = jest.fn();
  const wrapper = mount(<Form onSubmit={submituserRegistrationForm}/>);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(submituserRegistrationForm).toHaveBeenCalledTimes(1);
});
it('renders text input with label (default type)', () => {
  const wrapper = mount(<Form name="first_name" label="First Name" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('first_name');
  expect(label.text()).toEqual('First Name');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('name')).toEqual('first_name');
  expect(input.prop('id')).toEqual('first_name');
});
it('renders email input with label given the type', () => {
  const wrapper = mount(<Form type="email" name="email" label="Email" />);
  const label = wrapper.find('label');
  expect(label).toHaveLength(1);
  expect(label.prop('htmlFor')).toEqual('email');
  expect(label.text()).toEqual('Email');
  const input = wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('email');
  expect(input.prop('name')).toEqual('email');
  expect(input.prop('id')).toEqual('email');
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
  expect(input.prop('id')).toEqual('mobile no');
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
  expect(input.prop('id')).toEqual('password');
});
})
