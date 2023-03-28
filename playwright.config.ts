import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
    reporter: [['json', { outputFile: 'results.json' }]],
});
