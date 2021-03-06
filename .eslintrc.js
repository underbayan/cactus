module.exports = {
    extends: ['plugin:vue/base', 'prettier'], // activate vue related rules
    rules: {
        indent: [1, 4],
        'constructor-super': [2],
        'for-direction': [2],
        'getter-return': [2],
        'no-case-declarations': [2],
        'no-class-assign': [2],
        'no-compare-neg-zero': [2],
        'no-cond-assign': [2],
        'no-const-assign': [2],
        'no-constant-condition': [2],
        'no-control-regex': [2],
        'no-debugger': [2],
        'no-delete-var': [2],
        'no-dupe-args': [2],
        'no-dupe-class-members': [2],
        'no-dupe-keys': [2],
        'no-duplicate-case': [2],
        'no-empty': [2],
        'no-empty-character-class': [2],
        'no-empty-function': [2],
        'no-empty-pattern': [2],
        'no-ex-assign': [2],
        'no-extra-boolean-cast': [2],
        'no-extra-semi': [2],
        'no-fallthrough': [2],
        'no-func-assign': [2],
        'no-global-assign': [2],
        'no-invalid-regexp': [2],
        'no-irregular-whitespace': [2],
        'no-new-symbol': [2],
        'no-obj-calls': [2],
        'no-octal': [2],
        'no-redeclare': [2],
        'no-regex-spaces': [2],
        'no-return-assign': [2],
        'no-return-await': [2],
        'no-self-assign': [2],
        'no-self-compare': [2],
        'no-shadow-restricted-names': [2],
        'no-sparse-arrays': [2],
        'no-this-before-super': [2],
        'no-unexpected-multiline': [2],
        'no-unmodified-loop-condition': [2],
        'no-unreachable': [2],
        'no-unsafe-finally': [2],
        'no-unsafe-negation': [2],
        'no-unused-labels': [2],
        'require-yield': [2],
        'use-isnan': [2],
        'valid-typeof': [2],
        'vue/jsx-uses-vars': [2],
        'vue/no-async-in-computed-properties': [2],
        'vue/no-confusing-v-for-v-if': [2],
        'vue/no-duplicate-attributes': [2],
        'vue/no-parsing-error': [2],
        'vue/no-reserved-keys': [2],
        'vue/no-textarea-mustache': [2],
        'vue/require-component-is': [2],
        'vue/require-render-return': [2],
        'vue/require-v-for-key': [2],
        'vue/return-in-computed-property': [2],
        'vue/valid-template-root': [2],
        'vue/valid-v-bind': [2],
        'vue/valid-v-cloak': [2],
        'vue/valid-v-else': [2],
        'vue/valid-v-else-if': [2],
        'vue/valid-v-for': [2],
        'vue/valid-v-html': [2],
        'vue/valid-v-if': [2],
        'vue/valid-v-model': [2],
        'vue/valid-v-on': [2],
        'vue/valid-v-once': [2],
        'vue/valid-v-pre': [2],
        'vue/valid-v-show': [2],
        'vue/valid-v-text': [2],
        yoda: [2]
    }
}
