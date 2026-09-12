# Ctrl+L — Análise de conflitos e config recomendada

## Conflitos padrão do `Ctrl+L` no Cursor/VS Code

| Comando | O que faz | Contexto (`when`) | Conflita? |
| :--- | :--- | :--- | :--- |
| `expandLineSelection` | Seleciona/expande a linha no **editor** | `textInputFocus` | ⚠️ **Principal conflito** — o terminal integrado também tem `textInputFocus`, então o Cursor pode interceptar `Ctrl+L` antes de limpar |
| `workbench.action.terminal.clear` | Limpa o terminal integrado | *(não vem por padrão)* | — você precisa adicionar |
| Shell (bash/zsh) | `clear` nativo | terminal real | No integrado, o VS Code/Cursor costuma capturar a tecla primeiro |

## O que mudar (recomendado)

Cole em **Keyboard Shortcuts (JSON)**:
`Ctrl+Shift+P` → `Preferences: Open Keyboard Shortcuts (JSON)`

**Windows:** `%APPDATA%\Cursor\User\keybindings.json`  
**Linux:** `~/.config/Cursor/User/keybindings.json`

```json
[
  // 1. Remove "selecionar linha" quando o terminal está focado
  {
    "key": "ctrl+l",
    "command": "-expandLineSelection",
    "when": "terminalFocus"
  },

  // 2. Limpa o terminal quando focado
  {
    "key": "ctrl+l",
    "command": "workbench.action.terminal.clear",
    "when": "terminalFocus"
  }
]
```

### Por que os dois juntos?

- Sem o **passo 1**, `expandLineSelection` compete com o clear no terminal (ambos respondem a `textInputFocus`).
- Com o **passo 1**, no terminal só roda o clear.
- No **editor**, `expandLineSelection` continua funcionando com `Ctrl+L` (selecionar linha).

## Opcional — se quiser `Ctrl+L` SÓ no terminal

Mova "selecionar linha" para outro atalho no editor:

```json
[
  {
    "key": "ctrl+l",
    "command": "-expandLineSelection"
  },
  {
    "key": "ctrl+shift+l",
    "command": "expandLineSelection",
    "when": "textInputFocus && !terminalFocus"
  },
  {
    "key": "ctrl+l",
    "command": "-expandLineSelection",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+l",
    "command": "workbench.action.terminal.clear",
    "when": "terminalFocus"
  }
]
```

## Como verificar conflitos na UI

1. `Ctrl+K Ctrl+S` → abre Keyboard Shortcuts
2. Busque `ctrl+l`
3. Veja todos os comandos listados
4. Conflitos aparecem com ícone de aviso ou múltiplas linhas para a mesma tecla

## Alternativa sem mexer no `Ctrl+L`

Se preferir não remapear nada:

- `Ctrl+Shift+P` → digite **Terminal: Clear**
- Ou atalho alternativo: `Ctrl+Shift+K` (menos conflitos)
