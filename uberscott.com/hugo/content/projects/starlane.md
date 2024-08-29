---
title: "STARLANE"
---

## Project 
An Orchestration and Infrastructure Framework for WebAssembly Components

## What is WebAssembly?

[WebAssembly](https://webassembly.org) (Wasm) is going to disrupt the industry in the next few years. Its a standard for a deterministic virtual machine which is completely isolated from the host environment (it cannot make any dangerous system calls.) Guest method invocation on a host must be explicitly whitelisted. WebAssembly was introduced as a high performance alternative to JavaScript on the browser but in the coming years its compact and secure nature has made it an obvious choice for the backend and in particular will probably replace or augment containers. Many popular languages are presently undergoing accelerated efforts to update their compilers to support WebAssembly targets.

## And Why Starlane?

As a software developer who created full stack software solutions for years I often lamented development time and energy being expended on what I consider to be necessities that did not add value to the end user… Allow me to expand upon that: Every software solution worth its bits needs to do something unique for its end user. This “unique” offering is sometimes called the “Business Logic.” And yet, every software project requires a great deal of what I call “infrastructure” code in order to work at all. I consider many common aspects of a program's infrastructure elements: networking, versioning, upgrading, storage, data sanitization, discovery and much more.

The Starlane framework aims to automagically provide as much infrastructure as possible around multiple WebAssembly feature components so that developers can intensify their focus on code that adds value to their users.

The name “Star Lane” was chosen because it conjures imagery of objects (WebAssembly feature components) and a tunneling structure that connects those objects. Imagine the various feature components represented by a ***Star*** and tunnels where those Stars share information as the ***Lanes*** So… **StarLane**!


## Circa 
2021 - CURRENT (not as actively developed in the last year but I’d like to pick it up again)

## What I did
Well, I wrote it all myself. Some people have expressed interest in contributing but the project hasn’t achieved that level of popularity yet.

Starlane is primarily written in Rust, but end users can extend it with any language that compiles to WebAssembly.

Starlane runs as a standalone process but also can run on top of Kubernetes thanks to a Kubernetes Operator that I wrote in Golang.



## A Work in Progress

Starlane is not production ready by any means. It has an interesting potential and it does a lot already, but I would not use it in a production setting. Much of what Starlane will be is still being discovered.

## Website

[http://starlane.io](https://starlane.io)

[github](https://github.com/cosmic-initiative/cosmic-initiative)
