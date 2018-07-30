import theme from './theme';

const vfgTheme = {
    install: Vue => {
        Vue.$vfg.addTheme('bootstrap', theme);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vfgTheme);
}

export default vfgTheme;
