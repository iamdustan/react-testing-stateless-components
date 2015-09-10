jest.dontMock('../class');

describe('thing', function() {
  it('render', function() {
    var React = require('react');
    var findDOMNode = require('react-dom').findDOMNode;
    var Component = require('../class');
    var TestUtils = require('react/lib/ReactTestUtils');

    var spy = jasmine.createSpy();
    var component = TestUtils.renderIntoDocument(
      <Component text="Hello" onClick={spy} />
    );

    expect(findDOMNode(component).textContent).toBe('Hello');
  });

});


