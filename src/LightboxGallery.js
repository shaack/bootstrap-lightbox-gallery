/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-input-spinner
 * License: MIT, see file 'LICENSE'
 */
import {DomUtils} from "cm-web-modules/src/utils/DomUtils.js"
import "bootstrap-show-modal/src/ShowModal.js"

export class LightboxGallery {

    constructor(elements, title, props = {}) {
        this.props = {
            id: "lightboxGallery"
        }
        Object.assign(this.props, props)
        // this.elements = elements
        this.state = {
            title: title,
            carousel: undefined
        }
        this.init(elements)
    }

    init(elements) {
        let carouselItems = ""
        elements.forEach((element) => {
            const img = element.querySelector("img")
            const itemData = {
                url: element.href,
                alt: img.alt,
                title: img.title,
                caption: element.querySelector("figcaption").innerHTML.trim()
            }
            element.addEventListener("click", (event) => {
                event.preventDefault()
                const targetLink = event.target.closest("a")
                this.open(targetLink)
            })
            const carouselItem = `
                <div class="carousel-item">
                  <img src="${itemData.url}" class="d-block w-100" title="${itemData.title}" alt="${itemData.alt}"/>
                </div>`
            carouselItems += carouselItem
        })
        this.state.carousel = DomUtils.createElement(`
<div id="${this.props.id}" class="carousel slide">
  ${carouselItems}
  <button class="carousel-control-prev" type="button" data-bs-target="#${this.props.id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Vorheriges Bild</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#${this.props.id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Nächstes Bild</span>
  </button>
</div>`)
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

    open(targetLink) {
        // todo add `active`, when displaying the carousel
        if (targetLink) {
            bootstrap.showModal({
                title: this.state.title,
                body: this.state.carousel
            })
        }
    }
}

