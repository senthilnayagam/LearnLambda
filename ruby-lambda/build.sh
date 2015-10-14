#!/bin/bash

set -e
set -x

# GOOS=linux go build -o main

zip -r lambda.zip .

