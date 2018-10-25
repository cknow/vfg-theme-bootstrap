import { mount, createLocalVue } from '@vue/test-utils';

import Vfg from '@cknow/vfg';
import VfgThemeBootstrap from '@/';

const localVue = createLocalVue();

localVue.use(Vfg, {
    theme: 'bootstrap'
});
localVue.use(VfgThemeBootstrap);

export function createComponent(data) {
    const Component = {
        template: `<vfg :schema="schema"></vfg>`,
        data() {
            return data;
        }
    };

    return mount(Component, {
        localVue
    });
}
