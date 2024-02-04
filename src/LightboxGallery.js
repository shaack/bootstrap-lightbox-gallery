/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-input-spinner
 * License: MIT, see file 'LICENSE'
 */

export class LightboxGallery {

    constructor(elements, props = {}) {
        this.props = {
        }
        Object.assign(this.props, props)
        this.elements = elements
        this.figuresData = []
        this.init()
    }

    init() {
        this.elements.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault()
                this.open(event.target)
            })
            const img = element.querySelector("img")
            const figureData = {
                url: element.href,
                alt: img.alt,
                title: img.title,
                caption: element.querySelector("figcaption").innerHTML.trim()
            }
            this.figuresData.push(figureData)
        })
        console.log(this.figuresData)
    }

    /*
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    */

    open(target) {
        const targetLink = target.closest("a")
        if (targetLink) {
            // create a layer, display a Bootstrap Carousel with all images of this gallery
            const layer = document.createElement("div")
            layer.classList.add("lightbox-gallery-layer")
            layer.innerHTML = `
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators"></ol>
                                <div class="carousel-inner"></div>
                                <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
            document.body.appendChild(layer)
        }
    }
}

