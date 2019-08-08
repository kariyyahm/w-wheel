---

title: 快速上手

---
# 快速上手

## 添加 CSS 样式

使用本框架前，请在 css 中启用 border-box
```
    *, *::before, *::after {box-sizing: border-box;}
```

## 引入 W-Wheel

```vue
<script>
import {Button} from 'w-wheel'
import 'w-wheel/dist/index.css'

export default {
    components: {
        'w-button': Button
    }
} 
</script>
```