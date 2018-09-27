import theme from './theme';

const vfgTheme = {
    install: Vue => {
        Vue.$vfg.addTheme('bootstrap', theme);
    }
};

/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vfgTheme);
}
/* eslint-enable no-undef */

export default vfgTheme;
