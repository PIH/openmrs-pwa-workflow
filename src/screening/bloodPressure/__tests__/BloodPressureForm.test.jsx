import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import MockRouter from 'react-mock-router';
import { Provider } from 'react-redux';
import { Container } from 'bahmni-form-controls';
import BloodPressureForm from '../BloodPressureForm';


let props, store;
let mountedComponent;

const mockStore = configureMockStore();

const bloodPressureForm = () => {
  if (!mountedComponent) {
    mountedComponent = mount(
      <Provider store={store}>
        <MockRouter>
          <BloodPressureForm {...props} />
        </MockRouter>
      </Provider>);
  }
  return mountedComponent;
};

describe('Component: BloodPressureForm', () => {
  beforeEach(() => {
    props = {};
    store = mockStore(
      {
        selectedPatient: {
          patient: {
            patient: {
              uuid: "abc",
              activeVisit: {
                uuid: "def"
              }
            }
          },
        }
      });
    mountedComponent = undefined;
  });

  it('renders properly', () => {
    expect(toJson(bloodPressureForm())).toMatchSnapshot();
    expect(bloodPressureForm().find(Container).length).toBe(1);
  });

});
