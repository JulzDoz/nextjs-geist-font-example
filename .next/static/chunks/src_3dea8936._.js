(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HomeHero": (()=>HomeHero),
    "PageHero": (()=>PageHero),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const Hero = ({ title, description, imageSrc, imageAlt, height = 'lg', overlay = 'dark', buttons, align = 'center', className = '' })=>{
    const heights = {
        sm: 'h-[40vh] min-h-[300px]',
        md: 'h-[60vh] min-h-[400px]',
        lg: 'h-[80vh] min-h-[600px]',
        full: 'h-screen'
    };
    const overlays = {
        none: '',
        light: 'bg-white/30',
        dark: 'bg-black/60'
    };
    const alignments = {
        left: 'text-left items-start',
        center: 'text-center items-center'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative ${heights[height]} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-green-900 to-green-800"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: imageAlt || '',
                    fill: true,
                    className: "object-cover",
                    priority: true,
                    onError: (e)=>{
                        // Hide the image on error and let the gradient background show
                        const target = e.target;
                        target.style.display = 'none';
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/hero.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            overlay !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 ${overlays[overlay]}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col ${alignments[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl text-white/90 mb-8 leading-relaxed",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        buttons && buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col sm:flex-row gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`,
                            children: buttons.map((button, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: button.href,
                                    variant: button.variant,
                                    size: "lg",
                                    children: button.label
                                }, index, false, {
                                    fileName: "[project]/src/components/ui/hero.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/hero.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/hero.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/hero.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/hero.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
_c = Hero;
const PageHero = ({ title, description, imageSrc })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
        title: title,
        description: description,
        imageSrc: imageSrc,
        height: "sm",
        overlay: "dark",
        align: "center"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/hero.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
_c1 = PageHero;
const HomeHero = ({ title, description, imageSrc, primaryButton, secondaryButton })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
        title: title,
        description: description,
        imageSrc: imageSrc,
        height: "lg",
        overlay: "dark",
        align: "center",
        buttons: [
            {
                ...primaryButton,
                variant: 'primary'
            },
            {
                ...secondaryButton,
                variant: 'outline'
            }
        ]
    }, void 0, false, {
        fileName: "[project]/src/components/ui/hero.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
_c2 = HomeHero;
const __TURBOPACK__default__export__ = Hero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Hero");
__turbopack_context__.k.register(_c1, "PageHero");
__turbopack_context__.k.register(_c2, "HomeHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/section.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SectionGrid": (()=>SectionGrid),
    "SectionHeader": (()=>SectionHeader),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Section = ({ children, className = '', background = 'white', spacing = 'md', container = true, id })=>{
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        green: 'bg-green-900 text-white',
        none: ''
    };
    const spacings = {
        none: '',
        sm: 'py-8',
        md: 'py-16',
        lg: 'py-24'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `${backgrounds[background]} ${spacings[spacing]} ${className}`,
        children: container ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/section.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this) : children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_c = Section;
const SectionHeader = ({ title, description, align = 'center', className = '' })=>{
    const alignment = {
        left: 'text-left',
        center: 'text-center'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-12 ${alignment[align]} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/section.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui/section.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_c1 = SectionHeader;
const SectionGrid = ({ children, columns = 3, gap = 'md', className = '' })=>{
    const cols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };
    const gaps = {
        sm: 'gap-4',
        md: 'gap-8',
        lg: 'gap-12'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid ${cols[columns]} ${gaps[gap]} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/section.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_c2 = SectionGrid;
const __TURBOPACK__default__export__ = Section;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "SectionHeader");
__turbopack_context__.k.register(_c2, "SectionGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FeatureCard": (()=>FeatureCard),
    "NewsCard": (()=>NewsCard),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const Card = ({ title, description, imageSrc, imageAlt, href, footer, className = '', variant = 'default', children })=>{
    const variants = {
        default: 'bg-white border border-gray-200',
        feature: 'bg-white shadow-lg',
        news: 'bg-white border-l-4 border-l-green-900 border-t border-r border-b border-gray-200'
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        ${variants[variant]} 
        rounded-lg 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:shadow-xl 
        group 
        hover:bg-gray-50/50
        ${className}
      `,
        children: [
            imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: imageAlt || title,
                    fill: true,
                    className: "object-cover transform transition-transform group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/card.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 group-hover:text-green-900 transition-colors",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/card.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/card.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-t border-gray-200 bg-gray-50/50",
                children: footer
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "block group",
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    return content;
};
_c = Card;
const NewsCard = ({ title, date, excerpt, href, category })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        variant: "news",
        title: title,
        description: excerpt,
        href: href,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm text-gray-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                    dateTime: date,
                    children: new Date(date).toLocaleDateString()
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/card.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, void 0),
                category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-900 font-medium",
                    children: category
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/card.tsx",
                    lineNumber: 102,
                    columnNumber: 24
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 100,
            columnNumber: 9
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
};
_c1 = NewsCard;
const FeatureCard = ({ title, description, imageSrc, href })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        variant: "feature",
        title: title,
        description: description,
        imageSrc: imageSrc,
        href: href,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center text-green-900 font-semibold group-hover:translate-x-1 transition-all duration-300",
                children: [
                    "Learn More",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "ml-1.5 w-4 h-4 transform transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/card.tsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/card.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/card.tsx",
                lineNumber: 124,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 123,
            columnNumber: 9
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
};
_c2 = FeatureCard;
const __TURBOPACK__default__export__ = Card;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "NewsCard");
__turbopack_context__.k.register(_c2, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/news/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>News)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function News() {
    const featuredNews = {
        title: "GWD Secures Additional Water Rights for Wetland Conservation",
        date: "2024-01-15",
        excerpt: "Major victory in securing water resources that will help maintain critical wetland habitats for years to come.",
        category: "Featured"
    };
    const newsItems = [
        {
            title: "Annual Water Quality Report Shows Positive Trends",
            date: "2024-01-10",
            excerpt: "Latest monitoring data indicates improved water quality metrics across the Grassland Ecological Area.",
            category: "Reports"
        },
        {
            title: "New Conservation Partnership Announced",
            date: "2024-01-05",
            excerpt: "GWD partners with regional conservation groups to enhance wetland habitat protection efforts.",
            category: "Partnerships"
        },
        {
            title: "Board Approves 2024 Strategic Plan",
            date: "2023-12-20",
            excerpt: "Five-year strategic plan focuses on sustainable water management and habitat conservation.",
            category: "Governance"
        }
    ];
    const upcomingEvents = [
        {
            title: "Annual Stakeholder Meeting",
            date: "2024-02-15",
            excerpt: "Join us for our annual stakeholder meeting to discuss achievements and future plans.",
            category: "Event"
        },
        {
            title: "World Wetlands Day Celebration",
            date: "2024-02-02",
            excerpt: "Community event celebrating the importance of wetland conservation.",
            category: "Event"
        }
    ];
    const publicNotices = [
        {
            title: "Water Allocation Schedule Update",
            date: "2024-01-12",
            excerpt: "Important updates to the spring water allocation schedule.",
            category: "Notice"
        },
        {
            title: "Public Comment Period: Draft Environmental Report",
            date: "2024-01-08",
            excerpt: "30-day public comment period now open for the draft environmental impact report.",
            category: "Notice"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHero"], {
                title: "News & Updates",
                description: "Stay informed about the latest developments at Grassland Water District"
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                background: "white",
                spacing: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                        title: featuredNews.title,
                        date: featuredNews.date,
                        excerpt: featuredNews.excerpt,
                        category: featuredNews.category,
                        href: `/news/${featuredNews.title.toLowerCase().replace(/\s+/g, '-')}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                background: "gray",
                spacing: "lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "Recent News",
                        description: "Latest updates from Grassland Water District"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionGrid"], {
                        columns: 3,
                        children: newsItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                                title: item.title,
                                date: item.date,
                                excerpt: item.excerpt,
                                category: item.category,
                                href: `/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`
                            }, index, false, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                background: "white",
                spacing: "lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "Upcoming Events",
                        description: "Join us at these upcoming events and meetings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionGrid"], {
                        columns: 2,
                        children: upcomingEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                                title: event.title,
                                date: event.date,
                                excerpt: event.excerpt,
                                category: event.category,
                                href: `/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`
                            }, index, false, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/events",
                            variant: "outline",
                            children: "View All Events"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                background: "gray",
                spacing: "lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                        title: "Public Notices",
                        description: "Important announcements and public notices"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionGrid"], {
                        columns: 2,
                        children: publicNotices.map((notice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                                title: notice.title,
                                date: notice.date,
                                excerpt: notice.excerpt,
                                category: notice.category,
                                href: `/notices/${notice.title.toLowerCase().replace(/\s+/g, '-')}`
                            }, index, false, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/notices",
                            variant: "outline",
                            children: "View All Notices"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                background: "green",
                spacing: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            title: "Stay Updated",
                            description: "Subscribe to our newsletter for regular updates about our work and upcoming events.",
                            className: "text-white [&>p]:text-white/90"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "mt-8 flex gap-4 max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    className: "flex-1 px-4 py-2 rounded-md text-gray-900",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "secondary",
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = News;
var _c;
__turbopack_context__.k.register(_c, "News");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3dea8936._.js.map