window.BENCHMARK_DATA = {
  "lastUpdate": 1745531300739,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b358d9b57b35569b8b694a8a88cc6d754edb54de",
          "message": "Bump vite from 3.2.11 to 4.5.13 (#7700)\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite)\nfrom 3.2.11 to 4.5.13.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/vitejs/vite/releases\">vite's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.13</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.13/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.12</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.12/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.11</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.11/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.10</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.10/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.9</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.9/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.8</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.8/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.7</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.7/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.6</h2>\n<p>This version contains a breaking change due to security fixes. See <a\nhref=\"https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6\">https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6</a>\nfor more details.</p>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.6/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.5</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.5/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.4</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.4/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.13/packages/vite/CHANGELOG.md\">vite's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><!-- raw HTML omitted -->4.5.13 (2025-04-10)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19830\">#19830</a>,\nreject requests with <code>#</code> in request-target (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19832\">#19832</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/41f3819\">41f3819</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19830\">#19830</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19832\">#19832</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.12 (2025-04-03)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19782\">#19782</a>,\nfs check with svg and relative paths (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19785\">#19785</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/0a3dcf5\">0a3dcf5</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19782\">#19782</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19785\">#19785</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.11 (2025-03-31)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19761\">#19761</a>,\nfs check in transform middleware (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19763\">#19763</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/26e1764\">26e1764</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19761\">#19761</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19763\">#19763</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.10 (2025-03-24)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19702\">#19702</a>,\nfs raw query with query separators (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19704\">#19704</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/315695e\">315695e</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19702\">#19702</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19704\">#19704</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.9 (2025-01-21)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: <code>preview.allowedHosts</code> with specific values was not\nrespected (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19246\">#19246</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/0bc52e0\">0bc52e0</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19246\">#19246</a></li>\n<li>fix: allow CORS from loopback addresses by default (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19249\">#19249</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/8f63cd6\">8f63cd6</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19249\">#19249</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.8 (2025-01-20)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: try parse <code>server.origin</code> URL (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19241\">#19241</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/3680bad\">3680bad</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19241\">#19241</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.7 (2025-01-20)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: <code>crypto.getRandomValues</code> is not available in old\nNode versions (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19237\">#19237</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/f4d3c46\">f4d3c46</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19237\">#19237</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.6 (2025-01-20)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix!: check host header to prevent DNS rebinding attacks and\nintroduce <code>server.allowedHosts</code> (<a\nhref=\"https://github.com/vitejs/vite/commit/ef1049d\">ef1049d</a>)</li>\n<li>fix!: default <code>server.cors: false</code> to disallow fetching\nfrom untrusted origins (<a\nhref=\"https://github.com/vitejs/vite/commit/07b36d5\">07b36d5</a>)</li>\n<li>fix: verify token for HMR WebSocket connection (<a\nhref=\"https://github.com/vitejs/vite/commit/c065a77\">c065a77</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/cd60e8bb2e354ca03d2e5e5b0d0a151cf40698e2\"><code>cd60e8b</code></a>\nrelease: v4.5.13</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/41f3819c869b86aec02e760fd3dabd5e370db284\"><code>41f3819</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19830\">#19830</a>,\nreject requests with <code>#</code> in request-target (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19832\">#19832</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/6104add2ed0204b9821f73dc230f9c05caaad405\"><code>6104add</code></a>\nrelease: v4.5.12</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/0a3dcf5875de6bcea64e2f75bfa452740ca3dfb0\"><code>0a3dcf5</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19782\">#19782</a>,\nfs check with svg and relative paths (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19785\">#19785</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/07ddc3ea3e5750f4761169064be87122f9b698f1\"><code>07ddc3e</code></a>\nrelease: v4.5.11</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/26e1764d54e7440d90226ebb82acbed457807d30\"><code>26e1764</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19761\">#19761</a>,\nfs check in transform middleware (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19763\">#19763</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/86e7a6b8e40cd2fd545744b82b2bc805ced92847\"><code>86e7a6b</code></a>\nrelease: v4.5.10</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/315695e9d97cc6cfa7e6d9e0229fb50cdae3d9f4\"><code>315695e</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19702\">#19702</a>,\nfs raw query with query separators (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19704\">#19704</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/edad4d24955ffa9df853c893a9cfcaab8f1db128\"><code>edad4d2</code></a>\nrelease: v4.5.9</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/8f63cd66a2a46774b4f1a096e43a34b7233ac1ac\"><code>8f63cd6</code></a>\nfix: allow CORS from loopback addresses by default (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19249\">#19249</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/vitejs/vite/commits/v4.5.13/packages/vite\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=vite&package-manager=npm_and_yarn&previous-version=3.2.11&new-version=4.5.13)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/AzureAD/microsoft-authentication-library-for-js/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-24T14:01:14-07:00",
          "tree_id": "66f4ad6224364b835c7caa457c8904063d2fffa2",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/b358d9b57b35569b8b694a8a88cc6d754edb54de"
        },
        "date": 1745531298564,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 250954,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "222 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 253957,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "236 samples"
          }
        ]
      }
    ]
  }
}