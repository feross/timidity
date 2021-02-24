#!/usr/bin/env bash
set -euo pipefail

yarn run bundle && ./tools/build.sh && \cp libtimidity.js test/ && http-server test/
