
const loadNewses = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    // const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewses(data.data.news_category);
    // console.log(data.data.news_category);
}

const displayNewses = newses => {
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add("row");
        newsDiv.innerHTML = `
        <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>                    
        `;
        newsContainer.appendChild(newsDiv);
    })

}

// const displayNewses = newses => {
//     const newsContainer = document.getElementById('news-container');
//     // newses.forEach(news => {
//     for (const news of newses => {
//         const newsDiv = document.createElement('div');
//         // newsDiv.classList.add('col');
//         newsDiv.innerHTML = `
//         <div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//             <div class="col-md-4">
//                 <img src="..." class="img-fluid rounded-start" alt="...">
//             </div>
//             <div class="col-md-8">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
//                         additional content. This content is a little bit longer.</p>
//                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//             </div>
//         </div>
//     </div>
//         `;
//         newsContainer.appendChild(newsDiv);
//     });
// }

loadNewses();