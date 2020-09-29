#!/bin/sh

for file in *.graphql; do
    curl -X POST -H "Content-Type: application/json" -H "Accept: application/n-quads" --data-binary @$file https://labs.kadaster.nl/enhancer | gzip > $file.nq.gz
done
