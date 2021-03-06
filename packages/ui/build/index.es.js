import React from 'react';

var getColorButton = function (color) {
    var cssClass = '';
    switch (color) {
        case 'blue':
            cssClass =
                'bg-clrPrimary hover:bg-clrPrimary01 text-white font-bold py-2 px-4 rounded w-full transition-all duration-300 ease-in';
            break;
        case 'white':
            cssClass =
                'bg-clrInverse hover:bg-clrPrimary text-clrPrimary hover:text-white font-bold py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrPrimary';
            break;
        case 'social-white':
            cssClass =
                'bg-clrInverse hover:bg-clrField01 text-sm font-thin text-clrSubText5 py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrBorder01 flex items-center justify-center';
            break;
        case 'social-black':
            cssClass =
                'bg-black hover:bg-gray-700 text-sm font-thin text-clrInverse py-2 px-4 rounded w-full transition-all duration-300 ease-in border-solid border border-clrBorder01 flex items-center justify-center';
            break;
    }
    return cssClass;
};

var Button = function (props) {
    return (React.createElement("button", { onClick: props.onClick, className: getColorButton(props.color), style: props.style },
        props.prefix,
        props.loadingButton ? (React.createElement("svg", { className: "inline-block w-4 h-4 fill-current" },
            React.createElement("svg", { version: "1.1", id: "L9", x: "0px", y: "0px", viewBox: "25 25 50 50" },
                React.createElement("path", { d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" },
                    React.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "1s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" }))))) : (props.children)));
};

var Header = function (props) {
    return (React.createElement("header", { className: "fixed flex flex-row min-w-full bg-clrPrimary h-header z-10" },
        React.createElement("div", { className: "flex items-center w-480 px-3 mx-auto text-white" },
            React.createElement("button", { className: "mr-5 leading-none border-none focus:outline-none active:outline-none", onClick: props.onClick },
                React.createElement("span", { className: "icon icon-arrow-left" })),
            React.createElement("div", null, props.children))));
};

export { Button, Header };
//# sourceMappingURL=index.es.js.map
