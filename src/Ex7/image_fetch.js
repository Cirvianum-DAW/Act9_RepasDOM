const streamPipeline = require('util').promisify(require('stream').pipeline);
const fs = require('fs');
const path = require('path');

const downloadImage = async (url, name) => {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  await streamPipeline(
    response.body,
    fs.createWriteStream(path.join(__dirname, `${name}.jpg`))
  );
};

async function downloadImages() {
  for (let i = 0; i < 10; i++) {
    const response = await fetch(
      'https://api.unsplash.com/photos/random?client_id=u0LypXsBQYzNfQluuw8DqkjHgHVq9kFG4tZ7Ahbsk7A'
    );
    const data = await response.json();
    const url = data.urls.full;
    const name = data.alt_description || 'image' + i;
    await downloadImage(url, name);
  }
}

downloadImages().catch(console.error);
