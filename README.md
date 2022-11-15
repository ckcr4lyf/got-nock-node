# Problem

Seems vith node v19, Got is able to get the rawHeaders, but those do not get converted into headers. I _am_ using nock for the mocking.

Versions:

```
  "devDependencies": {
    "ava": "^5.1.0",
    "nock": "^13.2.9"
  },
  "dependencies": {
    "got": "^11.8.5"
  }
```

It works for Node v14-v18 without issue.

Example run: https://github.com/ckcr4lyf/got-nock-node/actions/runs/3469427466/jobs/5796406140

( you can see the console log as well... )
