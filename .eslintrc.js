module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // enUS: all rules docs https://eslint.org/docs/rules/
    // zhCN: 所有规则文档 https://eslint.bootcss.com/docs/rules/

    /**
     * Possible Errors
     * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
     *  */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    /**
     * Best Practices
     * 这些规则是关于最佳实践的，帮助你避免一些问题
     */

    // 强制使用 === 和 !==，除了以下这些情况外，： 1.比较两个字面量的值 2.比较 typeof 的值 3.与 null 进行比较
    'eqeqeq': ['error', 'smart'],
    // 禁用 alert、confirm 和 prompt
    'no-alert': 'error',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'error',
    // 禁止出现空函数,可以仅包含至少一条注释。
    'no-empty-function': 'error',
    // 禁用 eval()
    'no-eval': 'error',
    // 禁用隐式的eval(),总是使用函数作为 setTimeout() 和 setInterval() 的第一个参数
    'no-implied-eval': 'error',
    // 禁止在for循环中,使用循环变量定义函数
    'no-loop-func': 'error',
    // 禁止magic number,该规则旨在确保将具体的数字声明为意义明确的常量，从而使代码更加可读并且易于重构。常用数字除外
    // "no-magic-numbers": ["error", { "ignore": [1, 0, -1, 24, 60, 365] }],
    // 禁止在返回语句中赋值
    'no-return-assign': ['error', 'always'],
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // Promise.reject()的参数必须使用Error对象或不带参数
    // 强制将变量声明放在它们作用域的顶部
    'vars-on-top': 'error',

    /**
     * Variables
     * 这些规则与变量声明有关：
     */
    // 禁止将变量初始化为 undefined https://eslint.bootcss.com/docs/rules/no-undef-init
    'no-undef': 'off',
    'no-undef-init': 'error',
    // 禁止将 undefined 作为标识符
    'no-undefined': 'error',
    // 禁止在变量定义之前使用它们，function除外
    'no-use-before-define': ['error', 'nofunc'],

    /**
     * Node.js and CommonJS
     * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
     */

    // 要求 require() 出现在顶层模块作用域中
    // 如果你需要在 try/catch 内部使用 require() 一个可选依赖，
    // 你可以使用 // eslint-disable-line global-require 注释只对此依赖禁用此规则
    // "global-require": "error",
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',
    // 禁止未使用过的变量 default: ["error", { vars: "local" }]
    'no-unused-vars': ['off'],

    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常[主观]的
     */

    // 数组元素和方括号之间禁止空格
    'array-bracket-spacing': ['error', 'never'],
    // 强制在代码块中开括号前 { 和闭括号后 } 有空格
    'block-spacing': 'error',
    // 强制在代码块中使用one true brace style, 允许块的开括号和闭括号在 同一行
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    // 强制使用骆驼拼写法命名变量
    'camelcase': 'error',
    // 结尾逗号(主要缓解增加一行对象属性，导致 git 变更记录是两行的情况)
    // 除数组类型外，禁止多行使用拖尾逗号
    // "comma-dangle": ["error", {
    //   "arrays": "always-multiline", // 强制拖尾逗号，例外：当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    //   "objects": "never",
    //   "imports": "never",
    //   "exports": "never",
    //   "functions": "never"
    // }]
    // 强制逗号前无空格，逗号后有空格
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    // 强制逗号在行尾
    'comma-style': ['error', 'last'],
    // 当获取当前执行环境的上下文时，强制统一使用 "that"
    // "consistent-this": ["error", "that"],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 禁止在 包含隐式返回表达式 的 箭头函数体 之前出现换行
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 两个空格缩进
    // "indent": ["error", 2],
    // 强制在 JSX 属性中一致地使用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 强制在对象字面量的属性中,键和冒号之间无空格，冒号和值之间1个空格，ex. ｛ name: "jerry" ｝
    'key-spacing': ['error', { 'mode': 'strict' }],
    // 强制在关键字前后空格
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // 要求在块级注释之前有一空行
    'lines-around-comment': ['error', { 'beforeBlockComment': true }],
    // 要求类成员之间空行
    'lines-between-class-members': ['error', 'always'],
    // 强制块语句的最大可嵌套深度 4
    'max-depth': ['error', 4],

    /**
     * 强制行的最大长度 80(默认), 
     * 忽略正则表达式匹配的行；可以只匹配单行，而且在 YAML 或 JSON 中需要双重转义，
     * 忽略所有拖尾注释和行内注释，
     * 忽略含有链接的行，
     * 忽略含有双引号或单引号字符串的行，
     * 忽略包含模板字面量的行
     * 忽略包含正则表达式的行
     */
    // "max-len": ["error", { "code": 80 }],

    // 强制一个文件的最大行数, 默认 300
    // "max-lines": ["error", 800],

    // 强制函数最大代码行数, 默认 50
    // "max-lines-per-function": ["error", { "max": 80 }],
    // 要求构造函数首字母大写
    'new-cap': 'error',
    // 调用无参构造函数时有圆括号
    'new-parens': 'error',
    // 要求方法链中每个调用都有一个换行符，特例：允许在同一行成链的深度 2(默认)
    // "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    // 禁止使用按位操作符, "~" 例外
    'no-bitwise': ['error', { 'allow': ['~'] }],
    // 禁用 continue: https://eslint.bootcss.com/docs/rules/no-continue
    'no-continue': 'error',
    // 禁止 if 作为唯一的语句出现在 else 语句中 https://eslint.bootcss.com/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // 禁止混合使用不同的操作符 "error","off"
    'no-mixed-operators': 'off',
    // 禁止空格和 tab 的混合缩进 *配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 禁止出现多行空行, 最多2行
    'no-multiple-empty-lines': 'error',
    // 禁用嵌套的三元表达式 
    'no-nested-ternary': 'error',
    // 禁用 Object 的构造函数, 用对象字面量代替
    'no-new-object': 'error',
    // 禁用 tab
    'no-tabs': 'error',
    // 禁用行尾空格
    // "no-trailing-spaces": "error",
    // 强制单个语句不可换行
    'nonblock-statement-body-position': 'error',
    // 强制在大括号中使用空格，该规则强制在对象字面量、解构赋值 和 import/export 说明符的花括号中使用一致的空格，"never" (默认) 不允许花括号中有空格
    'object-curly-spacing': ['error', 'always'],
    // 禁止块内填充, 默认always
    'padded-blocks': ['error', 'never'],
    // 要求对象字面量属性名称用引号括起来
    'quote-props': 'off',
    // 尽可能地使用单引号
    'quotes': ['error', 'single'],
    // 禁止使用分号结束语句 https://eslint.bootcss.com/docs/rules/semi
    // "semi": ["error", "always"],
    'semi': ['error', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'error',
    // 强制在 function的左括号之前空格
    'space-before-function-paren': ['error', 'always'],
    // 强制圆括号内没有空格（默认）
    'space-in-parens': ['error', 'never'],

    /**
     * ECMAScript 6
     * 这些规则只与 ES6 有关, 即通常所说的 ES2015：
     */

    // 要求箭头函数的参数使用圆括号 always
    // "arrow-parens": ["error", "always"],
    // 强制箭头函数的箭头前后空格
    'arrow-spacing': 'error',
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',
    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',

    /**
     * vue 项目专用 ttps://eslint.vuejs.org/rules/
     * Priority A: Essential
     * 
     */
    'vue/require-default-prop': 'warn',
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-quotes': 'warn',

    /* "vue/max-attributes-per-line": [
        2,
        {
            "singleline": 5,
            "multiline": {
                "max": 1,
                "allowFirstLine": false,
            },
        },
    ], */

    // bug fix
    'template-curly-spacing': 'off',
    'indent': 'off',
  }
}
