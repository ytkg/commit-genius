# Commit Genius

## Install
```bash
$ deno install --allow-env --allow-run --allow-net https://deno.land/x/commit_genius/cg.ts
✅ Successfully installed cg

$ cg --version
cg v0.1.0
```

## Usage
```bash
$ export OPENAI_ACCESS_TOKEN=sk-HogehogeXXX

$ git add .
$ cg
Possible commit message suggestions:
- Fixed bug in getCommitMessageSuggestion function (getCommitMessageSuggestion関数中のバグを修正)
- Added feature X to component Y (コンポーネントYに機能Xを追加した)
- Refactored function Z for improved performance (機能Zのリファクタリングによるパフォーマンス改善)
```
