import Vue from 'vue'

const thumbs = {
    props: ['works', 'currentIndex'],
    template: "#work-thumbs",
    methods: {
        getActiveFrame(index) {
            return this.currentIndex === index ? 'active' : ''
        }
    }
}

const btns = {
    props: ['currentIndex', 'works'],
    template: "#work-btns",
    methods: {
        getActive(dir) {
            switch (dir) {
                case 'next':
                    return this.currentIndex < this.works.length - 1 ? 'active' : ''
                case 'prev':
                    return this.currentIndex > 0 ? 'active' : ''
            }
        }
    }
}

const tags = {
    props: ['tags'],
    template: "#work-tags"
}

const info = {
    props: ['currentImage'],
    template: "#work-info",
    components: {
        tags
    },
    computed: {
        tagsArray() {
            return this.currentImage.skills.split(",")
        }
    }
}

const preview = {
    props: ['currentImage', 'works', 'currentIndex'],
    template: "#work-preview",
    components: {
        thumbs,
        btns
    }
}

new Vue({
    el: "#preview-block",
    template: "#work-display",
    components: {
        preview,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentImage() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        requireImageArr(data) {
            return data.map(item => {
                const image = require(`../images/content/${item.photo}`).default
                item.photo = image
                return item
            })
        },
        slide(dir) {
            switch (dir) {
                case 'next':
                    this.currentIndex++
                        break
                case 'prev':
                    this.currentIndex--
                        break
            }
        },
        slideTo(index) {
            this.currentIndex = index
        }
    },
    watch: {
        currentIndex(val) {
            if (val >= this.works.length)
                this.currentIndex = this.works.length - 1
            else if (val < 0)
                this.currentIndex = 0
        }
    },
    created() {
        this.works = this.requireImageArr(require('./data/works.json'))
    }
})