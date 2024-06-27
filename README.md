#### Theme

Dark
![DARKMODE](public/ui_dark.png)
Light
![LIGHTMODE](public/ui_light.png)

Used `documentElement.setAttribute()` to control theme for make things simple

```javascript
const [isDark, setIsDark] = useState(false);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
};
```

SCSS

```scss
// ./variables.scss - Theme
$theme-light: (...);

$theme-dark: (...);

// ./global.scss - Usage
:root {
  @each $key, $value in $theme-light {
    --#{$key}: #{$value};
  }
}

[data-theme="dark"] {
  @each $key, $value in $theme-dark {
    --#{$key}: #{$value};
  }
}
```

#### Responsive

<div style="display:flex; justify-content:space-between; align-items:center">
  <img src="public/ui_dark.png" width="35%" height="100%"/>
  <img src="public/ui_lg.png" width="30%" height="100%"/>
  <img src="public/ui_mdl.png" width="30%" height="100%"/>
</div>
<div style="display:flex; justify-content:space-between; align-items:center;">
  <img src="public/ui_md.png" width="35%" height="100%"/>
  <img src="public/ui_sm.png" width="30%" height="50%"/>
  <img src="public/ui_xsm.png" width="30%" height="50%"/>
</div>

```scss
$sm: 480px;
$md: 768px;
$lg: 1024px;
$xl: 1200px;
$xxl: 1400px;

@mixin sm {
    @media screen and (max-width:($sm)) {
        @content;
    }
}

@mixin md {
    @media screen and (max-width:($md)) {
        @content;
    }
}
...
```
