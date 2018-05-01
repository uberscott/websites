#!/bin/bash

VERSION=1.0.0

docker build . --tag uberscott/uberscott.com:$VERSION

docker push uberscott/uberscott.com:$VERSION

