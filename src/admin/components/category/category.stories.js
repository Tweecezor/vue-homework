import { action } from "@storybook/addon-actions";
import category from "./category.vue";

export default {
    title: "category",
    components: { category }
}

const methods = {
    delSkill: action('delSkill'),
    saveSkill: action('saveSkill'),
    addSkill: action('addSkill')
}

export const defaultView = () => ({
    components: { category },
    data() {
        return {
            category: {
                "id": 0,
                "caption": "workflow",
                "skills": [
                    { "id": 0, "name": "GIT", "percent": 80 },
                    { "id": 1, "name": "GIT2", "percent": 80 },
                    { "id": 2, "name": "GIT3", "percent": 80 },
                    { "id": 3, "name": "GIT4", "percent": 80 }
                ]
            }
        }
    },
    template: `
    <category :category="category" @delSkill="delSkill" @addSkill="addSkill" @saveSkill="saveSkill"/>
  `,
    methods
});

defaultView.story = {
    name: "Стандартный вид",
    parameters: {
        backgrounds: [
            { name: 'grey', value: '#8395a7', default: true },
        ],
    },
};