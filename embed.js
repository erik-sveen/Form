(function() {
    var EmbedWidget = {
        init: function(options) {
            var container = document.getElementById(options.containerId);
            var button = document.createElement('button');
            button.innerText = options.buttonText || 'Open Embed';
            button.onclick = function() {
                // Static URL for demonstration, replace with your own allowed URL
                var iframe = document.createElement('iframe');
                iframe.src = 'https://vg.no'; // Public site that allows embedding
                iframe.width = '100%';
                iframe.height = '600px';
                iframe.style.border = '0';
                container.appendChild(iframe);
            };
            container.appendChild(button);
        }
    };

    window.EmbedWidget = EmbedWidget;
})();
