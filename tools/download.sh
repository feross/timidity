#!/bin/sh
# Download the latest libtimidity release from SourceForge
set -e

rm -rf libtimidity

curl -L https://sourceforge.net/projects/libtimidity/files/latest/download -o /tmp/libtimidity.tar.gz
tar xf /tmp/libtimidity.tar.gz

mv libtimidity-* libtimidity
