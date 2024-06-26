const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCpJw2H9KKqwCCGQKRh1Bf2w&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4ff9e4f37amshbd08845d4b9e7fcp1abb25jsnff9d4959eb92',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const getData = async(urlApi) => {
  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data;
}

(async() =>{
  try {
    const videos = await getData(url);
    let view = `
       ${videos.items.map(video => `
         <div class="group relative">
           <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
             <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
           </div>
           <div class="mt-4 flex justify-between">
             <h3 class="text-sm text-gray-700">
               <span aria-hidden="true" class="absolute inset-0"></span>
               ${video.snippet.title}
             </h3>
           </div>
         </div>`
        ).slice(0, 4).join('')} 
    `;
   content.innerHTML = view
  } catch(error) {
    console.log(error);
  }
})();