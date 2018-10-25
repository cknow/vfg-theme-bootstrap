import { createLocalVue } from '@vue/test-utils';
import Vfg from '@cknow/vfg';
import VfgThemeBootstrap from '@/';

describe('module', () => {
    test('module properties', () => {
        expect(VfgThemeBootstrap).toBeTruthy();
        expect(VfgThemeBootstrap).toHaveProperty('install');
        expect(VfgThemeBootstrap.install).toBeInstanceOf(Function);
    });

    test('install', () => {
        const localVue = createLocalVue();

        localVue.use(Vfg);

        expect(localVue.$vfg.hasTheme('bootstrap')).toBe(false);

        localVue.use(VfgThemeBootstrap);

        expect(localVue.$vfg.hasTheme('bootstrap')).toBe(true);
    });

    test('vfg not found', () => {
        expect(() => {
            createLocalVue().use(VfgThemeBootstrap);
        }).toThrow('Vfg not found.');
    });
});
