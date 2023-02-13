console.log(duaphanda);
// const route = (event) => {
//     event = event || window.event;
//     event.prefentDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation()
// };

// const routes = {
//     "/public/index.html": "/public/index.html",
//     "/kategori/polo": "public/kategori/polo/polo.html",
//     "/kategori/tshirt": "public/kategori/t-shirt/t-shirt.html"
// };

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;
// handleLocation()