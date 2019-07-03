# Elemental VSCode Theme

## NOTE

Owing to some difficulty I ran into while packaging this as an published theme, I recommend copying over the `.vscode/settings.json` file to try it out! Feedback is welcome.

Still need to get this properly published yet.

## Purpose

This theme is meant to enable greater speed of comprehension by connecting the syntax colors with the four elements,
according to the schema presented below:

## Details

| Element | Colors | General Meaning | Specific Usage|
| --- | --- | --- | --- |
| Aether | Black, Grey | The code itself | Comments, "null", "undefined", Punctuation |
| Fire | Reds and Oranges (lighter) | Actions + Logic | Errors, Functions, Assignment, Logic, Numbers |
| Air | Pastels, esp. Yellows and Greens | Relations + Words | Control-flow, Operators, Strings |
| Water | Blues and Cyans (darker) | Beings | Variables, other Entities |
| Earth | Off-whites, like Tans | The editor itself | N/A |

## Files

### Settings:  
* `elemental.json`, the initial file taken directly from the settings editor
* `Elemental.color-theme.json`, the file output by the **Developer: Generate Color Theme From Current Settings** command
* `Elemental-color-theme.json`, the result of running the `yo code` command, as described in the official documentation

### Color files:  
- `colors.initial.json`
  * The initial color scheme, with very bright colors
- `colors.moderate.json`
  * A middle stage of the color scheme, slightly less aggressive
- `colors.accessible.json`
  * The final, contrast-conscious color scheme, with darker colors
- `colors.editor.json`
  * The colors used for the editor itself.

### Examples:  
Example files for HTML, JS, TSX, and MD formats are included.

## Pictures:

![Typeswag Example](https://github.com/CJamesKeller/Elemental/blob/master/typeswag_example.png)

---

![Javascript](https://github.com/CJamesKeller/Elemental/blob/master/javascript.png)

---

![Markdown](https://github.com/CJamesKeller/Elemental/blob/master/markdown.png)

---

![Lower-Level Languages](https://github.com/CJamesKeller/Elemental/blob/master/c_cpp.png)
