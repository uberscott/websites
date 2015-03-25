function snapGallery(gallery) {
	var featured = gallery.getElementsByTagName("figure")[0];
	var thumbs = gallery.querySelector(".thumbnails");
	var selected = gallery.querySelector(".selected") || thumbs.getElementsByTagName("li")[0];
	var nav = gallery.getElementsByTagName("nav")[0];

	selected.className = 'selected';

	

	function nextImage() {
		var next = selected;

		if (thumbs.firstElementChild) {
			next = selected.nextElementSibling ? selected.nextElementSibling : thumbs.firstElementChild;
		} else {
			do {
				next = next.nextSibling ? next.nextSibling : thumbs.firstChild;
			} while (next.nodeType != Node.COMMENT_NODE)
		}
		return next;
	}

	function previousImage() {
		var prev = selected;

		if (thumbs.firstElementChild) {
			prev = selected.previousElementSibling ? selected.previousElementSibling : thumbs.lastElementChild;
		} else {
			do {
				prev = prev.previousSibling ? prev.previousSibling : thumbs.lastChild;
			} while (prev.nodeType != Node.COMMENT_NODE)
		}
		return prev;
	}

	function setSelected(newSelected) {
		selected.className = '';
		selected = newSelected;
		selected.className = 'selected';

		//selected.scrollIntoView();
		//featured.scrollIntoView();
		selected.parentNode.scrollTop = selected.offsetTop;

		var thumb = newSelected.firstChild;

		for (var i = 0, featuredNode; featuredNode = featured.childNodes[i]; i++) {
			var thumbNode = thumb.childNodes[i].cloneNode(true);
 			
			if (thumbNode.src) {
				var img = new Image();
				// capture 'thumbnail' from 'http://example.com/path/to/thumbnail.gif'
				if (selected.firstChild.getAttribute('data-full')) {
					img.src = selected.firstChild.getAttribute('data-full');
				} else {
					img.src = thumbNode.src.replace(
						thumbNode.src.substring(thumbNode.src.lastIndexOf('_'), thumbNode.src.lastIndexOf('.')),
						featuredNode.src.substring(featuredNode.src.lastIndexOf('_'), featuredNode.src.lastIndexOf('.'))
						);
				}

				featuredNode.style.opacity = 0;
				featuredNode.style.transition = '';
				featuredNode.alt = thumbNode.alt;
				featuredNode.title = thumbNode.title;

				img.onload = function(f, t) {
					return function() {
						f.src = img.src;
						f.width = img.width;
						f.height = img.height;
						f.style.opacity = '';
						f.style.transition = 'opacity 1.5s';
					}
				}(featuredNode, thumbNode);
			} else {
				featured.replaceChild(thumbNode, featuredNode);
			}
		}
		featured.className = thumb.className.replace('thumbnail', 'featured');
		featured.parentNode.className = featured.className;
	}

	gallery.addEventListener("click", function(ev) {
		if (ev.target.className == "previous") {
			setSelected(previousImage());
		} else if (ev.target.className == "next") {
			setSelected(nextImage());
		} else {
			switch (ev.target.tagName.toLowerCase()) {
				case 'img':
					// fall through
				case 'ul':
					if (ev.target.parentNode.tagName.toLowerCase() == 'figure' && ev.target.parentNode.className.match(/thumbnail/i)) {
						setSelected(ev.target.parentNode.parentNode);
					}
					break;
				default:
					break;
			}
		}
	});
}

snapGallery(document.querySelector(".gallery"));