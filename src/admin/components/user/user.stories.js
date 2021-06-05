import user from "./user.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
    title: "user",
    components: { user },
    decorators: [withKnobs]
};

export const defaultView = () => ({
    components: { user },
    template: `
    <user :size="size" src="https://picsum.photos/300/300" name="Илья Владимирович" />
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}