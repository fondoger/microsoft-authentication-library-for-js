window.BENCHMARK_DATA = {
  "lastUpdate": 1754516895168,
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
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b77be57eb982291a32c2bb3c02559933e18e541a",
          "message": "Update dependencies (#7718)\n\nUpdates several dependencies to resolve CVEs",
          "timestamp": "2025-04-25T08:49:50-04:00",
          "tree_id": "aaaaa9c4aea1f274ae77edd1439491eba0fe5be4",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/b77be57eb982291a32c2bb3c02559933e18e541a"
        },
        "date": 1745596103468,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 255372,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "231 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 254734,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "220 samples"
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
          "id": "e83ce9dd973b0b5faacff24dcb4c5a2baab6acee",
          "message": "Bump next from 14.2.25 to 14.2.26 (#7681)\n\nBumps [next](https://github.com/vercel/next.js) from 14.2.25 to 14.2.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/vercel/next.js/releases\">next's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v14.2.26</h2>\n<blockquote>\n<p>[!NOTE]<br />\nThis release is backporting bug fixes. It does <strong>not</strong>\ninclude all pending features/changes on canary.</p>\n</blockquote>\n<h3>Core Changes</h3>\n<ul>\n<li>Match subrequest handling for edge and node (<a\nhref=\"https://redirect.github.com/vercel/next.js/issues/77476\">#77476</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/vercel/next.js/commit/10a042cdca294fd1c6852b320954bc6ccc6064e7\"><code>10a042c</code></a>\nv14.2.26</li>\n<li><a\nhref=\"https://github.com/vercel/next.js/commit/8a511d6a22d38132c79b8f70ee29713d42225802\"><code>8a511d6</code></a>\nMatch subrequest handling for edge and node (<a\nhref=\"https://redirect.github.com/vercel/next.js/issues/77476\">#77476</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/vercel/next.js/compare/v14.2.25...v14.2.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=next&package-manager=npm_and_yarn&previous-version=14.2.25&new-version=14.2.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/AzureAD/microsoft-authentication-library-for-js/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-25T13:51:40-07:00",
          "tree_id": "fd8edc6eb7b86079994bcb640eaf87455b99ac67",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/e83ce9dd973b0b5faacff24dcb4c5a2baab6acee"
        },
        "date": 1745617704494,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 256542,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "234 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 254956,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "223 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "872c7059390d02ddc61510ebfaa54839657e14d4",
          "message": "Fix react initialization race (#7720)\n\nFixes a race condition that can occur between cache initialization and\nreact state initialization\n\nFixes #7654, #7561\n\n---------\n\nCo-authored-by: Jo Arroyo <joarroyo@microsoft.com>",
          "timestamp": "2025-04-28T13:34:41-07:00",
          "tree_id": "d2752f061a77f017d35adb8709c5570514b5d01f",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/872c7059390d02ddc61510ebfaa54839657e14d4"
        },
        "date": 1745876916431,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 252385,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "234 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 252309,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "234 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "101b31ba17d5c1e5df2e20871efab115a0f4331f",
          "message": "Add jest-junit reporter (#7719)\n\nAdds jest-junit to jest reporters. This will allow us to report test\nresults on the ADO pipelines and identify flaky tests",
          "timestamp": "2025-04-30T14:30:12-07:00",
          "tree_id": "20bf9441af13ed516e67e691d0bf9bff18133b1e",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/101b31ba17d5c1e5df2e20871efab115a0f4331f"
        },
        "date": 1746049703242,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 250021,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "236 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 247662,
            "range": "±0.72%",
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
          "id": "2a304527ab0c0baa695814ea5f2c1a32dd158f03",
          "message": "Bump vite from 3.2.11 to 4.5.14 (#7727)\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite)\nfrom 3.2.11 to 4.5.14.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/vitejs/vite/releases\">vite's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.14</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.14/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.13</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.13/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.12</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.12/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.11</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.11/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.10</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.10/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.9</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.9/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.8</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.8/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.7</h2>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.7/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n<h2>v4.5.6</h2>\n<p>This version contains a breaking change due to security fixes. See <a\nhref=\"https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6\">https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6</a>\nfor more details.</p>\n<p>Please refer to <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.6/packages/vite/CHANGELOG.md\">CHANGELOG.md</a>\nfor details.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/vitejs/vite/blob/v4.5.14/packages/vite/CHANGELOG.md\">vite's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><!-- raw HTML omitted -->4.5.14 (2025-04-30)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19965\">#19965</a>,\ncheck static serve file inside sirv (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19967\">#19967</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/7739479\">7739479</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19965\">#19965</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19967\">#19967</a></li>\n<li>chore: run format (<a\nhref=\"https://github.com/vitejs/vite/commit/99afb60\">99afb60</a>)</li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.13 (2025-04-10)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19830\">#19830</a>,\nreject requests with <code>#</code> in request-target (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19832\">#19832</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/41f3819\">41f3819</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19830\">#19830</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19832\">#19832</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.12 (2025-04-03)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19782\">#19782</a>,\nfs check with svg and relative paths (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19785\">#19785</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/0a3dcf5\">0a3dcf5</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19782\">#19782</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19785\">#19785</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.11 (2025-03-31)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19761\">#19761</a>,\nfs check in transform middleware (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19763\">#19763</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/26e1764\">26e1764</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19761\">#19761</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19763\">#19763</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.10 (2025-03-24)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19702\">#19702</a>,\nfs raw query with query separators (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19704\">#19704</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/315695e\">315695e</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19702\">#19702</a>\n<a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19704\">#19704</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.9 (2025-01-21)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: <code>preview.allowedHosts</code> with specific values was not\nrespected (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19246\">#19246</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/0bc52e0\">0bc52e0</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19246\">#19246</a></li>\n<li>fix: allow CORS from loopback addresses by default (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19249\">#19249</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/8f63cd6\">8f63cd6</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19249\">#19249</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.8 (2025-01-20)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: try parse <code>server.origin</code> URL (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19241\">#19241</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/3680bad\">3680bad</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19241\">#19241</a></li>\n</ul>\n<h2><!-- raw HTML omitted -->4.5.7 (2025-01-20)<!-- raw HTML omitted\n--></h2>\n<ul>\n<li>fix: <code>crypto.getRandomValues</code> is not available in old\nNode versions (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19237\">#19237</a>)\n(<a href=\"https://github.com/vitejs/vite/commit/f4d3c46\">f4d3c46</a>),\ncloses <a\nhref=\"https://redirect.github.com/vitejs/vite/issues/19237\">#19237</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/9bfe2b1bc5d755cd7898d17147b9a1bb7f55fed2\"><code>9bfe2b1</code></a>\nrelease: v4.5.14</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/7739479d87330b367c9338b732ed9789871082cc\"><code>7739479</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19965\">#19965</a>,\ncheck static serve file inside sirv (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19967\">#19967</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/99afb601e9d5d6cad25b38f44ce4c02083dbcb62\"><code>99afb60</code></a>\nchore: run format</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/cd60e8bb2e354ca03d2e5e5b0d0a151cf40698e2\"><code>cd60e8b</code></a>\nrelease: v4.5.13</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/41f3819c869b86aec02e760fd3dabd5e370db284\"><code>41f3819</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19830\">#19830</a>,\nreject requests with <code>#</code> in request-target (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19832\">#19832</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/6104add2ed0204b9821f73dc230f9c05caaad405\"><code>6104add</code></a>\nrelease: v4.5.12</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/0a3dcf5875de6bcea64e2f75bfa452740ca3dfb0\"><code>0a3dcf5</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19782\">#19782</a>,\nfs check with svg and relative paths (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19785\">#19785</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/07ddc3ea3e5750f4761169064be87122f9b698f1\"><code>07ddc3e</code></a>\nrelease: v4.5.11</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/26e1764d54e7440d90226ebb82acbed457807d30\"><code>26e1764</code></a>\nfix: backport <a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19761\">#19761</a>,\nfs check in transform middleware (<a\nhref=\"https://github.com/vitejs/vite/tree/HEAD/packages/vite/issues/19763\">#19763</a>)</li>\n<li><a\nhref=\"https://github.com/vitejs/vite/commit/86e7a6b8e40cd2fd545744b82b2bc805ced92847\"><code>86e7a6b</code></a>\nrelease: v4.5.10</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/vitejs/vite/commits/v4.5.14/packages/vite\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=vite&package-manager=npm_and_yarn&previous-version=3.2.11&new-version=4.5.14)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/AzureAD/microsoft-authentication-library-for-js/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-01T10:41:17-07:00",
          "tree_id": "b2a11812f819ce1f2c61681ec05a453661ae9c13",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/2a304527ab0c0baa695814ea5f2c1a32dd158f03"
        },
        "date": 1746136103918,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 242828,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "233 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 212259,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "232 samples"
          }
        ]
      },
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
          "id": "be3a23bcf5308ae6ca074a77e3692c4d309bf62b",
          "message": "Minor comment updates (#7704)",
          "timestamp": "2025-05-01T21:21:43-04:00",
          "tree_id": "fe7b1a4a417f66fbda47e5fe65cae825865d840e",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/be3a23bcf5308ae6ca074a77e3692c4d309bf62b"
        },
        "date": 1746157698125,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 254189,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "217 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 253832,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "235 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kshabelko@microsoft.com",
            "name": "Konstantin",
            "username": "konstantin-msft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "241099b6637db55803fe9f315388c057eae4a714",
          "message": "Gracefully handle old interaction format (#7731)\n\n- Gracefully handle old interaction format",
          "timestamp": "2025-05-02T18:06:29-04:00",
          "tree_id": "d25dcae6ec2282e3edf9735bfe313656a27b66f6",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/241099b6637db55803fe9f315388c057eae4a714"
        },
        "date": 1746244112011,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 252291,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "235 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 252369,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "236 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6098464c80f3db124ca3db145446ddb71be936d",
          "message": "Enable React 19 usage (#7710) (#7735)\n\nPR to run CI against #7710 and get it merged into dev. Thanks\n@rm-eth-a-n for making the changes\n\n---------\n\nCo-authored-by: rm-eth-a-n <ethan.pearce@rightmove.co.uk>\nCo-authored-by: Herman Jensen <herman.jensen@intility.no>",
          "timestamp": "2025-05-06T13:17:58-07:00",
          "tree_id": "6cfcb100efc4cbf2b140560121821f7b594ba002",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/b6098464c80f3db124ca3db145446ddb71be936d"
        },
        "date": 1746568087043,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 252803,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "211 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 247528,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "233 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shylasummers@users.noreply.github.com",
            "name": "shylasummers",
            "username": "shylasummers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "306258d6ec1ba46250da5bd27e7067768f9a3d75",
          "message": "Bump common to 15.7.0 (#7795)\n\nManually publish msal-common to 15.7.0",
          "timestamp": "2025-05-30T14:42:59-04:00",
          "tree_id": "20b2a41647d80a64d4fcf68db58e4a1ec1de7a76",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/306258d6ec1ba46250da5bd27e7067768f9a3d75"
        },
        "date": 1748641690062,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 249333,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "224 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 247064,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "211 samples"
          }
        ]
      },
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
          "id": "8323e24e3b5b09124bfb83c0e4bbec013a2b7a0c",
          "message": "Improvements to client-credentials-with-cert-from-key-vault sample (#7792)\n\n- Moved user input to .env file and updated README\n- Improved cliArgs.ts",
          "timestamp": "2025-05-30T18:25:01-04:00",
          "tree_id": "8ae62a3e0e977f5eff19baea26bc87642b74a8fc",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/8323e24e3b5b09124bfb83c0e4bbec013a2b7a0c"
        },
        "date": 1748663291270,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 246440,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "210 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 247134,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "232 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152663010+msal-js-release-automation[bot]@users.noreply.github.com",
            "name": "msal-js-release-automation[bot]",
            "username": "msal-js-release-automation[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac886309aa079bb762699d803d3b21de40befcac",
          "message": "Release PR: official (#7798)\n\nThis PR contains the changelogs and version bumps for the MSAL.js 3P\nreleases.\n\n---------\n\nCo-authored-by: MSAL.js Release Automation <msaljsbuilds@microsoft.com>\nCo-authored-by: Shyla Summers <shylasummers@microsoft.com>",
          "timestamp": "2025-06-03T13:44:57-07:00",
          "tree_id": "f8bbb2c3f4cbeeda52be61e69201e30e7aac163c",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/ac886309aa079bb762699d803d3b21de40befcac"
        },
        "date": 1748987301434,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 253437,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "233 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 257331,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "223 samples"
          }
        ]
      },
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
          "id": "3bd31ddaa8cfea54b1be579ed847e0a49afc2b13",
          "message": "TypeScript sample compiles again (#7801)\n\nUpdated the sample's TypeScript build files to ensure it can be run\nstandalone as well as supporting it's existing E2E test.",
          "timestamp": "2025-06-04T15:58:26-04:00",
          "tree_id": "871f1b969f25f3e7e06ff2cc867c85a14140a0ae",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/3bd31ddaa8cfea54b1be579ed847e0a49afc2b13"
        },
        "date": 1749073707467,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 247110,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "234 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 240782,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "234 samples"
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
          "id": "413ea5d4514ff409af2def53af1b4774c7343e11",
          "message": "Bump webpack-dev-server from 4.13.1 to 5.2.1 (#7806)\n\nBumps\n[webpack-dev-server](https://github.com/webpack/webpack-dev-server) from\n4.13.1 to 5.2.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/webpack/webpack-dev-server/releases\">webpack-dev-server's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.2.1</h2>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.2.0...v6.0.0\">5.2.1</a>\n(2025-03-26)</h2>\n<h3>Security</h3>\n<ul>\n<li>cross-origin requests are not allowed unless allowed by\n<code>Access-Control-Allow-Origin</code> header</li>\n<li>requests with an IP addresses in the <code>Origin</code> header are\nnot allowed to connect to WebSocket server unless configured by\n<code>allowedHosts</code> or it different from the <code>Host</code>\nheader</li>\n</ul>\n<p>The above changes may make the dev server not work if you relied on\nsuch behavior, but unfortunately they carry security risks, so they were\nconsidered as fixes.</p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>prevent overlay for errors caught by React error boundaries (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5431\">#5431</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/8c1abc903ab444d9ce99e567b9a6c603e1ec06be\">8c1abc9</a>)</li>\n<li>take the first network found instead of the last one, this restores\nthe same behavior as 5.0.4 (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5411\">#5411</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/ffd0b86b790d372f90e17aea92cfd9def83fee96\">ffd0b86</a>)</li>\n</ul>\n<h2>v5.2.0</h2>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.1.0...v5.2.0\">5.2.0</a>\n(2024-12-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>added <code>getClientEntry</code> and <code>getClientHotEntry</code>\nmethods to get clients entries (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/dc642a832d45c23c5c7a08fbf29995e0db7e0d95\">dc642a8</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>speed up initial client bundling (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/145b5d01610a16468fc32719a20366682b0e8572\">145b5d0</a>)</li>\n</ul>\n<h2>v5.1.0</h2>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.0.4...v5.1.0\">5.1.0</a>\n(2024-09-03)</h2>\n<h3>Features</h3>\n<ul>\n<li>add visual progress indicators (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/a8f40b74e6439a8281b9fe8868eb9db7e4c5de50\">a8f40b7</a>)</li>\n<li>added the <code>app</code> option to be <code>Function</code> (by\ndefault only with <code>connect</code> compatibility frameworks) (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/3096148746c906105c4424352f5b5ad1bff0fd4f\">3096148</a>)</li>\n<li>allow the <code>server</code> option to be <code>Function</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5275\">#5275</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/02a1c6d788f5fc47c11cc7d910fd1b5e17aed886\">02a1c6d</a>)</li>\n<li>http2 support for <code>connect</code> and <code>connect</code>\ncompatibility frameworks which support HTTP2 (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5267\">#5267</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/6509a3fd3eb5decb61f60a9f2db97d76f71ecb99\">6509a3f</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>check the <code>platform</code> property to determinate the target\n(<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5269\">#5269</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/c3b532c6360317319793dcda22c76fbfc05fbdcf\">c3b532c</a>)</li>\n<li>ipv6 output (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5270\">#5270</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/06005e7cb99e4c412b968ed3fb786acfb8c2e037\">06005e7</a>)</li>\n<li>replace <code>rimraf</code> with <code>rm</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5162\">#5162</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/1a1561f09bdfa7a98434d7d9cd62e323b887dfbf\">1a1561f</a>)</li>\n<li>replace default gateway (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5255\">#5255</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/f5f09024ff4fe6625aa94bcd69439462d74013f0\">f5f0902</a>)</li>\n<li>support <code>devServer: false</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5272\">#5272</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/8b341cb8c1dc01cef62c70959620cd0cbd87fee7\">8b341cb</a>)</li>\n</ul>\n<h2>v5.0.4</h2>\n<h3><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.0.3...v5.0.4\">5.0.4</a>\n(2024-03-19)</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md\">webpack-dev-server's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.2.0...v6.0.0\">5.2.1</a>\n(2025-03-26)</h2>\n<h3>Security</h3>\n<ul>\n<li>cross-origin requests are not allowed unless allowed by\n<code>Access-Control-Allow-Origin</code> header</li>\n<li>requests with an IP addresses in the <code>Origin</code> header are\nnot allowed to connect to WebSocket server unless configured by\n<code>allowedHosts</code> or it different from the <code>Host</code>\nheader</li>\n</ul>\n<p>The above changes may make the dev server not work if you relied on\nsuch behavior, but unfortunately they carry security risks, so they were\nconsidered as fixes.</p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>prevent overlay for errors caught by React error boundaries (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5431\">#5431</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/8c1abc903ab444d9ce99e567b9a6c603e1ec06be\">8c1abc9</a>)</li>\n<li>take the first network found instead of the last one, this restores\nthe same behavior as 5.0.4 (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5411\">#5411</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/ffd0b86b790d372f90e17aea92cfd9def83fee96\">ffd0b86</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.1.0...v5.2.0\">5.2.0</a>\n(2024-12-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>added <code>getClientEntry</code> and <code>getClientHotEntry</code>\nmethods to get clients entries (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/dc642a832d45c23c5c7a08fbf29995e0db7e0d95\">dc642a8</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>speed up initial client bundling (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/145b5d01610a16468fc32719a20366682b0e8572\">145b5d0</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.0.4...v5.1.0\">5.1.0</a>\n(2024-09-03)</h2>\n<h3>Features</h3>\n<ul>\n<li>add visual progress indicators (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/a8f40b74e6439a8281b9fe8868eb9db7e4c5de50\">a8f40b7</a>)</li>\n<li>added the <code>app</code> option to be <code>Function</code> (by\ndefault only with <code>connect</code> compatibility frameworks) (<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/3096148746c906105c4424352f5b5ad1bff0fd4f\">3096148</a>)</li>\n<li>allow the <code>server</code> option to be <code>Function</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5275\">#5275</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/02a1c6d788f5fc47c11cc7d910fd1b5e17aed886\">02a1c6d</a>)</li>\n<li>http2 support for <code>connect</code> and <code>connect</code>\ncompatibility frameworks which support HTTP2 (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5267\">#5267</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/6509a3fd3eb5decb61f60a9f2db97d76f71ecb99\">6509a3f</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>check the <code>platform</code> property to determinate the target\n(<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5269\">#5269</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/c3b532c6360317319793dcda22c76fbfc05fbdcf\">c3b532c</a>)</li>\n<li>ipv6 output (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5270\">#5270</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/06005e7cb99e4c412b968ed3fb786acfb8c2e037\">06005e7</a>)</li>\n<li>replace <code>rimraf</code> with <code>rm</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5162\">#5162</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/1a1561f09bdfa7a98434d7d9cd62e323b887dfbf\">1a1561f</a>)</li>\n<li>replace default gateway (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5255\">#5255</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/f5f09024ff4fe6625aa94bcd69439462d74013f0\">f5f0902</a>)</li>\n<li>support <code>devServer: false</code> (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5272\">#5272</a>)\n(<a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/8b341cb8c1dc01cef62c70959620cd0cbd87fee7\">8b341cb</a>)</li>\n</ul>\n<h3><a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v5.0.3...v5.0.4\">5.0.4</a>\n(2024-03-19)</h3>\n<h3>Bug Fixes</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/0d22a08cc96deeb4421251ff41a915dcda1b59c5\"><code>0d22a08</code></a>\nchore(release): 5.2.1</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/6045b1e9d63078fb24cac52eb361b7356944cddd\"><code>6045b1e</code></a>\nchore(deps): update (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5444\">#5444</a>)</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/ffd0b86b790d372f90e17aea92cfd9def83fee96\"><code>ffd0b86</code></a>\nfix: take the first network found instead of the last one, this restores\nthe ...</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/9ea7b0856a72b92b1444ef6a0087f90b883500dd\"><code>9ea7b08</code></a>\nci: update dependency-review-action (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5442\">#5442</a>)</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/5c9378bb01276357d7af208a0856ca2163db188e\"><code>5c9378b</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/d2575ad8dfed9207ed810b5ea0ccf465115a2239\"><code>d2575ad</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/8c1abc903ab444d9ce99e567b9a6c603e1ec06be\"><code>8c1abc9</code></a>\nfix: prevent overlay for errors caught by React error boundaries (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5431\">#5431</a>)</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/5a39c7099ab2908251ff759f311e1d4e85b4b3e8\"><code>5a39c70</code></a>\nci: update codecov/codecov-action to v5 (<a\nhref=\"https://redirect.github.com/webpack/webpack-dev-server/issues/5406\">#5406</a>)</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/55220a800ba4e30dbde2d98785ecf4c80b32f711\"><code>55220a8</code></a>\nchore(deps-dev): bump the dependencies group across 1 directory with 4\nupdate...</li>\n<li><a\nhref=\"https://github.com/webpack/webpack-dev-server/commit/09f6f8eb46abce836acbc1b8c892e348106c924e\"><code>09f6f8e</code></a>\nchore(deps): bump the dependencies group across 1 directory with 2\nupdates (#...</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/webpack/webpack-dev-server/compare/v4.13.1...v5.2.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=webpack-dev-server&package-manager=npm_and_yarn&previous-version=4.13.1&new-version=5.2.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/AzureAD/microsoft-authentication-library-for-js/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-04T15:58:59-07:00",
          "tree_id": "3284e229d416a9de8caabbc8344a409c6ca7a965",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/413ea5d4514ff409af2def53af1b4774c7343e11"
        },
        "date": 1749095315569,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 249633,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "236 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 254605,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "235 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dasau@microsoft.com",
            "name": "Dan Saunders",
            "username": "codexeon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d931672bcdd0e18ac6b780971d8029ef7cb7872",
          "message": "Fix exception when using claims with Nested App Auth in JS Runtime environment (#7926)\n\nJS Runtime does not support full crypto API, and is running into an\nexception in hydrateCache while trying to generate a sha-256 hash of the\nclaims. The token response is received, but never returned to developer\nbecause writing to cache failed. For this scenario, there is already a\ncache in the host, so it is still able to avoid a network call if a\nprevious request with the same claim was made.",
          "timestamp": "2025-07-14T12:35:08-07:00",
          "tree_id": "545e3b391595e3034c2474db680a56747422da46",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/2d931672bcdd0e18ac6b780971d8029ef7cb7872"
        },
        "date": 1752551307648,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 249742,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "237 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 255266,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "236 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shylasummers@users.noreply.github.com",
            "name": "shylasummers",
            "username": "shylasummers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc5f2a5a1646de3a71853f7d09b44eb4f65306ad",
          "message": "Bump MSAL Browser to 4.17.0 (#7951)",
          "timestamp": "2025-07-29T16:48:15-07:00",
          "tree_id": "59cc06598ac346efd97aa9fad1c156ce28bfe8bb",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/bc5f2a5a1646de3a71853f7d09b44eb4f65306ad"
        },
        "date": 1753847308312,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 238873,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "233 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 240828,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "235 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ydi.w127@gmail.com",
            "name": "Yongdi Wang",
            "username": "yongdiw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ffb0a2d38a153a952e9a1522f4aa4d1e503de2a",
          "message": "Add support for custom claims and password change required error (#7948)\n\nThis pull request introduces support for custom claims in various\nauthentication flows within the `msal-browser` library. The most\nsignificant changes include adding a `claims` field to multiple input\ntypes, ensuring claims are valid JSON strings, and propagating the\n`claims` field through the authentication process.\n\n### Support for custom claims:\n\n* Added a `claims` field to several input types (`SignInInputs`,\n`ResetPasswordInputs`, `AccessTokenRetrievalInputs`, and others) to\nallow custom claims during authentication.\n\n### Validation enhancements:\n\n* Introduced a new utility function, `ensureArgumentIsJSONString`, to\nvalidate that the `claims` field is a properly formatted JSON string.\nThis function is used in multiple places to ensure input integrity.\n\n### Integration into authentication flows:\n\n* Updated the `CustomAuthStandardController` and related classes to\nhandle the `claims` field during sign-in and token retrieval processes.\n* Modified API request types and parameters to include the `claims`\nfield, ensuring it is passed to the backend during token requests.\n### Error handling improvements:\n\n* Added methods to detect specific errors, such as password reset\nrequirements, during authentication flows.\n\n### Unit testing:\n\n* Enhanced the `ArgumentValidator` unit tests to cover the new\n`ensureArgumentIsJSONString` function.",
          "timestamp": "2025-07-30T09:33:33+01:00",
          "tree_id": "9c1147ea6f99b6e162fbea244def2ea601bb324d",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/2ffb0a2d38a153a952e9a1522f4aa4d1e503de2a"
        },
        "date": 1753868916692,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 251386,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "235 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 244662,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "229 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kshabelko@microsoft.com",
            "name": "Konstantin Shabelko",
            "username": "konstantin-msft"
          },
          "committer": {
            "email": "kshabelko@microsoft.com",
            "name": "Konstantin",
            "username": "konstantin-msft"
          },
          "distinct": true,
          "id": "ebef0077979a685e9b6655eca7bd63e578873367",
          "message": "- Fix CVEs",
          "timestamp": "2025-08-04T17:58:37-04:00",
          "tree_id": "52e36f5b1dfeb3e330f0faeeb7b13ca9efa18a06",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/ebef0077979a685e9b6655eca7bd63e578873367"
        },
        "date": 1754365703533,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 253763,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "225 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 249117,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "235 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "152663010+msal-js-release-automation[bot]@users.noreply.github.com",
            "name": "msal-js-release-automation[bot]",
            "username": "msal-js-release-automation[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7b8239b5921d11faf4ac230097f96fdc55ab585",
          "message": "Release PR: official (#7969)\n\nThis PR contains the changelogs and version bumps for the MSAL.js 3P\nreleases.\n\nCo-authored-by: MSAL.js Release Automation <msaljsbuilds@microsoft.com>",
          "timestamp": "2025-08-05T15:37:57-07:00",
          "tree_id": "3e36ab6190db2a4e59697db7ec8d218f75b62bf1",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/c7b8239b5921d11faf4ac230097f96fdc55ab585"
        },
        "date": 1754452089615,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 242801,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "223 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 246993,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "225 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalima.sharda@gmail.com",
            "name": "Lalima Sharda",
            "username": "lalimasharda"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dc2f555537542d054dcc944e9b3b6413ff65754",
          "message": "getNativeAccountId bug fix (#7960)\n\nFall back to getting the native account id of the active account if no\nloginhint or sid is provided.",
          "timestamp": "2025-08-06T09:20:07-07:00",
          "tree_id": "3e459a084cf1aae337d01ebaf3f05aa1ce633397",
          "url": "https://github.com/fondoger/microsoft-authentication-library-for-js/commit/5dc2f555537542d054dcc944e9b3b6413ff65754"
        },
        "date": 1754516893500,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 254084,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "224 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 253117,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "234 samples"
          }
        ]
      }
    ]
  }
}