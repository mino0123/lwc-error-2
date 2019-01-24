const { writeFileSync } = require('fs');

const code = ';\n'.repeat(131072 / 2);
writeFileSync('force-app/main/default/lwc/lwcError2/lwcError2.js', code, 'utf8');



