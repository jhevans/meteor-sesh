Meteor
======

Meteor is a very ambitious project.  I recommend reading their mission on their site but an extract of it which gives you an idea is "Today, there's a chance to create this new way — to build a new platform for cloud applications that will become as ubiquitous as previous platforms such as Unix, HTTP, and the relational database".  It remains to be seen whether they'll achieve this lofty goal but my two cents is that they've certainly produced something that feels like a big leap forward: if it delivers all that it promises.

Meteor is a full stack Javascript framework, built on Node.js on the server side.  Code runs on both the client and server and Blaze handles reactive UI in much the same way as angular watchers; allowing seamless synchronisation of client and server.  It ships with it's own template rendering engine Spacebars which provides a straighforward but powerful way of creating dynamic html.  Alternatively you can use Angular or React, in fact the core developers are planning to [reduce the prominence of their own Blaze rendering library in favour of React](https://www.discovermeteor.com/blog/blaze-react-meteor/).

Getting from zero to application is a quick process and my immediate impression was that Meteor did deliver on at least some of it's promises.  After dabbling with the [Todo list tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app) it felt like this really was a fantastic prototyping tool, it eliminated a whole stack of... stack decisions, by providing the whole damn lot, server, client, database, rendering engine. It's also all very nicely integrated, and the single javascript codebase eliminates a big chunk of toing and froing between server side and client side, reducing the need for context switching significantly.  You do still need to keep the server client divide in mind when it comes to ensuring that security critical data stays on the server side, but for quick prototypes you can more or less forget the distinction entirely.  It's also got a very good package manager which allows adding big chunks of stuff like authentication with pretty much zero mental effort. 

- server/client separation is still important for security reasons.

Things to cover:
- Optimistic UI
- Full-stack framework
- Angular integration
- real time by default
- packages/modularity : eg accounts-facebook
- Good for beginners - discuss
- Meteor Philosophy

Format:
- Brief Introduction
- Build a simple app
	- Packages - add auth as example
- Discuss advantages and disadvantages
	+ Rapid prototyping
	+ Easily deployable
	+ Optimistic UI makes for very smooth interaction
	+ Full stack out of the box
	+ JS all the way down
	+ Reactivity
		# TODO: Flesh out the scope, meaning and implications of this, read up on blaze/spacebars
	+ Magic!
	- Witchcraft!
	- Optimistic UI can and does cause strange anomalies when things go wrong
		# TODO: Find out if it's possible to disable OUI
	- Blurs the boundary between client and server
	- Gotcha's due to client and server separation
		# TODO: Find examples
	- Globals are prevalent
		# TODO: Find out whether this is canon or can be fixed, is there a DI module?
	- Autoreload is a bit slow 
