import { action } from "@storybook/addon-actions";
import tag from "./tag.vue";

export default {
    title: "tag",
    components: { tag }
}

const methods = {
    onClick: action('remove')
}

export const defaultView = () => ({
    components: { tag },
    template: `
    <tag title="tag"/>
  `
});

defaultView.story = {
    name: "Стандартный вид",
    parameters: {
        backgrounds: [
            { name: 'grey', value: '#8395a7', default: true },
        ],
    },
};

export const closeView = () => ({
    components: { tag },
    template: `
    <tag title="tag" close @remove="onClick"/>
  `,
    methods
})

closeView.story = {
    name: "Вид с крестиком",
    parameters: {
        backgrounds: [
            { name: 'grey', value: '#8395a7', default: true },
        ],
    },
}