const fs = require('fs');

describe('Smoke test calculadora', () => {
  test('index.html existe', () => {
    expect(fs.existsSync('index.html')).toBe(true);
  });

  test('index.html contiene estructura HTML', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    expect(html.toLowerCase()).toContain('<html');
  });
});