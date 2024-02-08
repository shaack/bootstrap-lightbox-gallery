# bootstrap-lightbox-gallery

A Bootstrap component to display a gallery of images in a lightbox.

[Demo page](https://shaack.com/projekte/bootstrap-lightbox-gallery)

<img width="1544" alt="Bootstrap 5 lightbox gallery" src="https://github.com/shaack/bootstrap-lightbox-gallery/assets/832120/dce09d2c-487d-4422-ae5e-cdd118119d3f">

<img width="1544" alt="Bootstrap 5 lightbox component" src="https://github.com/shaack/bootstrap-lightbox-gallery/assets/832120/8c9cccb5-deaf-4961-92ab-6b6764e26e16">


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
<script type="module">
    import {LightboxGallery} from "bootstrap-lightbox-gallery/src/LightboxGallery.js"

    new LightboxGallery(document.querySelectorAll("[data-gallery='gallery-1']"), {title: "My Gallery"})
</script>
```
