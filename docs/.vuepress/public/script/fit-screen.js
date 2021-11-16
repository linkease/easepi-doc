if (window.innerWidth < 500) {
    var meta = null;
    meta = document.head.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "viewport";
        document.head.appendChild(meta);
    }
    meta.content = "width=500, initial-scale=" + (window.innerWidth / 500);
}