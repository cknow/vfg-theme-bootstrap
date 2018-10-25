import theme from './theme';

const VfgThemeBootstrap = {
    install: Vue => {
        if (!Vue.$vfg) {
            throw new Error('Vfg not found. See https://github.com/cknow/vfg-theme-bootstrap');
        }
        Vue.$vfg.addTheme('bootstrap', theme);
    }
};

/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VfgThemeBootstrap);
}
/* eslint-enable no-undef */

export default VfgThemeBootstrap;
