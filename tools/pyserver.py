#!/usr/bin/env python3
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

# before python 3.8, we have to add the wasm mime type
Handler.extensions_map['.wasm'] = 'application/wasm'

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving http://0.0.0.0:"+str(PORT))
    httpd.serve_forever()
