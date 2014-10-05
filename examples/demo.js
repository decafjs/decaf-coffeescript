/**
 * Created by mschwartz on 10/4/14.
 */

// normally you would require('decaf-coffeescript');
// we require(..) because we know the module is there for sure.
require('..');

// should print hello from coffeescript!
include('hello');
// should also print hello from coffeescript!
require('hello');
