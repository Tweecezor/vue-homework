import Vue from 'vue'

const skillsItem = {
    props: ['skill'],
    template: "#skills-item",
    methods: {
        drawCirclePercent() {
            const circle = this.$refs["colored-circle"],
                dashArray = parseInt(
                    getComputedStyle(circle).getPropertyValue('stroke-dasharray')
                ),
                percent = (dashArray / 100) * (100 - this.skill.percent)

            circle.style.strokeDashoffset = percent
        }
    },
    mounted() {
        this.drawCirclePercent()
    }
}

const skillsRow = {
    props: ["category"],
    template: "#skills-row",
    components: {
        skillsItem
    }
}


new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        this.skills = require('./data/skills.json')
    }
})