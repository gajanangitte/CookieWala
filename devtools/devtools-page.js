(function () {
    if (preferences.showDevToolsPanel)
        chrome.devtools.panels.create('CookieWala', 'img/icon_32x32.png', 'devtools/panel.html');
})();
