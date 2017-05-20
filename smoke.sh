#!/usr/bin/env bash
eval $( echo z=`curl -I http://localhost:9009 | grep HTTP > line; cat line| cut -d' ' -f2` )
if [[ "$z" -eq 200 ]]; then
  echo 'Everything fine'
else
  exit 1
fi
