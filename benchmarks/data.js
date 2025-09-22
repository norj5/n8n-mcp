window.BENCHMARK_DATA = {
  "lastUpdate": 1758541290001,
  "repoUrl": "https://github.com/norj5/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "65113801+norj5@users.noreply.github.com",
            "name": "norj5",
            "username": "norj5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a89ff1f7aab05fa1b82117d15e3c924fef74a6e",
          "message": "Merge branch 'czlonkowski:main' into main",
          "timestamp": "2025-09-22T13:39:25+02:00",
          "tree_id": "4769cd427bcce5f710adee091120ca9667cd01f5",
          "url": "https://github.com/norj5/n8n-mcp/commit/0a89ff1f7aab05fa1b82117d15e3c924fef74a6e"
        },
        "date": 1758541289560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.019,
            "range": "0.23889999999999997",
            "unit": "ms",
            "extra": "52676 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.163,
            "range": "0.5926",
            "unit": "ms",
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2555",
            "unit": "ms",
            "extra": "214745 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0662,
            "range": "0.3201",
            "unit": "ms",
            "extra": "15104 ops/sec"
          }
        ]
      }
    ]
  }
}