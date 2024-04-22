(function() {
    var EmbedWidget = {
        init: function(options) {
            var iframe = document.createElement('iframe');
            iframe.src = options.url;
            iframe.width = options.width || '100%';
            iframe.height = options.height || '400px';
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.allowFullscreen = true;
            document.getElementById(options.containerId).appendChild(iframe);
        }
    };

    window.EmbedWidget = EmbedWidget;
})();
