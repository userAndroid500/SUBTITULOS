var thisWidth = jwplayer('media-player').getWidth();

var thisHeight = jwplayer('media-player').getHeight();



var suck = jwplayer('media-player')[0].allSources;

jwplayer('media-player').setup({

"playlist":[{"sources": suck, "tracks": [{"file":"", "label":"English", "kind": "captions", "default": true}]}]

"width": thisWidth,

"height": thisHeight

});