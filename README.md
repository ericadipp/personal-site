---
description: >-
  “Master the JavaScript Interview” is a series of posts designed to prepare
  candidates for common questions they are likely to encounter when applying for
  a mid to senior-level JavaScript position. The
cover: https://miro.medium.com/max/1400/1*agGENodMcD6hhwIFdqGwrw.jpeg
coverY: 0
---

# Master the JavaScript Interview: What is a Promise?

#### What is a promise?

<mark style="color:green;">A promise is an object that may produce a single value some time in the future</mark>: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out [observables](https://github.com/Reactive-Extensions/RxJS) or [tasks](https://github.com/rpominov/fun-task).



#### An Incomplete History of Promises <a href="#b1f7" id="b1f7"></a>

Early implementations of promises and futures (a similar / related idea) began to appear in languages such as MultiLisp and Concurrent Prolog as early as the 1980’s. The use of the word “promise” was coined by Barbara Liskov and Liuba Shrira in 1988\[1].



The first time I heard about promises in JavaScript, Node was brand new and the community was discussing the best way to handle asynchronous behavior. The community experimented with promises for a while, but eventually settled on the Node-standard error-first callbacks.



Around the same time, Dojo added promises via the Deferred API. Growing interest and activity eventually led to the newly formed Promises/A specification designed to make various promises more interoperable.

{% hint style="info" %}
I love this gitbook. but let me see if it has my requirements.
{% endhint %}









