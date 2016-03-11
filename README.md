Angular digest cycle
===

> AngularJS remembers the value and compares it to previous value. This is basic dirty-checking. If there is a change in value, then it fires the change event.

> The `$apply()` method, which is what you call when you are transitioning from a non-AngularJS world into an AngularJS world, calls `$digest()`. A digest is just plain old dirty-checking. It works on all browsers and is totally predictable.

One good read
---

<http://onehungrymind.com/notes-on-angularjs-scope-life-cycle/>