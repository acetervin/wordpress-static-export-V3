#!/usr/bin/env python3
"""
Rappod Static Site — Dev Server
Run: python server.py
Opens: http://localhost:8000
"""
import http.server, socketserver, webbrowser, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache")
        super().end_headers()
    def log_message(self, fmt, *args):
        status = args[1] if len(args) > 1 else '?'
        color  = '\033[92m' if str(status).startswith('2') else '\033[91m'
        print(f"  {color}{status}\033[0m  {args[0]}")

with socketserver.TCPServer(("", PORT), Handler) as srv:
    url = f"http://localhost:{PORT}"
    print(f"\n  \033[1mRappod Stationery\033[0m  →  {url}")
    print(f"  Press Ctrl+C to stop\n")
    webbrowser.open(url)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\n  Server stopped.")
