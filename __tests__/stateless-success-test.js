jest.dontMock('../stateless');

describe('Stateless Components', function() {
  var React = require('react');
  var findDOMNode = require('react-dom').findDOMNode;
  var TestUtils = require('react/lib/ReactTestUtils');

  var StatelessComponent = require('../stateless');

  it('renders', function() {
    var noop = function() {};
    var component = TestUtils.renderIntoDocument(
      <div><StatelessComponent text="Hello" onClick={noop} /></div>
    );

    expect(findDOMNode(component).textContent).toBe('Hello');
  });

  it('responds to clicks', function () {
    var spy = jasmine.createSpy();
    var component = TestUtils.renderIntoDocument(
      <div><StatelessComponent text="Hello" onClick={spy} /></div>
    );

    // This doesn't work because the component is the div
    TestUtils.Simulate.click(findDOMNode(component));
    expect(spy.callCount).toBe(0);

    // We have to grab the only child which is our stateless component
    TestUtils.Simulate.click(findDOMNode(component).children[0]);

    expect(spy.callCount).toBe(1);
  });
});

