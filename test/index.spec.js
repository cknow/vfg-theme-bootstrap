import { createLocalVue } from '@vue/test-utils';
import vfg from '@cknow/vfg';
import vfgTheme from '@/';

describe('module', () => {
    test('module properties', () => {
        expect(vfgTheme).toBeTruthy();
        expect(vfgTheme).toHaveProperty('install');
        expect(vfgTheme.install).toBeInstanceOf(Function);
    });

    test('install', () => {
        const localVue = createLocalVue();

        localVue.use(vfg);

        expect(localVue.$vfg.hasTheme('bootstrap')).toBe(false);

        localVue.use(vfgTheme);

        expect(localVue.$vfg.hasTheme('bootstrap')).toBe(true);
    });
});
