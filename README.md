# bootstrap-lightbox-gallery

A Bootstrap component to display a gallery of images in a lightbox.

![Show images in your page](https://shaack.com/projekte/assets/img/bootstrap-lightbox-gallery-page.png)
*Show images in your page*

![On click large versions of the images are displayed in a lightbox*](https://shaack.com/projekte/assets/img/bootstrap-lightbox-gallery-lightbox.png)
*On click large versions of the images are displayed in a lightbox*

## References

- [Demo page with usage examples](https://shaack.com/projekte/bootstrap-lightbox-gallery)
- [GitHub repository](https://github.com/shaack/bootstrap-lightbox-gallery)
- [npm package](https://www.npmjs.com/package/bootstrap-lightbox-gallery)

## Installation

```bash
npm install bootstrap-lightbox-gallery
```

## Usage

Show the images in the page as figures with (optional hidden) caption.

```html
<a href="https://via.placeholder.com/1024x768" data-gallery="gallery-1" class="d-block">
    <figure>
        <img src="https://via.placeholder.com/1024x768" class="img-fluid" alt="Lorem ipsum dolor sit amet"/>
        <figcaption class="visually-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </figcaption>
    </figure>
</a>
<a href="https://via.placeholder.com/768x1024" data-gallery="gallery-1" class="d-block">
    <figure>
        <img src="https://via.placeholder.com/768x1024" class="img-fluid" alt="Quick brown fox jumps">
        <figcaption class="visually-hidden">
            Quick brown fox jumps over the lazy dog. All their equipment and instruments are alive.
        </figcaption>
    </figure>
</a>
<!-- [...] -->
```

Create the LightboxGallery instance.

```html
<!-- add `bootstrap-lightbox-gallery`, `cm-web-modules` and `bootstrap-show-modal` to your importmap (if no transpiler is used) -->
<script type="importmap">
    {
        "imports": {
            "bootstrap-lightbox-gallery/": "./node_modules/bootstrap-lightbox-gallery/",
            "cm-web-modules/": "./node_modules/cm-web-modules/",
            "bootstrap-show-modal/": "./node_modules/bootstrap-show-modal/"
        }
    }
</script>
<!-- create the LightboxGallery -->
<!-- new LightboxGallery(context, props) -->
<script type="module">
    import {LightboxGallery} from "bootstrap-lightbox-gallery/src/LightboxGallery.js"

    new LightboxGallery(document.querySelectorAll("[data-gallery='gallery-1']"), 
            {
                id: "gallery-45c11a", // set this, if you have multiple galleries on one page
                title: "My Lightbox Gallery", // set the name, it will be displayed
                backgroundTheme: "dark" // set to "light", if you want to display the images on light background
            })
</script>
```

#### Properties

```js
this.props = {
    id: "lightboxGallery", // change this, if you have multiple galleries on one page
    backgroundTheme: "dark" // set to "light", if you want to display the images on light background 
}
```

new LightboxGallery(document.querySelectorAll("[data-gallery='gallery-1']"), {title: "My Gallery"})

---

Find more high quality modules from [shaack.com](https://shaack.com)
on [our projects page](https://shaack.com/works).
