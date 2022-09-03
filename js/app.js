
const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    // const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const { data } = await res.json();
    displayCategories(data.news_category);
}

const loadNewsByCategoryId = async (categoryId) => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
        const res = await fetch(url);
        const { data: newsData } = await res.json();
        displayNewses(newsData);
    } catch (error) {
        console.log(error)
    }
}

const displayCategories = categories => {
    const categoryContainer = document.getElementById('category-container');
    categories.reverse().forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add("row");
        categoryDiv.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                <a href="#" onclick="loadNewsByCategoryId('${category.category_id}')" style="text-decoration: none">${category.category_name}</a>
                </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    })

}
// const a = document.getElementById('category.category_id');
// console.log(a);
loadCategories();


// generate substring
const generateSubString = (str = "") => {
    return str.length > 200 ? `${str.substring(0, 200)}...` : str;
}

// modal
const newsModal = async (id = "01") => {
    // const { data: news } = await loadNewsDetails(id);
    const news = {}
    const container = document.getElementById('container');
    const newsDiv = document.createElement('div');

    newsDiv.innerHTML = `
            <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    `;

    container.appendChild(newsDiv)
}

const displayNewses = newses => {
    document.getElementById('newsLength').innerText = newses.length > 0 ? newses.length : 0;
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = "";
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add("row");
        newsDiv.style.background = "white";
        newsDiv.style.padding = "1.5rem";
        newsDiv.style.borderRadius = ".5rem";
        newsDiv.style.marginBottom = "1.5rem";

        newsDiv.innerHTML = `
        <div class="col-md-4">
                        <img src="${news?.image_url}" class="img-fluid rounded-start h-100 rounded" style="object-fit: cover" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div>
                            <div class="mb-5">
                            <h5 class="card-title">${news?.title}</h5 >
                            <p class="card-text">${generateSubString(news?.details)}</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <img src="${news?.author?.img}" class="img-fluid rounded-circle" style="width: 2.5rem; height: 2.5rem">
                                <div>
                                    <h6>${news?.author?.name}</h6>
                                    <p>${news?.author?.published_date}</p>
                                </div>
                                <div><i class="fa-solid fa-eye me-2"></i>${news?.total_view}</div>
                                <button onclick="loadNewsDetails('grid', '${news?._id}')" class="px-5 btn btn-primary">Details</button>
                            </div>
                        </div >
                    </div>
    `;
        newsContainer.appendChild(newsDiv);
    })

}

const loadNewsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

loadNewsByCategoryId("08")
