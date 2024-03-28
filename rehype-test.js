import {h} from 'hastscript'
import {toJsxRuntime} from 'hast-util-to-jsx-runtime'
import {Fragment, jsx, jsxs} from 'react/jsx-runtime'
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import reactElementToJSXString from 'react-element-to-jsx-string';

const tree = h('h1', {class : "test-class"}, 'Hello, world!');

const doc = reactElementToJSXString.default(toJsxRuntime(tree, {Fragment, jsx, jsxs}));

console.log(doc)
