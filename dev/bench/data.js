window.BENCHMARK_DATA = {
  "lastUpdate": 1726339808716,
  "repoUrl": "https://github.com/fondoger/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "87724641+Robbie-Microsoft@users.noreply.github.com",
            "name": "Robbie-Microsoft",
            "username": "Robbie-Microsoft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22d3070a860fc6b301589af9cefa0cecbb6f4e14",
          "message": "msal-node Device Code flow unit test - replaced sinon with jest (#7285)\n\nAll sinon functionality in msal-node's device code flow unit test file\r\nhas been replaced with jest.\r\n\r\nSinon is no longer a dependency of msal-node.",
          "timestamp": "2024-09-11T15:32:18-04:00",
          "tree_id": "bdf84626c87d905a132fadceccac9639dbedef7e",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/22d3070a860fc6b301589af9cefa0cecbb6f4e14"
        },
        "date": 1726339806673,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 191656,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "224 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 195057,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "223 samples"
          }
        ]
      }
    ]
  }
}