"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
var react_1 = require("react");
require("@/app/globals.css");
var google_1 = require("next/font/google");
var theme_provider_1 = require("@/components/theme-provider");
var inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "Flowmatic - AI-Powered Workflow Automation Consulting",
    description: "Transform your business operations with intelligent workflow automation solutions.",
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={inter.className}>
        <theme_provider_1.ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </theme_provider_1.ThemeProvider>
      </body>
    </html>);
}
