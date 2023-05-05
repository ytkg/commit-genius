# Commit Genius

[![release](https://img.shields.io/github/v/tag/ytkg/commit-genius?label=release&logo=deno)](https://deno.land/x/commit_genius)
[![ci](https://github.com/ytkg/commit-genius/actions/workflows/ci.yml/badge.svg)](https://github.com/ytkg/commit-genius/actions/workflows/ci.yml)
[![release](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/license/mit/)

## Installation
### Install
```bash
$ deno install --allow-env --allow-run --allow-net --allow-read https://deno.land/x/commit_genius/cg.ts
✅ Successfully installed cg

$ cg --version
cg v0.1.0
```

### Upgrade
```bash
$ cg upgrade
```

### Uninstall
```bash
$ deno uninstall cg
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

## License
The source code is licensed MIT.
