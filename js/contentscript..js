
function loadPlugin()
{
    var loaded = document.getElementById('__IDM__');
    if (loaded)
        return;

    var node = document.createElement('meta');
    var plugin = document.createElement('embed');
    if (! node || ! plugin)
        return;

    node.setAttribute('style', 'visibility: hidden !important; display: block !important; '
                             + 'width: 0px !important; height: 0px !important; border-style: none !important;');
    
    plugin.setAttribute('id', '__IDM__');
    plugin.setAttribute('type', 'application/x-idm-downloader');
    plugin.setAttribute('width', '1');
    plugin.setAttribute('height', '1');
    plugin.setAttribute('style', 'visibility: hidden !important; display: block !important; '
                               + 'width: 1px !important; height: 1px !important; border-style: none !important; '
                               + 'position: absolute !important; top: 0px !important; left: 0px !important;');

    node.appendChild(plugin);
    document.documentElement.appendChild(node);

    if (plugin.ManagerVersion)
    {
        plugin.Initialize(chrome);

        plugin.setEventListener(window, 'mousedown', plugin.onMouseDown, true);
        plugin.setEventListener(window, 'mouseup', plugin.onMouseUp, true);
        
        plugin.setEventListener(window, 'scroll', plugin.onScroll);
        plugin.setEventListener(window, 'resize', plugin.onResize);

        plugin.setEventListener(document, 'beforeload', plugin.onBeforeLoad, true);
    }
}

if (document instanceof HTMLDocument)
    loadPlugin();
