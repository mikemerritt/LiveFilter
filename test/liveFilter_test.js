(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  // Testing options
  test('defaults', function() {
    ok($.fn.liveFilter.options, 'options set up correctly');
    equal($.fn.liveFilter.options.delay, 0, 'default options are set');
    $.fn.liveFilter.options.delay = 100;
    equal($.fn.liveFilter.options.delay, 100, 'can change the defaults globally');
  });

  // Testing chainability
  test('chainable', function() {
    ok($('ul').liveFilter().addClass('chainable'), 'can be chained');
    equal($('ul').attr('class'), 'chainable', 'class was added correctly from chaining');
  });

  // Testing filter input
  test('input', function() {
    $('ul').liveFilter();
    ok($('input.filter-input').length, 'has been created');
    equal($('input.filter-input').attr('placeholder'), $.fn.liveFilter.options.defaultText, 'has the correct default text');
  });

  // Testing hideDefault
  test('hideDefault', function() {
    $('ul').liveFilter({hideDefault: true});
    ok($('ul li:hidden').length, 'list is hidden by default');
  });

  // Testing list filtering
  test('list', function() {
    $('ul').liveFilter();
    $('input.filter-input').val('show long');
    $('input.filter-input').trigger('keyup');
    equal($('ul').find('li:visible').length, 5, 'matches are visible');
  });

}(jQuery));