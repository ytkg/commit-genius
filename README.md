# Commit Genius

[![release](https://img.shields.io/github/v/tag/ytkg/commit-genius?label=release&logo=deno)](https://deno.land/x/commit_genius)
[![ci](https://github.com/ytkg/commit-genius/actions/workflows/ci.yml/badge.svg)](https://github.com/ytkg/commit-genius/actions/workflows/ci.yml)
[![release](https://img.shields.io/badge/license-MIT-brightgreen)](https://opensource.org/license/mit/)

## Installation
### Install
```bash
$ deno install --allow-env --allow-run --allow-net --allow-read --allow-write https://deno.land/x/commit_genius/cg.ts
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
$ rm -rf ~/.config/commit_genius # if any config file
```

## Usage
```bash
$ export OPENAI_ACCESS_TOKEN=sk-HogehogeXXX
$ # or
$ cg config set api_key sk-HogehogeXXX

$ git add .
$ cg
Possible commit message suggestions:
- Fixed bug in getCommitMessageSuggestion function (getCommitMessageSuggestion関数中のバグを修正)
- Added feature X to component Y (コンポーネントYに機能Xを追加した)
- Refactored function Z for improved performance (機能Zのリファクタリングによるパフォーマンス改善)
```

### Configure
#### Update configuration with a value for the given key
```bash
$ cg config set api_key sk-HogehogeXXX
```

#### Print the value of a given configuration key
```bash
$ cg config get api_key
sk-HogehogeXXX
```

#### Print a list of configuration keys and values
```bash
$ cg config list
api_key = sk-HogehogeXXX
```

| Key     | Description                                            |
|---------|--------------------------------------------------------|
| api_key | API key used for authentication with OpenAI            |
| model   | model name for OpenAI (e.g., `gpt-3.5-turbo`, `gpt-4`) |

## License
The source code is licensed MIT.
