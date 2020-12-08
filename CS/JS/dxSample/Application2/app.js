window.Application2 = window.Application2 || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: Application2,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: Application2.config.defaultLayout,
        navigation: Application2.config.navigation,
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });
    
});
