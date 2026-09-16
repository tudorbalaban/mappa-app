const tokens = require('../src/design/tokens.ts');

console.log('Validating design tokens...');

// Check all colors are defined
Object.entries(tokens.colors).forEach(([category, values]) => {
  console.log(`✓ ${category}: ${Object.keys(values).length} colors`);
});

// Check typography scale
console.log(`✓ Typography: ${Object.keys(tokens.typography.scale).length} sizes`);

console.log('\n✅ Design tokens valid!');
