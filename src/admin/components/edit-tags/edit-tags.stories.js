import editTags from "./edit-tags.vue";

export default {
    title: "editTags",
    components: { editTags }
}

export const defaultView = () => ({
    components: { editTags },
    template: `
    <editTags />
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