#!/bin/sh

for file in *.graphql; do
    curl -X POST -H "Content-Type: application/json" -H "Accept: application/n-quads" -H "Accept-encoding: gzip" --data-binary @$file https://labs.kadaster.nl/enhancer > $file.nq.gz
done
