(function() {
    var EmbedWidget = {
        init: function(options) {
            var container = document.getElementById(options.containerId);
            var button = document.createElement('button');
            button.innerText = options.buttonText || 'Open Embed';
            button.onclick = function() {
                var iframe = document.createElement('iframe');
                iframe.src = options.url;
                iframe.width = '100%';
                iframe.height = '600px'; // Set height or make it configurable
                iframe.style.border = '0';
                container.appendChild(iframe);
            };
            container.appendChild(button);
        }
    };

    window.EmbedWidget = EmbedWidget;
})();
