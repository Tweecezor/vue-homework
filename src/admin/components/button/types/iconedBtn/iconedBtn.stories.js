import iconedBtn from "../../button.vue";
import { action } from "@storybook/addon-actions";

const methods = {
    onClick: action("onClick"),
};

export default {
    title: "button/iconed",
    component: iconedBtn,
};

export const defaultView = () => ({
    components: { iconedBtn },
    template: `
    <iconed-btn type="iconed" @click="onClick" title="Заголовок" />
  `,
    methods,
});

export const bigView = () => ({
    components: { iconedBtn },
    template: `
    <iconed-btn type="iconed" @click="onClick" title="Заголовок" big />
  `,
    methods
})

defaultView.story = {
    name: "Стандартный вид",
};

bigView.story = {
    name: "Большая кнопка"
}