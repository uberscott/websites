#!/bin/bash

VERSION=1.0.0

docker build . --tag uberscott/mightydevco.com:$VERSION

docker push uberscott/mightydevco.com:$VERSION

