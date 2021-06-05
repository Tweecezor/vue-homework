import { action } from "@storybook/addon-actions";
import skillAdd from "./skill-add.vue";

export default {
    title: "skillAdd",
    components: { skillAdd }
}

const methods = {
    addSkill: action('addSkill')
}

export const defaultView = () => ({
    components: { skillAdd },
    data() {
        return {
            title: '',
            percentage: 100,
            errorMessage: {
                title: null,
                percent: null
            }
        }
    },
    template: `
    <skillAdd @addSkill="addSkill"/>
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