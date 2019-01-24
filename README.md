
ステートメント数が多すぎるとエラーになる件の再現

### Generate

- $ `node make-lwc`

### Deploy

- $ `sfdx force:source:push`

```
PROJECT PATH                                       ERROR
─────────────────────────────────────────────────  ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
force-app/main/default/lwc/lwcError2/lwcError2.js  NodeServer[script:./handlers/compile.js,closed:true,invocations:642]: error executing script, program output:
```
