const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content/products');
const outputFile = path.join(process.cwd(), 'src/lib/data/products.json');

function generateData() {
  if (!fs.existsSync(contentDir)) {
    console.log('No products directory found at', contentDir);
    fs.writeFileSync(outputFile, JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(contentDir);
  const products = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        id: file.replace('.md', ''),
        slug: file.replace('.md', ''),
        title: data.title || '',
        category: data.category || 'A4',
        description: content || data.description || '',
        mainImage: data.mainImage || '',
        gallery: data.gallery ? data.gallery.map(g => g.image || g) : [],
        specs: data.specs || {},
      };
    });

  fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
  console.log(`Successfully generated products.json with ${products.length} products.`);
}

generateData();
