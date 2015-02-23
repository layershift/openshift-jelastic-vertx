#!/bin/bash

# Simple deploy and undeploy scenarios for Jelastic Python

function _setContext(){
        echo "You application just been deployed to wsgi context"
        }

include php-common-deploy;  # functionality which is already implemented for PHP reused for VertX applications as well
