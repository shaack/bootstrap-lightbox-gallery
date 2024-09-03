/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-lightbox-gallery
 * License: MIT, see file 'LICENSE'
 */
import "bootstrap-show-modal/src/ShowModal.js"

export class LightboxGallery {

    constructor(elements, props = {}) {
        this.props = {
            id: "lightboxGallery" // change this, if you have multiple galleries on one page
        }
        Object.assign(this.props, props)
        this.state = {
            title: props.title,
            carousel: undefined,
            itemCount: 0,
            currentIndex: undefined
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
            let caption = ""
            if (itemData.caption) {
                caption = `<div class="rounded carousel-caption p-2 text-light bg-dark bg-opacity-50">
                             ${itemData.caption}
                           </div>`
            }
            const carouselItem = `
                <div class="carousel-item h-100" data-bs-index="${this.state.itemCount}">
                    <div class="d-flex align-items-center h-100 w-100 bg-dark">
                        <img src="${itemData.url}" class="d-block mx-auto img-fluid" title="${itemData.title}" alt="${itemData.alt}"/>
                        ${caption}
                    </div>
                </div>`
            carouselItems += carouselItem
            this.state.itemCount++
        })
        this.state.carouselElement = DomUtils.createElement(`
<div id="${this.props.id}" class="carousel slide h-100 carousel-fade">
  <div class="carousel-inner h-100">
    ${carouselItems}
  </div>
  <button style="filter: invert(1) grayscale(100);" class="carousel-control-prev" type="button" data-bs-target="#${this.props.id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Vorheriges Bild</span>
  </button>
  <button style="filter: invert(1) grayscale(100);"  class="carousel-control-next" type="button" data-bs-target="#${this.props.id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Nächstes Bild</span>
  </button>
</div>`)
    }

    open(targetLink) {
        const carouselItems = this.state.carouselElement.querySelectorAll(".carousel-item")
        carouselItems.forEach((carouselItem) => {
            carouselItem.classList.remove("active")
        })
        const image = this.state.carouselElement.querySelector(`[src="${targetLink.href}"]`)
        const activeItem = image.closest(".carousel-item")
        activeItem.classList.add("active")
        this.state.currentIndex = parseInt(activeItem.getAttribute("data-bs-index"))
        if (targetLink) {
            this.modal = bootstrap.showModal({
                theme: "dark",
                title: this.state.title + " <small class='text-muted ms-3 pb-1 carousel-index'></small>",
                headerClass: "border-0",
                body: this.state.carouselElement.outerHTML,
                modalDialogClass: "modal-fullscreen"
            })
            const carouselElement = this.modal.element.querySelector(".carousel")
            carouselElement.addEventListener('slide.bs.carousel', event => {
                this.state.currentIndex = event.to
                this.updateIndex()
            })
        }
        this.updateIndex()
    }

    updateIndex() {
        this.modal.titleElement.querySelector(".carousel-index").innerText = `${this.state.currentIndex + 1} / ${this.state.itemCount}`
    }
}

