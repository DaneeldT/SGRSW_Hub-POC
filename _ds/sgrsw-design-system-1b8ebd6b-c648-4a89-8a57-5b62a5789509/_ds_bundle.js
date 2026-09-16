/* @ds-bundle: {"format":4,"namespace":"SGRSWDesignSystem_1b8ebd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ChapterHeader","sourcePath":"components/document/ChapterHeader.jsx"},{"name":"Clause","sourcePath":"components/document/Clause.jsx"},{"name":"DataTable","sourcePath":"components/document/DataTable.jsx"},{"name":"DocumentMeta","sourcePath":"components/document/DocumentMeta.jsx"},{"name":"Figure","sourcePath":"components/document/Figure.jsx"},{"name":"ReferenceList","sourcePath":"components/document/ReferenceList.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"79423d5842e0","components/core/Button.jsx":"a0f48af5ec61","components/core/Card.jsx":"0faf04a72fbf","components/core/Divider.jsx":"6faa9dae968e","components/core/Icon.jsx":"5eebc45561a7","components/core/IconButton.jsx":"fc4cfdb26d61","components/core/Tag.jsx":"3dfa99ed1fdf","components/document/ChapterHeader.jsx":"41d0f131841e","components/document/Clause.jsx":"8a1739194cd9","components/document/DataTable.jsx":"c7e299861462","components/document/DocumentMeta.jsx":"1b0bb596e643","components/document/Figure.jsx":"23890d26e093","components/document/ReferenceList.jsx":"ef2d48fb4141","components/feedback/Callout.jsx":"f0071f8841d5","components/feedback/Dialog.jsx":"18a5c8d5d9a6","components/feedback/Toast.jsx":"80213956b1ba","components/feedback/Tooltip.jsx":"594c1d1a2014","components/forms/Checkbox.jsx":"58a874ef7b8b","components/forms/FormField.jsx":"f7a5b945d86a","components/forms/Input.jsx":"4032e7267086","components/forms/Radio.jsx":"7d0bae8dcb8a","components/forms/Select.jsx":"73fc95664e1a","components/forms/Switch.jsx":"a9442a876370","components/forms/Textarea.jsx":"667bec74b527","components/navigation/Accordion.jsx":"4f51434afb1d","components/navigation/Breadcrumb.jsx":"05150dcc7f73","components/navigation/Pagination.jsx":"fed660c2e16a","components/navigation/SideNav.jsx":"2144e4bd83b5","components/navigation/Tabs.jsx":"fc20a2b1d1dc","ui_kits/designer_portal/DocumentLibrary.jsx":"cd43cbe76764","ui_kits/designer_portal/DrawingsAndMaps.jsx":"b229466c4e38","ui_kits/designer_portal/PortalHome.jsx":"b6f80bd86b6c","ui_kits/designer_portal/PortalShell.jsx":"8c8126ad261c","ui_kits/designer_portal/RevisionLog.jsx":"f84d4877f33b","ui_kits/designer_portal/portal-data.js":"410d225f6dab","ui_kits/standards_document/ChapterView.jsx":"56416bcdd232","ui_kits/standards_document/ContentsRail.jsx":"0a8467d4551e","ui_kits/standards_document/OnThisPage.jsx":"df925a68e261","ui_kits/standards_document/SearchOverlay.jsx":"18db6e7b6b5d","ui_kits/standards_document/Shell.jsx":"2457190f93ba","ui_kits/standards_document/content.js":"6a810e70d93c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SGRSWDesignSystem_1b8ebd = window.SGRSWDesignSystem_1b8ebd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  cream: {
    bg: 'var(--surface-card)',
    bd: 'var(--cream-200)',
    fg: 'var(--text-body)'
  },
  raised: {
    bg: 'var(--surface-raised)',
    bd: 'var(--border-hairline)',
    fg: 'var(--text-body)'
  },
  sunken: {
    bg: 'var(--surface-sunken)',
    bd: 'var(--cream-300)',
    fg: 'var(--text-body)'
  },
  inverse: {
    bg: 'var(--surface-inverse)',
    bd: 'var(--surface-inverse)',
    fg: 'var(--text-inverse)'
  }
};
function Card({
  tone = 'cream',
  padding,
  elevated,
  interactive,
  accent,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.cream;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      color: t.fg,
      border: `var(--border-width-hairline) solid ${interactive && hover ? 'var(--border-strong)' : t.bd}`,
      borderTop: accent ? `var(--border-width-rule) solid var(--rule-heading)` : undefined,
      borderRadius: 'var(--radius-card)',
      padding: padding ?? 'var(--pad-card)',
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  orientation = 'horizontal',
  tone = 'hairline',
  label,
  spacing,
  style,
  ...rest
}) {
  const color = tone === 'strong' ? 'var(--border-default)' : tone === 'gold' ? 'var(--rule-heading)' : 'var(--border-hairline)';
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        alignSelf: 'stretch',
        width: 1,
        minHeight: '1em',
        background: color,
        margin: `0 ${spacing ?? 'var(--space-4)'}`,
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: `${spacing ?? 'var(--space-6)'} 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      borderTop: `${tone === 'gold' ? 'var(--border-width-rule)' : 'var(--border-width-hairline)'} solid ${color}`,
      margin: `${spacing ?? 'var(--space-6)'} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/** Line icon. Geometry comes from Lucide (CDN), tinted with currentColor via CSS mask. */
function Icon({
  name,
  size = 18,
  label,
  style,
  ...rest
}) {
  const url = `url("${BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--ink-700)',
    bd: 'var(--border-default)'
  },
  info: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)',
    bd: 'var(--teal-100)'
  },
  caution: {
    bg: '#F6EEDC',
    fg: 'var(--status-caution)',
    bd: 'var(--cream-300)'
  },
  warning: {
    bg: '#FBEAE0',
    fg: 'var(--status-warning)',
    bd: '#F0CDBB'
  },
  danger: {
    bg: '#F8E4E3',
    fg: 'var(--status-danger)',
    bd: '#EDC6C4'
  },
  success: {
    bg: '#E3EFE8',
    fg: 'var(--status-success)',
    bd: '#C5DDD0'
  },
  solid: {
    bg: 'var(--teal-700)',
    fg: 'var(--text-inverse)',
    bd: 'var(--teal-700)'
  }
};
function Badge({
  tone = 'neutral',
  icon,
  uppercase = true,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 8px',
      background: t.bg,
      color: t.fg,
      border: `var(--border-width-hairline) solid ${t.bd}`,
      borderRadius: 'var(--radius-badge)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: uppercase ? 'uppercase' : 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    font: 'var(--text-xs)',
    padY: '6px',
    padX: '12px',
    icon: 14,
    h: 30
  },
  md: {
    font: 'var(--text-sm)',
    padY: 'var(--pad-control-y)',
    padX: 'var(--pad-control-x)',
    icon: 16,
    h: 38
  },
  lg: {
    font: 'var(--text-base)',
    padY: '12px',
    padX: '22px',
    icon: 18,
    h: 46
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--text-inverse)',
    bd: 'var(--action-primary)',
    hoverBg: 'var(--action-primary-hover)',
    activeBg: 'var(--action-primary-active)'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--text-heading)',
    bd: 'var(--border-strong)',
    hoverBg: 'var(--action-secondary-hover)',
    activeBg: 'var(--teal-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-heading)',
    bd: 'transparent',
    hoverBg: 'var(--action-secondary-hover)',
    activeBg: 'var(--teal-100)'
  },
  danger: {
    bg: 'var(--status-danger)',
    fg: 'var(--white)',
    bd: 'var(--status-danger)',
    hoverBg: '#872420',
    activeBg: '#701d1a'
  },
  inverse: {
    bg: 'var(--cream-50)',
    fg: 'var(--teal-700)',
    bd: 'var(--cream-50)',
    hoverBg: 'var(--white)',
    activeBg: 'var(--cream-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block,
  disabled,
  as = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      minHeight: s.h,
      padding: `${s.padY} ${s.padX}`,
      font: `var(--weight-medium) ${s.font}/1 var(--font-display)`,
      letterSpacing: 'var(--tracking-wide)',
      color: disabled ? 'var(--text-disabled)' : v.fg,
      background: disabled ? 'var(--surface-disabled)' : active ? v.activeBg : hover ? v.hoverBg : v.bg,
      border: `var(--border-width-hairline) solid ${disabled ? 'var(--border-default)' : v.bd}`,
      borderRadius: 'var(--radius-control)',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 28,
    icon: 15
  },
  md: {
    box: 36,
    icon: 18
  },
  lg: {
    box: 44,
    icon: 20
  }
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  disabled,
  active,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const outlined = variant === 'outline';
  const inverse = variant === 'inverse';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      padding: 0,
      color: disabled ? 'var(--text-disabled)' : inverse ? 'var(--text-inverse)' : 'var(--text-heading)',
      background: active ? 'var(--teal-100)' : hover && !disabled ? inverse ? 'rgba(253,246,237,.14)' : 'var(--action-secondary-hover)' : 'transparent',
      border: `var(--border-width-hairline) solid ${outlined ? 'var(--border-default)' : 'transparent'}`,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected,
  interactive,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = interactive || !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px 4px 11px',
      background: selected ? 'var(--teal-700)' : hover && clickable ? 'var(--teal-50)' : 'var(--surface-raised)',
      color: selected ? 'var(--text-inverse)' : 'var(--text-heading)',
      border: `var(--border-width-hairline) solid ${selected ? 'var(--teal-700)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-tag)',
      font: 'var(--type-label)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      padding: 0,
      margin: '0 -2px 0 0',
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/document/ChapterHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChapterHeader({
  part,
  number,
  title,
  standfirst,
  status,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      borderTop: 'var(--border-width-rule) solid var(--rule-heading)',
      paddingTop: 'var(--space-6)',
      marginBottom: 'var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, (part || number) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, [part, number].filter(Boolean).join(' · ')), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status.tone || 'info'
  }, status.label)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-chapter-title)',
      maxWidth: '22ch'
    }
  }, title), standfirst && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      marginBottom: 0,
      font: 'var(--weight-light) var(--text-md)/var(--leading-body) var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-body)'
    }
  }, standfirst), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, actions));
}
Object.assign(__ds_scope, { ChapterHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ChapterHeader.jsx", error: String((e && e.message) || e) }); }

// components/document/Clause.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEVELS = {
  1: {
    font: 'var(--type-h1)',
    gap: 'var(--space-4)',
    mb: 'var(--space-5)'
  },
  2: {
    font: 'var(--type-h2)',
    gap: 'var(--space-4)',
    mb: 'var(--space-4)'
  },
  3: {
    font: 'var(--type-h3)',
    gap: 'var(--space-3)',
    mb: 'var(--space-3)'
  },
  4: {
    font: 'var(--type-h4)',
    gap: 'var(--space-3)',
    mb: 'var(--space-2)'
  }
};
function Clause({
  number,
  title,
  level = 2,
  id,
  children,
  style,
  ...rest
}) {
  const l = LEVELS[level] || LEVELS[2];
  const Heading = `h${Math.min(6, level + 1)}`;
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      marginBottom: 'var(--stack-clause)',
      scrollMarginTop: 'var(--header-height)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Heading, {
    style: {
      display: 'flex',
      gap: l.gap,
      alignItems: 'baseline',
      marginBottom: l.mb,
      font: l.font,
      color: 'var(--text-heading)'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: '.72em',
      color: 'var(--text-clause)',
      flex: '0 0 auto',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, number), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Clause });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Clause.jsx", error: String((e && e.message) || e) }); }

// components/document/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  caption,
  tableNumber,
  footnotes,
  dense,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      marginBottom: 'var(--stack-clause)',
      ...style
    }
  }, (tableNumber || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginBottom: 'var(--space-3)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, tableNumber && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--type-mono-sm)',
      color: 'var(--text-clause)',
      marginRight: 8
    }
  }, tableNumber), caption), /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: dense ? 'var(--type-caption)' : 'var(--type-body-sm)'
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => {
    const col = typeof c === 'string' ? {
      key: String(i),
      label: c
    } : c;
    return /*#__PURE__*/React.createElement("th", {
      key: col.key || i,
      scope: "col",
      style: {
        padding: dense ? '7px var(--pad-cell-x)' : 'var(--pad-cell-y) var(--pad-cell-x)',
        textAlign: col.align || 'left',
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        font: 'var(--type-label)',
        letterSpacing: 'var(--tracking-wide)',
        whiteSpace: 'nowrap'
      }
    }, col.label);
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri % 2 ? 'var(--surface-card)' : 'var(--surface-raised)'
    }
  }, columns.map((c, ci) => {
    const col = typeof c === 'string' ? {
      key: String(ci),
      label: c
    } : c;
    const val = Array.isArray(r) ? r[ci] : r[col.key];
    return /*#__PURE__*/React.createElement("td", {
      key: col.key || ci,
      style: {
        padding: dense ? '7px var(--pad-cell-x)' : 'var(--pad-cell-y) var(--pad-cell-x)',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
        textAlign: col.align || 'left',
        color: 'var(--text-body)',
        fontFeatureSettings: '"tnum"',
        fontFamily: col.mono ? 'var(--font-mono)' : undefined,
        verticalAlign: 'top'
      }
    }, val);
  }))))), footnotes && footnotes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, footnotes.map((fn, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, fn))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/document/DocumentMeta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DocumentMeta({
  entries = [],
  columns,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns || Math.min(4, Math.max(1, entries.length))}, minmax(0,1fr))`,
      gap: 'var(--space-5) var(--space-8)',
      margin: 0,
      padding: 'var(--space-5) 0',
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), entries.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 5
    }
  }, e.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: e.mono ? 'var(--type-mono)' : 'var(--type-body-sm)',
      color: 'var(--text-heading)'
    }
  }, e.value))));
}
Object.assign(__ds_scope, { DocumentMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocumentMeta.jsx", error: String((e && e.message) || e) }); }

// components/document/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Figure({
  figureNumber,
  caption,
  source,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      marginBottom: 'var(--stack-clause)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, children), (figureNumber || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, figureNumber && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--type-mono-sm)',
      color: 'var(--text-clause)',
      marginRight: 8
    }
  }, figureNumber), caption, source && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 4,
      color: 'var(--ink-300)'
    }
  }, "Source: ", source)));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Figure.jsx", error: String((e && e.message) || e) }); }

// components/document/ReferenceList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KIND_ICON = {
  pdf: 'file-text',
  link: 'external-link',
  act: 'scale',
  drawing: 'ruler',
  standard: 'book-open'
};
function ReferenceList({
  items = [],
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    target: it.href && it.kind === 'link' ? '_blank' : undefined,
    rel: "noreferrer",
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) var(--space-2)',
      background: hover === i ? 'var(--surface-accent-soft)' : 'transparent',
      textDecoration: 'none',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: KIND_ICON[it.kind] || 'file-text',
    size: 16,
    style: {
      color: 'var(--text-clause)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)'
    }
  }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, it.meta)), it.code && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono-sm)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      marginTop: 3
    }
  }, it.code)))));
}
Object.assign(__ds_scope, { ReferenceList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ReferenceList.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  note: {
    bg: 'var(--surface-accent-soft)',
    bd: 'var(--teal-300)',
    fg: 'var(--teal-700)',
    icon: 'info',
    label: 'Note'
  },
  caution: {
    bg: '#F6EEDC',
    bd: 'var(--cream-300)',
    fg: 'var(--status-caution)',
    icon: 'triangle-alert',
    label: 'Caution'
  },
  warning: {
    bg: '#FBEAE0',
    bd: '#EEC4AD',
    fg: 'var(--status-warning)',
    icon: 'octagon-alert',
    label: 'Warning'
  },
  requirement: {
    bg: 'var(--surface-card)',
    bd: 'var(--cream-300)',
    fg: 'var(--teal-700)',
    icon: 'gavel',
    label: 'Requirement'
  }
};
function Callout({
  tone = 'note',
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.note;
  return /*#__PURE__*/React.createElement("aside", _extends({
    role: "note",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--pad-card-tight) var(--pad-card)',
      background: t.bg,
      borderLeft: `var(--border-width-rule) solid ${t.fg}`,
      border: `var(--border-width-hairline) solid ${t.bd}`,
      borderLeftWidth: 'var(--border-width-rule)',
      borderLeftColor: t.fg,
      borderRadius: '0 var(--radius-card) var(--radius-card) 0',
      marginBottom: 'var(--stack-clause)',
      maxWidth: 'var(--measure-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    style: {
      color: t.fg,
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-h4)',
      color: t.fg,
      letterSpacing: 'var(--tracking-wide)',
      marginBottom: 4
    }
  }, title || t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  footer,
  width = 520,
  onClose,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(14,38,46,.45)',
      backdropFilter: 'blur(2px)',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderTop: 'var(--border-width-rule) solid var(--rule-heading)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-overlay)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--pad-card) var(--pad-card) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--pad-card) var(--pad-card)',
      font: 'var(--type-body-sm)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--pad-card)',
      background: 'var(--surface-card)',
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      borderRadius: '0 0 var(--radius-card) var(--radius-card)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: 'info',
    fg: 'var(--teal-700)'
  },
  success: {
    icon: 'check',
    fg: 'var(--status-success)'
  },
  warning: {
    icon: 'triangle-alert',
    fg: 'var(--status-warning)'
  },
  danger: {
    icon: 'octagon-alert',
    fg: 'var(--status-danger)'
  }
};
function Toast({
  tone = 'info',
  message,
  action,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '10px var(--space-3) 10px var(--space-4)',
      minWidth: 280,
      maxWidth: 460,
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-overlay)',
      font: 'var(--type-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 17,
    style: {
      color: 'var(--cream-100)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), action, onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    variant: "inverse",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      padding: '5px 9px',
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--type-caption)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-raised)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      background: disabled ? 'var(--surface-disabled)' : checked ? 'var(--action-primary)' : 'var(--surface-raised)',
      border: `var(--border-width-hairline) solid ${checked && !disabled ? 'var(--action-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-xs)',
      color: 'var(--text-inverse)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--status-danger)',
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlStyle = opts => ({
  width: '100%',
  minHeight: opts.size === 'sm' ? 32 : 38,
  padding: opts.size === 'sm' ? '6px 10px' : 'var(--pad-control-y) var(--pad-control-x)',
  font: 'var(--type-body-sm)',
  color: opts.disabled ? 'var(--text-disabled)' : 'var(--text-body)',
  background: opts.disabled ? 'var(--surface-disabled)' : 'var(--surface-raised)',
  border: `var(--border-width-hairline) solid ${opts.invalid ? 'var(--status-danger)' : opts.focus ? 'var(--focus-ring)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  outline: 'none',
  boxShadow: opts.focus && !opts.invalid ? '0 0 0 3px var(--teal-50)' : 'none',
  transition: 'var(--transition-control)'
});
function Input({
  size = 'md',
  invalid,
  disabled,
  iconLeft,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle({
        size,
        invalid,
        disabled,
        focus
      }),
      paddingLeft: iconLeft ? 36 : undefined,
      ...style
    }
  }, rest));
  if (!iconLeft) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  disabled,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-raised)',
      border: `var(--border-width-hairline) solid ${checked && !disabled ? 'var(--action-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: disabled ? 'var(--text-disabled)' : 'var(--action-primary)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlStyle = opts => ({
  width: '100%',
  minHeight: opts.size === 'sm' ? 32 : 38,
  padding: opts.size === 'sm' ? '6px 10px' : 'var(--pad-control-y) var(--pad-control-x)',
  font: 'var(--type-body-sm)',
  color: opts.disabled ? 'var(--text-disabled)' : 'var(--text-body)',
  background: opts.disabled ? 'var(--surface-disabled)' : 'var(--surface-raised)',
  border: `var(--border-width-hairline) solid ${opts.invalid ? 'var(--status-danger)' : opts.focus ? 'var(--focus-ring)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  outline: 'none',
  boxShadow: opts.focus && !opts.invalid ? '0 0 0 3px var(--teal-50)' : 'none',
  transition: 'var(--transition-control)'
});
function Select({
  options = [],
  size = 'md',
  invalid,
  disabled,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle({
        size,
        invalid,
        disabled,
        focus
      }),
      appearance: 'none',
      paddingRight: 36,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 36,
      height: 20,
      flex: '0 0 auto',
      padding: 2,
      background: disabled ? 'var(--surface-disabled)' : checked ? 'var(--action-primary)' : 'var(--ink-200)',
      border: `var(--border-width-hairline) solid ${checked && !disabled ? 'var(--action-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      transform: `translateX(${checked ? 16 : 0}px)`,
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlStyle = opts => ({
  width: '100%',
  minHeight: opts.size === 'sm' ? 32 : 38,
  padding: opts.size === 'sm' ? '6px 10px' : 'var(--pad-control-y) var(--pad-control-x)',
  font: 'var(--type-body-sm)',
  color: opts.disabled ? 'var(--text-disabled)' : 'var(--text-body)',
  background: opts.disabled ? 'var(--surface-disabled)' : 'var(--surface-raised)',
  border: `var(--border-width-hairline) solid ${opts.invalid ? 'var(--status-danger)' : opts.focus ? 'var(--focus-ring)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  outline: 'none',
  boxShadow: opts.focus && !opts.invalid ? '0 0 0 3px var(--teal-50)' : 'none',
  transition: 'var(--transition-control)'
});
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle({
        size: 'md',
        invalid,
        disabled,
        focus
      }),
      minHeight: undefined,
      lineHeight: 'var(--leading-normal)',
      resize: 'vertical',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = id => setOpen(o => o.includes(id) ? o.filter(x => x !== id) : multiple ? [...o, id] : [id]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const isOpen = open.includes(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        width: '100%',
        padding: 'var(--space-4) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 15,
      style: {
        color: 'var(--text-clause)'
      }
    }), it.number && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono-sm)',
        color: 'var(--text-clause)'
      }
    }, it.number), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: 'var(--type-h4)',
        color: 'var(--text-heading)'
      }
    }, it.title)), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-5) 30px',
        font: 'var(--type-body-sm)',
        maxWidth: 'var(--measure-body)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      font: 'var(--type-caption)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? 'page' : undefined,
      style: {
        color: last ? 'var(--text-heading)' : 'var(--text-muted)',
        fontWeight: last ? 'var(--weight-medium)' : undefined
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      style: {
        color: 'var(--ink-300)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  label,
  style,
  ...rest
}) {
  const go = p => onChange && onChange(Math.min(pageCount, Math.max(1, p)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "chevron-left",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, "Previous"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono-sm)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label || `${page} / ${pageCount}`), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "chevron-right",
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }, "Next"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SideNav({
  sections = [],
  activeId,
  onSelect,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => sections.map(() => true));
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      width: '100%',
      ...style
    }
  }, rest), sections.map((sec, si) => /*#__PURE__*/React.createElement("div", {
    key: sec.label || si
  }, sec.label && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => o.map((v, i) => i === si ? !v : v)),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '0 0 var(--space-3)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, sec.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open[si] ? 'chevron-down' : 'chevron-right',
    size: 13
  })), open[si] !== false && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderLeft: 'var(--border-width-hairline) solid var(--border-hairline)'
    }
  }, (sec.items || []).map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(it.id);
        }
      },
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        padding: '7px 12px',
        marginLeft: -1,
        borderLeft: `var(--border-width-thick) solid ${active ? 'var(--action-primary)' : 'transparent'}`,
        font: 'var(--type-body-sm)',
        fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: active ? 'var(--text-heading)' : 'var(--text-body)',
        background: active ? 'var(--surface-accent-soft)' : 'transparent',
        textDecoration: 'none',
        transition: 'var(--transition-control)'
      }
    }, it.number && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono-sm)',
        color: 'var(--text-clause)',
        minWidth: 26,
        paddingTop: 2
      }
    }, it.number), /*#__PURE__*/React.createElement("span", null, it.label)));
  })))));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      type: "button",
      "aria-selected": active,
      onClick: () => onChange && onChange(t.id),
      onMouseEnter: () => setHover(t.id),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: size === 'sm' ? '8px 0' : '12px 0',
        marginBottom: -1,
        background: 'none',
        border: 'none',
        borderBottom: `var(--border-width-thick) solid ${active ? 'var(--action-primary)' : 'transparent'}`,
        font: `var(--weight-medium) ${size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)'}/1 var(--font-display)`,
        letterSpacing: 'var(--tracking-wide)',
        color: active ? 'var(--text-heading)' : hover === t.id ? 'var(--text-heading)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 15
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono-sm)',
        color: 'var(--text-muted)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/DocumentLibrary.jsx
try { (() => {
(function () {
  const {
    Input,
    Select,
    Tag,
    Badge,
    Button,
    DataTable,
    IconButton
  } = window.SGRSWDesignSystem_1b8ebd;
  function DocumentLibrary({
    onDownload
  }) {
    const all = window.SGRSW_PORTAL.chapters;
    const [q, setQ] = React.useState('');
    const [discipline, setDiscipline] = React.useState('All');
    const rows = all.filter(c => (!q || (c.n + ' ' + c.title).toLowerCase().includes(q.toLowerCase())) && (discipline === 'All' || c.discipline === discipline));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)'
      }
    }, "Part A: Standards and Guidelines Content"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        maxWidth: 'var(--measure-body)'
      }
    }, "The twenty chapters of Part A. The document focuses primarily on the roads and stormwater disciplines; the intention is to expand it to include all services in one easily distributable and concise document."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        margin: 'var(--space-8) 0 var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search chapters\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        flex: 1
      }
    }, ['All', 'General', 'Roads', 'Stormwater', 'Services'].map(d => /*#__PURE__*/React.createElement(Tag, {
      key: d,
      selected: discipline === d,
      onClick: () => setDiscipline(d)
    }, d))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "download",
      onClick: onDownload
    }, "Download Part A")), /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'n',
        label: 'Ch.',
        align: 'right',
        mono: true
      }, {
        key: 't',
        label: 'Title'
      }, {
        key: 'd',
        label: 'Discipline'
      }, {
        key: 'p',
        label: 'Page',
        align: 'right',
        mono: true
      }, {
        key: 'a',
        label: '',
        align: 'right'
      }],
      rows: rows.map(c => ({
        n: c.n,
        t: c.title,
        d: c.discipline,
        p: c.page ? String(c.page) : '—',
        a: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 4,
            justifyContent: 'flex-end'
          }
        }, /*#__PURE__*/React.createElement(IconButton, {
          icon: "external-link",
          label: 'Open chapter ' + c.n,
          size: "sm"
        }), /*#__PURE__*/React.createElement(IconButton, {
          icon: "download",
          label: 'Download chapter ' + c.n,
          size: "sm",
          onClick: onDownload
        }))
      }))
    }), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-12)',
        textAlign: 'center',
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)',
        border: 'var(--border-width-hairline) solid var(--border-hairline)',
        borderTop: 'none'
      }
    }, "No chapters match these filters."));
  }
  Object.assign(window, {
    DocumentLibrary
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/DocumentLibrary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/DrawingsAndMaps.jsx
try { (() => {
(function () {
  const {
    Card,
    Button,
    Badge,
    Figure,
    Divider,
    Icon,
    Tabs,
    ReferenceList
  } = window.SGRSWDesignSystem_1b8ebd;
  function DrawingsAndMaps() {
    const p = window.SGRSW_PORTAL;
    const [pane, setPane] = React.useState('drawings');
    const item = pane === 'drawings' ? p.drawings[0] : p.maps[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)'
      }
    }, "Parts B & C: Drawings and maps"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        maxWidth: 'var(--measure-body)'
      }
    }, "Part B is the Book of Drawings \u2014 standard details referenced from Part A. Part C holds the maps, including the \u201CRIM Districts\u201D Map, which carries the district areas and contact persons for the Roads and Stormwater Branch."), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-8) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: pane,
      onChange: setPane,
      tabs: [{
        id: 'drawings',
        label: 'Part B — Book of Drawings',
        count: p.drawings.length
      }, {
        id: 'maps',
        label: 'Part C — Maps',
        count: p.maps.length
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ReferenceList, {
      items: (pane === 'drawings' ? p.drawings : p.maps).map(d => ({
        title: d.title,
        meta: [d.code, d.rev].filter(Boolean).join(' · '),
        kind: pane === 'drawings' ? 'drawing' : 'link',
        href: d.href
      }))
    }), /*#__PURE__*/React.createElement(Card, {
      tone: "cream",
      padding: "var(--pad-card-tight)",
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        font: 'var(--type-caption)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 15,
      style: {
        color: 'var(--text-clause)',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, "Only the drawings and maps supplied with this design system are shown. The complete Book of Drawings is issued as Part B.")))), /*#__PURE__*/React.createElement(Figure, {
      figureNumber: item.code,
      caption: item.title + (item.rev ? ' — ' + item.rev : ''),
      source: pane === 'drawings' ? 'Part B: Book of Drawings' : 'Part C: Maps'
    }, item.href ? /*#__PURE__*/React.createElement("iframe", {
      src: item.href,
      title: item.title,
      style: {
        display: 'block',
        width: '100%',
        height: 620,
        border: 'none',
        background: 'var(--surface-raised)'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 320,
        color: 'var(--text-muted)',
        font: 'var(--type-caption)'
      }
    }, "Not supplied with the design-system sources."))));
  }
  Object.assign(window, {
    DrawingsAndMaps
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/DrawingsAndMaps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/PortalHome.jsx
try { (() => {
(function () {
  const {
    Card,
    Button,
    Badge,
    Divider,
    Callout,
    Icon,
    ReferenceList
  } = window.SGRSWDesignSystem_1b8ebd;
  function PortalHome({
    onView,
    onDownload
  }) {
    const p = window.SGRSW_PORTAL;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: 'var(--border-width-rule) solid var(--rule-heading)',
        paddingTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Urban Mobility \xB7 Roads Infrastructure Management"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-chapter-title)',
        maxWidth: '26ch',
        marginTop: 'var(--space-4)'
      }
    }, "Standards and Guidelines for Roads & Stormwater"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-5)',
        font: 'var(--weight-light) var(--text-md)/var(--leading-body) var(--font-body)',
        maxWidth: 'var(--measure-body)'
      }
    }, "Standards and guidelines for urban developments within the City of Cape Town metropolitan area. Available to all developers and consultants (i.e. designers), in order to provide assistance with the design and construction of urban infrastructure."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "download",
      onClick: onDownload
    }, "Download Version ", p.meta.version), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      iconRight: "chevron-right",
      onClick: () => onView('library')
    }, "Browse Part A"))), /*#__PURE__*/React.createElement(Divider, {
      label: "Document structure",
      spacing: "var(--space-10)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: 'var(--space-4)'
      }
    }, p.parts.map(part => /*#__PURE__*/React.createElement(Card, {
      key: part.id,
      tone: "raised",
      interactive: true,
      onClick: () => onView(part.id === 'A' ? 'library' : part.id === 'D' ? 'home' : 'drawings')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: part.icon,
      size: 20,
      style: {
        color: 'var(--text-clause)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        margin: '12px 0 4px'
      }
    }, "Part ", part.id), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-medium) var(--text-md)/1.25 var(--font-display)',
        color: 'var(--text-heading)'
      }
    }, part.label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, part.note)))), /*#__PURE__*/React.createElement(Divider, {
      label: "Before you design",
      spacing: "var(--space-10)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Callout, {
      tone: "requirement"
    }, "It is the responsibility of the designers to confirm that they are utilising the latest available version of this document."), /*#__PURE__*/React.createElement(Callout, {
      tone: "warning",
      title: "No work before approval"
    }, "No construction work may commence before an approval of the detailed design (in writing) is obtained from the Approval Authority."), /*#__PURE__*/React.createElement(Callout, {
      tone: "note"
    }, "Where existing infrastructure and site-specific conditions require deviation from this document, such deviations must be approved by the Approval Authority."), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: 'var(--type-h2)',
        margin: 'var(--space-8) 0 var(--space-4)'
      }
    }, "Start here"), /*#__PURE__*/React.createElement(ReferenceList, {
      items: [{
        title: 'Chapter 1: Introduction',
        meta: 'Purpose, applicability, deviations, legal background',
        code: 'p. 1',
        kind: 'pdf'
      }, {
        title: 'Chapter 18: Approval of Engineering Drawings',
        meta: 'Submission, monitoring, inspection, as-builts',
        code: 'p. 251',
        kind: 'pdf'
      }, {
        title: 'Chapter 19: Drawing and As-Built Requirements',
        meta: 'Required drawing information',
        kind: 'pdf'
      }, {
        title: 'RIM Districts Map',
        meta: 'Part C — district areas and contact persons',
        kind: 'drawing',
        href: '../../assets/maps/RIM-districts-map-rev0.pdf'
      }, {
        title: 'Chapter 20: Document References',
        meta: 'Full document library',
        kind: 'link'
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
      accent: true,
      tone: "raised"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Current version"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-3)',
        margin: '10px 0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono)',
        fontSize: 30,
        color: 'var(--text-heading)'
      }
    }, p.meta.version), /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Current")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Issued ", p.meta.issued), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      block: true,
      iconRight: "chevron-right",
      style: {
        marginTop: 'var(--space-4)'
      },
      onClick: () => onView('revisions')
    }, "Record of revisions")), /*#__PURE__*/React.createElement(Card, {
      tone: "cream",
      style: {
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 8
      }
    }, "Enquiries"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)'
      }
    }, "Any comments, enquiries, requests or feedback relating to this document may be directed to:", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, p.meta.contacts), /*#__PURE__*/React.createElement("a", {
      href: 'mailto:' + p.meta.email,
      style: {
        wordBreak: 'break-all'
      }
    }, p.meta.email)), /*#__PURE__*/React.createElement(Divider, {
      spacing: "var(--space-4)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, p.meta.publisher, /*#__PURE__*/React.createElement("br", null), p.meta.address)))));
  }
  Object.assign(window, {
    PortalHome
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/PortalHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/PortalShell.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Badge,
    Tabs
  } = window.SGRSWDesignSystem_1b8ebd;
  function PortalShell({
    view,
    onView,
    children,
    onDownload
  }) {
    const m = window.SGRSW_PORTAL.meta;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        height: 'var(--header-height)',
        padding: '0 var(--gutter-page)',
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onView('home');
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/sgrsw-logo.png",
      alt: "SGRSW",
      style: {
        height: 36,
        background: 'var(--cream-50)',
        borderRadius: 'var(--radius-xs)',
        padding: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--text-md)/1 var(--font-display)',
        letterSpacing: 'var(--tracking-logo)',
        color: 'var(--cream-50)'
      }
    }, "SGRSW")), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-inverse-muted)',
        flex: 1
      }
    }, "City of Cape Town: Urban Mobility \xB7 Roads Infrastructure Management"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      uppercase: false,
      style: {
        background: 'rgba(253,246,237,.12)',
        color: 'var(--cream-50)',
        borderColor: 'var(--border-inverse)'
      }
    }, "Version ", m.version, " \xB7 ", m.issued), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "sm",
      iconRight: "download",
      onClick: onDownload
    }, "Full document")), /*#__PURE__*/React.createElement("nav", {
      style: {
        padding: '0 var(--gutter-page)',
        background: 'var(--surface-card)',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: view,
      onChange: onView,
      tabs: [{
        id: 'home',
        label: 'Overview',
        icon: 'layout-dashboard'
      }, {
        id: 'library',
        label: 'Part A — Chapters',
        icon: 'book-open'
      }, {
        id: 'drawings',
        label: 'Parts B & C — Drawings & maps',
        icon: 'ruler'
      }, {
        id: 'revisions',
        label: 'Revisions',
        icon: 'history'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-10) var(--gutter-page) var(--space-16)'
      }
    }, children));
  }
  Object.assign(window, {
    PortalShell
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/PortalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/RevisionLog.jsx
try { (() => {
(function () {
  const {
    Badge,
    Callout,
    DataTable,
    Button
  } = window.SGRSWDesignSystem_1b8ebd;
  function RevisionLog() {
    const p = window.SGRSW_PORTAL;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)'
      }
    }, "Record of revisions and amendments"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        font: 'var(--type-body)',
        maxWidth: 'var(--measure-body)'
      }
    }, "All the amendments, additions and omissions are recorded in detailed Change Logs."), /*#__PURE__*/React.createElement(Callout, {
      tone: "requirement",
      style: {
        marginTop: 'var(--space-6)'
      }
    }, "It is the responsibility of the designers to confirm that they are utilising the latest available version of this document."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)',
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'v',
        label: 'Version',
        mono: true
      }, {
        key: 'd',
        label: 'Date'
      }, {
        key: 's',
        label: 'Status'
      }, {
        key: 'x',
        label: 'Details'
      }],
      rows: p.revisions.map((r, i) => ({
        v: r.v,
        d: r.date,
        s: /*#__PURE__*/React.createElement(Badge, {
          tone: i === 0 ? 'success' : 'caution'
        }, i === 0 ? 'Current' : 'Superseded'),
        x: r.details || '—'
      }))
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "download",
      style: {
        marginTop: 'var(--space-5)'
      },
      href: p.meta.changeLogs
    }, "Download change logs")));
  }
  Object.assign(window, {
    RevisionLog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/RevisionLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/designer_portal/portal-data.js
try { (() => {
// Chapter titles, parts, contacts and the revision record are transcribed from
// uploads/SGRSW_Ver5.0 (draft 5.0.2).docx. Page numbers are the document's own where known.
window.SGRSW_PORTAL = {
  meta: {
    title: 'Standards and Guidelines for Roads & Stormwater',
    version: '5.0',
    issued: 'January 2027',
    publisher: 'City of Cape Town: Urban Mobility Directorate',
    address: 'Tower Block, Civic Centre, 12 Hertzog Boulevard, Cape Town, 8001',
    email: 'StandardsGuidelines.RSW@capetown.gov.za',
    contacts: 'Grant Coetzee or Daneel du Toit',
    site: 'www.capetown.gov.za/urbanmobility',
    changeLogs: 'https://resource.capetown.gov.za/cityassets/Media%20Centre%20Assets/SGRSW_ChangeLogs.zip'
  },
  parts: [{
    id: 'A',
    label: 'Standards and Guidelines Content',
    icon: 'book-open',
    note: '20 chapters covering roads, stormwater and related services.'
  }, {
    id: 'B',
    label: 'Book of Drawings',
    icon: 'ruler',
    note: 'Standard detail drawings, e.g. RD1.1 Barrier kerbs & channels.'
  }, {
    id: 'C',
    label: 'Maps',
    icon: 'map',
    note: 'RIM Districts map and the WCG proclaimed road network maps.'
  }, {
    id: 'D',
    label: 'Annexures',
    icon: 'paperclip',
    note: 'Supporting annexures to Part A.'
  }],
  chapters: [{
    n: '1',
    title: 'Introduction',
    discipline: 'General',
    page: 1
  }, {
    n: '2',
    title: 'Road Planning',
    discipline: 'Roads',
    page: 4
  }, {
    n: '3',
    title: 'Road Design',
    discipline: 'Roads',
    page: 18
  }, {
    n: '4',
    title: 'Road Verges',
    discipline: 'Roads',
    page: 50
  }, {
    n: '5',
    title: 'Active Mobility',
    discipline: 'Roads',
    page: 55
  }, {
    n: '6',
    title: 'Carriageway Crossings',
    discipline: 'Roads',
    page: 96
  }, {
    n: '7',
    title: 'Parking',
    discipline: 'Roads',
    page: 106
  }, {
    n: '8',
    title: 'Pavements & Materials',
    discipline: 'Roads',
    page: 114
  }, {
    n: '9',
    title: 'Road Signs, Markings and Control Devices',
    discipline: 'Roads'
  }, {
    n: '10',
    title: 'Stormwater Design',
    discipline: 'Stormwater'
  }, {
    n: '11',
    title: 'Sanitation (Sewer)',
    discipline: 'Services'
  }, {
    n: '12',
    title: 'Water Reticulation',
    discipline: 'Services'
  }, {
    n: '13',
    title: 'Ducts',
    discipline: 'Services'
  }, {
    n: '14',
    title: 'Public Street Lighting',
    discipline: 'Services'
  }, {
    n: '15',
    title: 'Geotechnical',
    discipline: 'General'
  }, {
    n: '16',
    title: 'Trenchless Technologies',
    discipline: 'Services'
  }, {
    n: '17',
    title: 'Miscellaneous',
    discipline: 'General'
  }, {
    n: '18',
    title: 'Approval of Engineering Drawings',
    discipline: 'General',
    page: 251
  }, {
    n: '19',
    title: 'Drawing and As-Built Requirements',
    discipline: 'General'
  }, {
    n: '20',
    title: 'Document References',
    discipline: 'General'
  }],
  drawings: [{
    code: 'RD1.1',
    title: 'BK Kerbs & C1 Channels',
    rev: 'Rev C',
    href: '../../assets/drawings/RD1.1-BK-kerbs-C1-channels-revC.pdf'
  }],
  maps: [{
    code: 'RIM Districts',
    title: 'Roads and Stormwater district areas',
    rev: 'Rev 0',
    href: '../../assets/maps/RIM-districts-map-rev0.pdf'
  }, {
    code: 'WCG',
    title: 'Assignment of Roads in the City of Cape Town Area Map',
    rev: ''
  }, {
    code: 'WCG',
    title: 'City of Cape Town – National, Trunk, Main, Divisional & Minor Road Network Map',
    rev: ''
  }],
  revisions: [{
    v: '5.0',
    date: 'Jan 2027',
    details: 'Current version.'
  }, {
    v: '4.0',
    date: 'Sep 2024',
    details: ''
  }, {
    v: '3.0',
    date: 'Feb 2022',
    details: ''
  }, {
    v: '2.0',
    date: 'June 2021',
    details: 'All the amendments, additions and omissions are recorded in detailed Change Logs.'
  }, {
    v: '1.0',
    date: 'Oct 2020',
    details: 'Release of Document'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/designer_portal/portal-data.js", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/ChapterView.jsx
try { (() => {
(function () {
  const {
    ChapterHeader,
    DocumentMeta,
    Clause,
    DataTable,
    Figure,
    ReferenceList,
    Accordion,
    Callout,
    Button,
    Tabs,
    Card,
    Divider,
    Icon,
    Badge
  } = window.SGRSWDesignSystem_1b8ebd;
  function Blocks({
    blocks
  }) {
    const doc = window.SGRSW_DOC;
    return blocks.map((b, i) => {
      if (b.t === 'p') return /*#__PURE__*/React.createElement("p", {
        key: i,
        style: {
          font: 'var(--type-body)'
        }
      }, b.v);
      if (b.t === 'ul') return /*#__PURE__*/React.createElement("ul", {
        key: i,
        style: {
          font: 'var(--type-body)',
          margin: '0 0 var(--stack-paragraph)',
          paddingLeft: 22
        }
      }, b.v.map((li, j) => /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          marginBottom: 6
        }
      }, li)));
      if (b.t === 'callout') return /*#__PURE__*/React.createElement(Callout, {
        key: i,
        tone: b.tone,
        title: b.title
      }, b.v);
      if (b.t === 'table') {
        const t = doc.tables[b.ref];
        return /*#__PURE__*/React.createElement(DataTable, {
          key: i,
          tableNumber: t.number,
          caption: t.caption,
          columns: t.columns,
          rows: t.rows,
          footnotes: t.footnotes
        });
      }
      if (b.t === 'figure') {
        const g = doc.figures[b.ref];
        return /*#__PURE__*/React.createElement(Figure, {
          key: i,
          figureNumber: g.number,
          caption: g.caption
        }, /*#__PURE__*/React.createElement("img", {
          src: g.src,
          alt: g.caption,
          style: {
            display: 'block',
            width: '100%'
          }
        }));
      }
      if (b.t === 'legal') return /*#__PURE__*/React.createElement(Accordion, {
        key: i,
        defaultOpen: ['Acts'],
        items: doc.legal.map(g => ({
          id: g.group,
          title: g.group,
          content: /*#__PURE__*/React.createElement(ReferenceList, {
            items: g.items
          })
        }))
      });
      return null;
    });
  }
  function ChapterContent({
    chapter
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      tone: "cream",
      style: {
        marginBottom: 'var(--stack-clause)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 'var(--space-3)'
      }
    }, "Chapter content"), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        columns: 2,
        columnGap: 'var(--space-8)'
      }
    }, chapter.clauses.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.id,
      style: {
        display: 'flex',
        gap: 10,
        padding: '3px 0',
        breakInside: 'avoid'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono-sm)',
        color: 'var(--text-clause)',
        minWidth: 38
      }
    }, c.number), /*#__PURE__*/React.createElement("a", {
      href: '#' + c.id,
      style: {
        font: 'var(--type-body-sm)',
        textDecoration: 'none',
        color: 'var(--text-body)'
      }
    }, c.title)))), (chapter.figures.length > 0 || chapter.tables.length > 0) && /*#__PURE__*/React.createElement(Divider, {
      spacing: "var(--space-5)"
    }), chapter.tables.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: chapter.figures.length ? 'var(--space-4)' : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 6
      }
    }, "List of tables"), chapter.tables.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        font: 'var(--type-caption)',
        padding: '2px 0'
      }
    }, t))), chapter.figures.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 6
      }
    }, "List of figures"), chapter.figures.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        font: 'var(--type-caption)',
        padding: '2px 0'
      }
    }, t))));
  }
  function ChapterView({
    chapter,
    onDownload,
    tab,
    onTab,
    onTop
  }) {
    const doc = window.SGRSW_DOC;
    return /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        minWidth: 0,
        padding: 'var(--space-8) var(--gutter-page-wide)'
      }
    }, /*#__PURE__*/React.createElement(ChapterHeader, {
      part: "Part A",
      number: chapter.number,
      title: chapter.title,
      standfirst: chapter.standfirst,
      status: {
        label: 'Version ' + doc.meta.version,
        tone: 'info'
      },
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        iconRight: "download",
        onClick: onDownload
      }, "Download chapter"), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        iconLeft: "printer"
      }, "Print"))
    }), /*#__PURE__*/React.createElement(DocumentMeta, {
      entries: [{
        label: 'Version',
        value: doc.meta.version,
        mono: true
      }, {
        label: 'Issued',
        value: doc.meta.issued
      }, {
        label: 'Part',
        value: 'A — Standards and Guidelines Content'
      }, {
        label: 'Approval authority',
        value: 'District Engineer (Roads and Stormwater Branch)'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-6) 0 var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: onTab,
      tabs: [{
        id: 'clauses',
        label: 'Clauses',
        count: chapter.clauses.length
      }, {
        id: 'figures',
        label: 'Figures & tables',
        count: chapter.figures.length + chapter.tables.length
      }, {
        id: 'refs',
        label: 'Legal background'
      }]
    })), tab === 'clauses' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChapterContent, {
      chapter: chapter
    }), chapter.clauses.map(c => /*#__PURE__*/React.createElement(Clause, {
      key: c.id,
      id: c.id,
      number: c.number,
      title: c.title,
      level: c.level || 2
    }, /*#__PURE__*/React.createElement(Blocks, {
      blocks: c.blocks
    }))), /*#__PURE__*/React.createElement(Divider, {
      spacing: "var(--space-8)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onTop();
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--type-body-sm)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up",
      size: 15
    }), " To: Chapter Overview"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onTop();
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--type-body-sm)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up",
      size: 15
    }), " To: Part A Overview"))), tab === 'figures' && (chapter.figures.length + chapter.tables.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)',
        maxWidth: 'var(--measure-body)'
      }
    }, "This chapter contains no figures or tables.") : /*#__PURE__*/React.createElement("div", null, chapter.tables.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        padding: '8px 0',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "table",
      size: 16,
      style: {
        color: 'var(--text-clause)',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)'
      }
    }, t))), chapter.figures.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        padding: '8px 0',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ruler",
      size: 16,
      style: {
        color: 'var(--text-clause)',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)'
      }
    }, t))))), tab === 'refs' && /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: ['Acts'],
      items: doc.legal.map(g => ({
        id: g.group,
        title: g.group,
        content: /*#__PURE__*/React.createElement(ReferenceList, {
          items: g.items
        })
      }))
    }));
  }
  Object.assign(window, {
    ChapterView,
    Blocks,
    ChapterContent
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/ChapterView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/ContentsRail.jsx
try { (() => {
(function () {
  const {
    SideNav,
    Divider,
    Badge,
    Icon
  } = window.SGRSWDesignSystem_1b8ebd;
  function ContentsRail({
    chapterId,
    clauseId,
    onSelectClause
  }) {
    const doc = window.SGRSW_DOC;
    const chapterItems = doc.index.map(c => ({
      id: 'ch:' + c.n,
      number: c.n + '.',
      label: c.title,
      built: c.built
    }));
    // Clauses of the open chapter are injected under its own entry.
    const items = [];
    chapterItems.forEach(it => {
      items.push(it);
      const cid = it.id.slice(3);
      if (cid === chapterId && doc.chapters[cid]) {
        doc.chapters[cid].clauses.forEach(c => items.push({
          id: c.id,
          number: c.number,
          label: c.title
        }));
      }
    });
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 'var(--header-height)',
        alignSelf: 'start',
        width: 'var(--sidebar-width)',
        flex: '0 0 var(--sidebar-width)',
        maxHeight: 'calc(100vh - var(--header-height))',
        overflowY: 'auto',
        padding: 'var(--space-8) var(--space-6) var(--space-8) 0',
        borderRight: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement(SideNav, {
      sections: [{
        label: 'Part A: Standards and Guidelines Content',
        items
      }],
      activeId: clauseId,
      onSelect: onSelectClause
    }), /*#__PURE__*/React.createElement(Divider, {
      spacing: "var(--space-6)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 'var(--space-3)'
      }
    }, "Other parts"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, doc.parts.slice(1).map(p => /*#__PURE__*/React.createElement("li", {
      key: p.id
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--type-body-sm)',
        color: 'var(--text-body)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.id === 'B' ? 'ruler' : p.id === 'C' ? 'map' : 'paperclip',
      size: 15,
      style: {
        color: 'var(--text-clause)'
      }
    }), p.label)))));
  }
  Object.assign(window, {
    ContentsRail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/ContentsRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/OnThisPage.jsx
try { (() => {
(function () {
  const {
    Card,
    Divider
  } = window.SGRSWDesignSystem_1b8ebd;
  function OnThisPage({
    chapter,
    clauseId,
    onSelectClause
  }) {
    const m = window.SGRSW_DOC.meta;
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 'var(--header-height)',
        alignSelf: 'start',
        width: 'var(--toc-width)',
        flex: '0 0 var(--toc-width)',
        padding: 'var(--space-8) 0 var(--space-8) var(--space-6)',
        borderLeft: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 'var(--space-4)'
      }
    }, "On this page"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, chapter.clauses.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.id
    }, /*#__PURE__*/React.createElement("a", {
      href: '#' + c.id,
      onClick: e => {
        e.preventDefault();
        onSelectClause(c.id);
      },
      style: {
        display: 'flex',
        gap: 8,
        padding: '5px 0',
        font: 'var(--type-caption)',
        paddingLeft: (c.number.split('.').length - 2) * 10,
        color: c.id === clauseId ? 'var(--text-heading)' : 'var(--text-muted)',
        fontWeight: c.id === clauseId ? 'var(--weight-medium)' : undefined,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono-sm)',
        color: 'var(--text-clause)'
      }
    }, c.number), /*#__PURE__*/React.createElement("span", null, c.title))))), /*#__PURE__*/React.createElement(Card, {
      tone: "cream",
      padding: "var(--pad-card-tight)",
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 6
      }
    }, "Enquiries"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)'
      }
    }, "Any comments, enquiries, requests or feedback relating to this document may be directed to:", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, m.contacts), /*#__PURE__*/React.createElement("a", {
      href: 'mailto:' + m.email,
      style: {
        wordBreak: 'break-all'
      }
    }, m.email))), /*#__PURE__*/React.createElement(Card, {
      tone: "cream",
      padding: "var(--pad-card-tight)",
      style: {
        marginTop: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 6
      }
    }, "Districts"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)'
      }
    }, "The Roads and Stormwater district areas can be found on the \u201CRIM Districts\u201D Map.", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../../assets/maps/RIM-districts-map-rev0.pdf",
      target: "_blank",
      rel: "noreferrer"
    }, "RIM Districts Map (Part C)")))));
  }
  Object.assign(window, {
    OnThisPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/OnThisPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/SearchOverlay.jsx
try { (() => {
(function () {
  const {
    Input,
    Tag,
    Badge,
    Divider
  } = window.SGRSWDesignSystem_1b8ebd;
  function SearchOverlay({
    open,
    onClose,
    onPick
  }) {
    const [q, setQ] = React.useState('approval');
    const [discipline, setDiscipline] = React.useState('all');
    if (!open) return null;
    const results = window.SGRSW_DOC.search.filter(r => !q || (r.title + r.snippet + r.ref).toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '12vh',
        background: 'rgba(14,38,46,.45)',
        backdropFilter: 'blur(2px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: 'min(680px,92vw)',
        maxHeight: '64vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-raised)',
        border: 'var(--border-width-hairline) solid var(--border-hairline)',
        borderTop: 'var(--border-width-rule) solid var(--rule-heading)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-overlay)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      autoFocus: true,
      iconLeft: "search",
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search clauses, tables and references\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        marginTop: 'var(--space-3)'
      }
    }, [['all', 'All disciplines'], ['roads', 'Roads'], ['stormwater', 'Stormwater']].map(([id, label]) => /*#__PURE__*/React.createElement(Tag, {
      key: id,
      selected: discipline === id,
      onClick: () => setDiscipline(id)
    }, label)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
        overflowY: 'auto'
      }
    }, results.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8)',
        textAlign: 'center',
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "No clauses match this search."), results.map(r => /*#__PURE__*/React.createElement("button", {
      key: r.ref,
      type: "button",
      onClick: () => onPick(r),
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        width: '100%',
        padding: 'var(--space-3) var(--space-4)',
        background: 'none',
        border: 'none',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
        textAlign: 'left',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono)',
        color: 'var(--text-clause)',
        minWidth: 46
      }
    }, r.ref), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: 'var(--type-body-sm)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-heading)'
      }
    }, r.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, r.snippet))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        padding: '10px var(--space-4)',
        background: 'var(--surface-card)',
        borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
        font: 'var(--type-mono-sm)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2191\u2193 navigate"), /*#__PURE__*/React.createElement("span", null, "\u21B5 open clause"), /*#__PURE__*/React.createElement("span", null, "esc close"))));
  }
  Object.assign(window, {
    SearchOverlay
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/SearchOverlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/Shell.jsx
try { (() => {
(function () {
  const {
    Button,
    IconButton,
    Badge,
    Divider,
    Tooltip
  } = window.SGRSWDesignSystem_1b8ebd;
  function TopBar({
    onSearch,
    onDownload
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        height: 'var(--header-height)',
        padding: '0 var(--gutter-page)',
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/sgrsw-logo.png",
      alt: "SGRSW",
      style: {
        height: 36,
        background: 'var(--cream-50)',
        borderRadius: 'var(--radius-xs)',
        padding: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-medium) var(--text-md)/1 var(--font-display)',
        letterSpacing: 'var(--tracking-logo)',
        color: 'var(--cream-50)'
      }
    }, "SGRSW")), /*#__PURE__*/React.createElement(Divider, {
      orientation: "vertical",
      spacing: "0",
      style: {
        background: 'var(--border-inverse)',
        height: 24,
        alignSelf: 'center'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-inverse-muted)',
        flex: 1
      }
    }, "Standards and Guidelines for Roads & Stormwater \xB7 City of Cape Town: Urban Mobility"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onSearch,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        width: 260,
        padding: '7px 10px',
        background: 'rgba(253,246,237,.10)',
        border: '1px solid var(--border-inverse)',
        borderRadius: 'var(--radius-control)',
        color: 'var(--text-inverse-muted)',
        font: 'var(--type-body-sm)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 15,
        height: 15,
        background: 'currentColor',
        WebkitMaskImage: 'url(https://unpkg.com/lucide-static@0.544.0/icons/search.svg)',
        maskImage: 'url(https://unpkg.com/lucide-static@0.544.0/icons/search.svg)',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, "Search the standards\u2026"), /*#__PURE__*/React.createElement("kbd", {
      style: {
        font: 'var(--type-mono-sm)',
        opacity: .8
      }
    }, "\u2318K")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "printer",
      label: "Print chapter",
      variant: "inverse"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "sm",
      iconRight: "download",
      onClick: onDownload
    }, "Download"));
  }
  function SubBar({
    chapter,
    onOpenRevisions
  }) {
    const m = window.SGRSW_DOC.meta;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: '10px var(--gutter-page)',
        background: 'var(--surface-card)',
        borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Breadcrumb",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "SGRSW"), /*#__PURE__*/React.createElement("span", null, "\u203A"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, chapter.part), /*#__PURE__*/React.createElement("span", null, "\u203A"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-heading)',
        fontWeight: 'var(--weight-medium)'
      }
    }, chapter.number, ": ", chapter.title)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Confirm you are using the latest available version"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onOpenRevisions,
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "solid",
      uppercase: false
    }, "Version ", m.version, " \xB7 ", m.issued))));
  }
  function Shell({
    children,
    chapter,
    onSearch,
    onDownload,
    onOpenRevisions
  }) {
    const m = window.SGRSW_DOC.meta;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      onSearch: onSearch,
      onDownload: onDownload
    }), /*#__PURE__*/React.createElement(SubBar, {
      chapter: chapter,
      onOpenRevisions: onOpenRevisions
    }), children, /*#__PURE__*/React.createElement("footer", {
      style: {
        marginTop: 'var(--stack-section)',
        padding: 'var(--space-8) var(--gutter-page)',
        background: 'var(--surface-inverse-deep)',
        color: 'var(--text-inverse-muted)',
        font: 'var(--type-caption)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-12)',
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '36ch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-medium) var(--text-sm)/1 var(--font-display)',
        letterSpacing: 'var(--tracking-logo)',
        color: 'var(--cream-50)',
        marginBottom: 10
      }
    }, "SGRSW"), "Standards and Guidelines for Roads & Stormwater, Version ", m.version, " | ", m.issued, ".", /*#__PURE__*/React.createElement("br", null), "Published by ", m.publisher, "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--teal-300)',
        marginBottom: 10
      }
    }, "Document structure"), window.SGRSW_DOC.parts.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: '1px 0'
      }
    }, p.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--teal-300)',
        marginBottom: 10
      }
    }, "Enquiries"), m.contacts, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: 'mailto:' + m.email,
      style: {
        color: 'var(--cream-100)'
      }
    }, m.email), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--cream-100)'
      }
    }, m.site))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: 'var(--space-6) auto 0',
        paddingTop: 'var(--space-4)',
        borderTop: '1px solid var(--border-inverse)',
        color: 'var(--teal-300)'
      }
    }, "\xA9 City of Cape Town. Reproduction permitted for personal or in-house use for the purpose of implementing the content contained herein.")));
  }
  Object.assign(window, {
    Shell,
    TopBar,
    SubBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/standards_document/content.js
try { (() => {
// Content transcribed verbatim from uploads/SGRSW_Ver5.0 (draft 5.0.2).docx.
// Chapters 1, 3 (3.1–3.2.2) and 18 carry real text, tables and figures; the remaining
// chapters appear in navigation with their real titles only.
window.SGRSW_DOC = {
  meta: {
    title: 'Standards and Guidelines for Roads & Stormwater',
    version: '5.0',
    issued: 'January 2027',
    draft: 'draft 5.0.2',
    publisher: 'City of Cape Town: Urban Mobility Directorate',
    authority: 'Director: Roads Infrastructure Management, or the relevant delegated District Engineer',
    email: 'StandardsGuidelines.RSW@capetown.gov.za',
    contacts: 'Grant Coetzee or Daneel du Toit',
    site: 'www.capetown.gov.za/urbanmobility'
  },
  parts: [{
    id: 'A',
    label: 'Part A: Standards and Guidelines Content'
  }, {
    id: 'B',
    label: 'Part B: Book of Drawings'
  }, {
    id: 'C',
    label: 'Part C: Maps'
  }, {
    id: 'D',
    label: 'Part D: Annexures'
  }],
  // Real chapter titles, Part A.
  index: [{
    n: '1',
    title: 'Introduction',
    page: 1,
    built: true
  }, {
    n: '2',
    title: 'Road Planning',
    page: 4
  }, {
    n: '3',
    title: 'Road Design',
    page: 18,
    built: true
  }, {
    n: '4',
    title: 'Road Verges',
    page: 50
  }, {
    n: '5',
    title: 'Active Mobility',
    page: 55
  }, {
    n: '6',
    title: 'Carriageway Crossings',
    page: 96
  }, {
    n: '7',
    title: 'Parking',
    page: 106
  }, {
    n: '8',
    title: 'Pavements & Materials',
    page: 114
  }, {
    n: '9',
    title: 'Road Signs, Markings and Control Devices'
  }, {
    n: '10',
    title: 'Stormwater Design'
  }, {
    n: '11',
    title: 'Sanitation (Sewer)'
  }, {
    n: '12',
    title: 'Water Reticulation'
  }, {
    n: '13',
    title: 'Ducts'
  }, {
    n: '14',
    title: 'Public Street Lighting'
  }, {
    n: '15',
    title: 'Geotechnical'
  }, {
    n: '16',
    title: 'Trenchless Technologies'
  }, {
    n: '17',
    title: 'Miscellaneous'
  }, {
    n: '18',
    title: 'Approval of Engineering Drawings',
    page: 251,
    built: true
  }, {
    n: '19',
    title: 'Drawing and As-Built Requirements'
  }, {
    n: '20',
    title: 'Document References'
  }],
  chapters: {
    '1': {
      part: 'Part A: Standards and Guidelines Content',
      number: 'Chapter 1',
      title: 'Introduction',
      cover: 'Introduction',
      standfirst: 'Standards and guidelines for urban developments within the City of Cape Town metropolitan area — the planning, design and construction of the roads and utility services infrastructure required to service a residential, commercial or industrial urban community.',
      figures: [],
      tables: [],
      clauses: [{
        id: '1.1',
        number: '1.1',
        title: 'Purpose of this Document',
        blocks: [{
          t: 'p',
          v: 'This document has been prepared to lay down standards and guidelines for urban developments within the City of Cape Town metropolitan area. Such a development generally entails the planning, design and construction of the roads and utility services infrastructure that is required to service a residential, commercial, or industrial urban community. The aforementioned is not necessarily limited to the construction of new infrastructure, but may also include alterations to existing infrastructure.'
        }, {
          t: 'p',
          v: 'This document will be available to all developers and consultants (i.e. designers), in order to provide assistance with the design and construction of urban infrastructure.'
        }, {
          t: 'callout',
          tone: 'note',
          v: 'It is the responsibility of the designers to confirm that they are utilising the latest available version of this document.'
        }, {
          t: 'p',
          v: 'This document will aim to:'
        }, {
          t: 'ul',
          v: ['Give guidance to where relevant specifications and guidelines can be found;', 'Highlight and, in some instances, repeat important aspects of such relevant documentation;', 'Provide minimum specifications relevant to the City\u2019s needs;', 'Make designers aware of the City\u2019s adopted policies;', 'Strive towards uniformity in terms of design criteria and material specifications;', 'Ensure that all materials used in any public roadway or road reserve comply with the highest standard as approved by South African National Standards (SANS).']
        }, {
          t: 'p',
          v: 'The current document focuses primarily on the roads and stormwater disciplines. However, ultimately, the intention is to expand the document, in order to include all services in one easily distributable and concise document.'
        }]
      }, {
        id: '1.2',
        number: '1.2',
        title: 'Design Approval',
        blocks: [{
          t: 'p',
          v: 'The engineering design drawings shall be approved by the Approval Authority. For the remainder of this document, the \u201capproval authority\u201d shall refer to the Director: Roads Infrastructure Management or the relevant delegated District Engineer (District Offices, roads and stormwater section), unless stated otherwise.'
        }, {
          t: 'p',
          v: 'The Roads and Stormwater district areas can be found on the \u201cRIM Districts\u201d Map (refer to Part C).'
        }, {
          t: 'callout',
          tone: 'requirement',
          v: 'The approval of the design in no way absolves designers from any responsibilities and/or liabilities in respect of their design.'
        }, {
          t: 'p',
          v: 'For further information, designers can refer to Chapter 18, which explains the process and requirements regarding the approval of engineering design drawings.'
        }]
      }, {
        id: '1.3',
        number: '1.3',
        title: 'Discrepancies',
        blocks: [{
          t: 'p',
          v: 'Should any discrepancies become apparent, it shall be referred to the delegated approval authority (facilitating the engineering design approval) or the contact persons listed in this document.'
        }]
      }, {
        id: '1.4',
        number: '1.4',
        title: 'Applicability',
        blocks: [{
          t: 'p',
          v: 'The standards and guidelines contained in this document are applicable to all residential, industrial and commercial developments in the City of Cape Town metropolitan area.'
        }]
      }, {
        id: '1.5',
        number: '1.5',
        title: 'Deviations',
        blocks: [{
          t: 'p',
          v: 'Where existing infrastructure and site-specific conditions require deviation from this document, such deviations must be approved by the Approval Authority.'
        }]
      }, {
        id: '1.6',
        number: '1.6',
        title: 'Site Specific Conditions and Future Developments',
        blocks: [{
          t: 'p',
          v: 'Where abnormal site conditions exist or where a development needs to service existing or future developments, the Approval Authority may require a higher standard of the services to be provided.'
        }, {
          t: 'p',
          v: 'Special or unique design situations shall be addressed on a case-by-case basis.'
        }]
      }, {
        id: '1.7',
        number: '1.7',
        title: 'Legal Background',
        blocks: [{
          t: 'p',
          v: 'The following documents may be applicable:'
        }, {
          t: 'legal'
        }]
      }, {
        id: '1.8',
        number: '1.8',
        title: 'Referenced Documents & Hyperlinks',
        blocks: [{
          t: 'p',
          v: 'This document makes reference to various external literatures. All the referenced literature will be provided in Chapter 20 (i.e. Document References). The document library will provide the full details of the referenced literature.'
        }, {
          t: 'callout',
          tone: 'caution',
          v: 'It is the designer\u2019s responsibility to ensure that the literature is still applicable and relevant (i.e. not outdated or superseded).'
        }]
      }]
    },
    '3': {
      part: 'Part A: Standards and Guidelines Content',
      number: 'Chapter 3',
      title: 'Road Design',
      cover: 'Road Design',
      standfirst: 'The basic criteria relating to the design of roadways in an urban environment, primarily covering Class 2, 3, 4 and 5 roads.',
      figures: ['Figure 3-1: Typical Cross Sections of a Class 2 Major Arterial road', 'Figure 3-2: Typical Cross Sections of a Class 3 Minor Arterial road', 'Figure 3-3: Typical Cross Sections of Class 4 Collector roads', 'Figure 3-4: Typical Cross Section of Class 5 Local Commercial and Industrial Roads', 'Figure 3-5: Typical Cross Section of Class 5 Local Residential Access Roads', 'Figure 3-6: Typical Cross Section of a Class 6 Pedestrian Walkway'],
      tables: ['Table 3-1: Typical Road Reserve Widths and Design Speeds for Urban Road Classes', 'Table 3-2: Cross Section requirements for a Class 2, Major Arterial'],
      clauses: [{
        id: '3.1',
        number: '3.1',
        title: 'General',
        blocks: [{
          t: 'p',
          v: 'The following section of this document primarily covers Class 2, 3, 4 and 5 roads.'
        }, {
          t: 'p',
          v: 'Where the City is responsible for the design of a Class 1 road, designers can refer to the following:'
        }, {
          t: 'ul',
          v: ['SANRAL: Geometric Design Guidelines', 'WCG: Geometric Design Manual, 1996']
        }, {
          t: 'p',
          v: 'As mentioned in Chapter 2 of this document, for middle to higher order roadways, the scheduling of Project Management Team (PMT\u2019s) meetings are recommended, in order to assist with the thorough planning and design of said roads.'
        }, {
          t: 'p',
          v: 'The following manuals provides a detailed coverage of the geometric design for roads:'
        }, {
          t: 'ul',
          v: ['UTG 1: Guidelines for the Geometric Design of Urban Arterial Roads', 'UTG 5: Geometric Design of Urban Collector Roads', 'UTG 7: Geometric Design of Urban Residential Streets', 'UTG 10: Guidelines for the Geometric Design of Commercial and Industrial Local Streets', 'The Red Book, Part II Chapter I: Transportation and Road Pavement']
        }, {
          t: 'p',
          v: 'Other documents in Chapter 20 can be referred to for items not covered in the above documents.'
        }]
      }, {
        id: '3.2',
        number: '3.2',
        title: 'Road Design Criteria',
        blocks: [{
          t: 'p',
          v: 'The basic criteria relating to the design of roadways in an urban environment are provided in this section.'
        }, {
          t: 'p',
          v: 'Designers can refer to the above-mentioned manuals for further details.'
        }]
      }, {
        id: '3.2.1',
        number: '3.2.1',
        title: 'Road Reserve Width',
        level: 3,
        blocks: [{
          t: 'p',
          v: 'The typical road reserve widths for the various road classes, as detailed in Section 2.4.1, are provided in the table below:'
        }, {
          t: 'table',
          ref: 'reserve'
        }]
      }, {
        id: '3.2.2',
        number: '3.2.2',
        title: 'Road Cross Section Requirements',
        level: 3,
        blocks: [{
          t: 'p',
          v: 'The recommended minimum requirements for the different classes of roadways, as described above, are provided hereafter (Class 1 roads are excluded). It shall be noted that these details refer to the typical cross section requirements for the relevant road classes and are subject to change.'
        }, {
          t: 'figure',
          ref: 'fig31'
        }, {
          t: 'figure',
          ref: 'fig33'
        }, {
          t: 'figure',
          ref: 'fig35'
        }, {
          t: 'figure',
          ref: 'fig36'
        }]
      }]
    },
    '18': {
      part: 'Part A: Standards and Guidelines Content',
      number: 'Chapter 18',
      title: 'Approval of Engineering Drawings',
      cover: 'Approval of Engineering Drawings',
      standfirst: 'The process and requirements for the approval of detailed engineering drawings, construction monitoring, inspection and the submission of as-built information.',
      figures: [],
      tables: [],
      clauses: [{
        id: '18.1',
        number: '18.1',
        title: 'General',
        blocks: [{
          t: 'p',
          v: 'The detailed design shall be in accordance with the requirements of this document, unless advised otherwise.'
        }, {
          t: 'callout',
          tone: 'requirement',
          v: 'The design shall be carried out and certified by an Engineering Professional, registered with the Engineering Council of South Africa (ECSA) in terms of the Engineering Professionals Act, 46 of 2000, with competence in the relevant field.'
        }, {
          t: 'p',
          v: 'The contents of this document shall be applicable to the following cases:'
        }, {
          t: 'ul',
          v: ['Provision of new infrastructure and/or services in the public road reserve;', 'Alterations or upgrades to existing infrastructure and/or services in the public road reserve', 'Connection or link services from private developments;', 'Any other infrastructure and/or services that will be taken over by the City at completion of the works.']
        }]
      }, {
        id: '18.2',
        number: '18.2',
        title: 'Approval of Detailed Engineering Drawings',
        blocks: [{
          t: 'p',
          v: 'Engineering drawings shall be approved by the Approval Authority, i.e. District Engineer (Roads and Stormwater Branch).'
        }, {
          t: 'p',
          v: 'The various Roads and Stormwater district areas can be found on the \u201cRIM Districts\u201d Map (refer to Part C).'
        }, {
          t: 'p',
          v: 'The following will be required to obtain approval:'
        }, {
          t: 'ul',
          v: ['Submission of one (1) set of hard copy drawings, printed to scale.', 'Drawings shall be signed by a Professionally Registered person.', 'Cover letter, listing all the drawings requiring approval, including the latest revision number(s).']
        }, {
          t: 'p',
          v: 'Where approvals from other City departments are required (e.g. Traffic Signals, Stormwater Management Plans, etc.), such approvals shall be obtained prior to the submission of the detail design drawings to the District Engineer.'
        }, {
          t: 'p',
          v: 'Designers can refer to Section 19.1 regarding the required information that shall be included in the drawing submission.'
        }, {
          t: 'callout',
          tone: 'caution',
          v: 'The approval of detailed engineering drawings will be valid for a period of twelve (12) months. If construction has not commenced within said period, the aforementioned approval shall be renewed, at which time the Approval Authority reserves the right for revised comments and conditions.'
        }]
      }, {
        id: '18.3',
        number: '18.3',
        title: 'Construction Monitoring & Testing',
        blocks: [{
          t: 'p',
          v: 'An adequate level of supervision by a Registered Professional Engineer or Engineering Technologist shall be provided for the full duration of the works. In this regard, a proposal for construction supervision shall be submitted to the City for approval before construction commences.'
        }, {
          t: 'p',
          v: 'The necessary testing, as prescribed in the relevant specification documents (e.g. SANS 1200 or COTO), shall be carried out and the results thereof be made available to the City.'
        }]
      }, {
        id: '18.4',
        number: '18.4',
        title: 'Construction',
        blocks: [{
          t: 'callout',
          tone: 'warning',
          title: 'No work before approval',
          v: 'No construction work may commence before an approval of the detailed design (in writing) is obtained from the Approval Authority.'
        }, {
          t: 'p',
          v: 'No work may commence without approved wayleaves and permits from the various departments for roads, stormwater, sewer, water, electricity and telecommunication services. Wayleave applications can be submitted via the electronic Wayleave Management System (https://wayleave.capetown.gov.za).'
        }, {
          t: 'p',
          v: 'The Developer\u2019s contractor shall be acquainted with the exact positions of all existing and proposed underground and aboveground services before commencing any construction work.'
        }, {
          t: 'p',
          v: 'The Developer shall be held responsible for all project related defects in respect of any infrastructure inside the public road reserve, up to the issuing of the Certificate of Completion. Thereafter, the liability will be limited to project related defects only, for a period of twelve months.'
        }]
      }, {
        id: '18.5',
        number: '18.5',
        title: 'Inspection',
        blocks: [{
          t: 'p',
          v: 'Prior to the handover of infrastructure, the City shall be invited to a site inspection in order to ensure the following:'
        }, {
          t: 'ul',
          v: ['The works were constructed as per the approved engineering drawings;', 'Identify any \u201csnags\u201d, which shall be rectified prior to the issuing of the Certificate of Completion.']
        }]
      }, {
        id: '18.6',
        number: '18.6',
        title: 'Submission of As-Built information',
        blocks: [{
          t: 'p',
          v: 'The submission of as-built drawings and information, including relevant test results, shall be submitted prior to the issuing of the Certificate of Completion.'
        }, {
          t: 'p',
          v: 'Refer to Chapter 19.2 for further requirements.'
        }]
      }, {
        id: '18.7',
        number: '18.7',
        title: 'Proclaimed Main Roads',
        blocks: [{
          t: 'p',
          v: 'Construction works on Proclaimed Main Roads requires the approval from the Western Cape Government (i.e. the Administrator) in terms of Section 17 of the Roads Ordinance (No 19 of 1976).'
        }, {
          t: 'p',
          v: 'Engineering drawings, along with the City\u2019s approval letter, shall be submitted to the Western Cape Government: Department of Infrastructure, Transport Infrastructure branch for approval.'
        }, {
          t: 'p',
          v: 'Maps of importance (refer to Part C):'
        }, {
          t: 'ul',
          v: ['WCG: Assignment of Roads in the City of Cape Town Area Map.', 'WCG: City of Cape Town \u2013 National, Trunk, Main, Divisional & Minor Road Network Map.']
        }]
      }, {
        id: '18.8',
        number: '18.8',
        title: 'Private Developments',
        blocks: [{
          t: 'p',
          v: 'Developers are responsible for ensuring compliance with all the applicable legislation, including City of Cape Town\u2019s policies, by-laws, etc. Certain activities may require the consent or permit approvals by national and/or provincial government departments.'
        }]
      }]
    }
  },
  legal: [{
    group: 'Acts',
    items: [{
      title: 'Constitution of the Republic of South Africa',
      meta: '108 of 1996',
      kind: 'act'
    }, {
      title: 'Municipal Structures Act',
      meta: '117 of 1998',
      kind: 'act'
    }, {
      title: 'Municipal Structures Amendment Act',
      meta: '58 of 1999',
      kind: 'act'
    }, {
      title: 'Municipal Systems Act',
      meta: '32 of 2000',
      kind: 'act'
    }, {
      title: 'Municipal Systems Amendment Act',
      meta: '7 of 2022',
      kind: 'act'
    }, {
      title: 'National Environmental Management Act',
      meta: '107 of 1998',
      kind: 'act'
    }, {
      title: 'National Heritage Resources Act',
      meta: '25 of 1999',
      kind: 'act'
    }, {
      title: 'National Road Traffic Act',
      meta: '93 of 1996',
      kind: 'act'
    }]
  }, {
    group: 'By-Laws & Policies',
    items: [{
      title: 'CCT Informal Trading By-Law',
      meta: '2009',
      kind: 'link'
    }, {
      title: 'CCT Municipal Planning Amendment By-Law',
      meta: '2019',
      kind: 'link'
    }, {
      title: 'CCT Development Management Scheme',
      kind: 'link'
    }, {
      title: 'CCT Outdoor Advertising & Signage By-Law',
      meta: '2013',
      kind: 'link'
    }, {
      title: 'CCT Parking By-Law',
      meta: '2010',
      kind: 'link'
    }, {
      title: 'CCT Parking Policy',
      meta: '2014',
      kind: 'link'
    }, {
      title: 'CCT Stormwater Management By-Law',
      kind: 'link'
    }, {
      title: 'CCT By-Law Relating to Streets, Public Places and the Prevention of Noise Nuisances',
      meta: '2007',
      kind: 'link'
    }]
  }, {
    group: 'Ordinances',
    items: [{
      title: 'Roads Ordinance',
      meta: 'No 19 of 1976',
      kind: 'act'
    }]
  }],
  tables: {
    reserve: {
      number: 'Table 3-1',
      caption: 'Typical Road Reserve Widths and Design Speeds for Urban Road Classes',
      columns: [{
        key: 'cls',
        label: 'Class',
        mono: true
      }, {
        key: 'name',
        label: 'Name'
      }, {
        key: 'w',
        label: 'Road Reserve (m)',
        align: 'right',
        mono: true
      }, {
        key: 's',
        label: 'Design Speed (km/h)',
        align: 'right',
        mono: true
      }],
      rows: [{
        cls: '2',
        name: 'Major Arterial',
        w: '40m',
        s: '80'
      }, {
        cls: '3',
        name: 'Minor Arterial',
        w: '32 - 40m',
        s: '70'
      }, {
        cls: '4',
        name: 'Collector Street',
        w: '18 - 20m [1]',
        s: '60'
      }, {
        cls: '5A',
        name: 'Local Street: Commercial & Industrial',
        w: '16-30m',
        s: '40'
      }, {
        cls: '5B',
        name: 'Local Street: Residential',
        w: '12m',
        s: '40'
      }, {
        cls: '5C',
        name: '',
        w: '10m',
        s: '40'
      }, {
        cls: '5D [2]',
        name: '',
        w: '8m',
        s: '40'
      }, {
        cls: '6',
        name: 'Walk- & Cycleway [2]',
        w: '6m',
        s: 'n/a'
      }],
      footnotes: ['[1] In certain instances, 25m road reserve might be required (major collectors)', '[2] Class 5D roads should be limited to short lengths and straights.']
    }
  },
  figures: {
    fig31: {
      number: 'Figure 3-1',
      caption: 'Typical Cross Sections of a Class 2 Major Arterial road',
      src: '../../assets/figures/fig-3-1-class2-major-arterial.jpg'
    },
    fig33: {
      number: 'Figure 3-3',
      caption: 'Typical Cross Sections of Class 4 Collector roads',
      src: '../../assets/figures/fig-3-3-class4-collector.jpg'
    },
    fig35: {
      number: 'Figure 3-5',
      caption: 'Typical Cross Section of Class 5 Local Residential Access Roads',
      src: '../../assets/figures/fig-3-5-class5-residential.jpg'
    },
    fig36: {
      number: 'Figure 3-6',
      caption: 'Typical Cross Section of a Class 6 Pedestrian Walkway',
      src: '../../assets/figures/fig-3-6-class6-walkway.jpg'
    }
  },
  revisions: [{
    v: '1.0',
    date: 'Oct 2020',
    details: 'Release of Document'
  }, {
    v: '2.0',
    date: 'June 2021',
    details: 'All the amendments, additions and omissions are recorded in detailed Change Logs.'
  }, {
    v: '3.0',
    date: 'Feb 2022',
    details: ''
  }, {
    v: '4.0',
    date: 'Sep 2024',
    details: ''
  }, {
    v: '5.0',
    date: 'Jan 2027',
    details: 'Current version.'
  }],
  changeLogs: 'https://resource.capetown.gov.za/cityassets/Media%20Centre%20Assets/SGRSW_ChangeLogs.zip',
  search: [{
    ref: '1.2',
    chapter: '1',
    title: 'Design Approval',
    snippet: 'The engineering design drawings shall be approved by the Approval Authority\u2026'
  }, {
    ref: '1.5',
    chapter: '1',
    title: 'Deviations',
    snippet: '\u2026such deviations must be approved by the Approval Authority.'
  }, {
    ref: '3.2.1',
    chapter: '3',
    title: 'Road Reserve Width',
    snippet: 'Typical road reserve widths for the various road classes \u2014 Table 3-1.'
  }, {
    ref: '3.2.2',
    chapter: '3',
    title: 'Road Cross Section Requirements',
    snippet: 'Recommended minimum requirements for the different classes of roadways.'
  }, {
    ref: '18.2',
    chapter: '18',
    title: 'Approval of Detailed Engineering Drawings',
    snippet: 'Engineering drawings shall be approved by the District Engineer (Roads and Stormwater Branch).'
  }, {
    ref: '18.4',
    chapter: '18',
    title: 'Construction',
    snippet: 'No construction work may commence before an approval of the detailed design\u2026'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/standards_document/content.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChapterHeader = __ds_scope.ChapterHeader;

__ds_ns.Clause = __ds_scope.Clause;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DocumentMeta = __ds_scope.DocumentMeta;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.ReferenceList = __ds_scope.ReferenceList;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
