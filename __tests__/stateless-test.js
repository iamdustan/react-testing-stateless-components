jest.dontMock('../stateless');

describe('thing', function() {
  it('render', function() {
    var React = require('react');
    var findDOMNode = require('react-dom').findDOMNode;
    var StatelessComponent = require('../stateless');
    var TestUtils = require('react/lib/ReactTestUtils');

    var spy = jasmine.createSpy();
    var component = TestUtils.renderIntoDocument(
      <StatelessComponent text="Hello" onClick={spy} />
    );

    expect(findDOMNode(component).textContent).toBe('Hello');
  });

});

