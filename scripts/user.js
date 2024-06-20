let user_id = window.location.search.slice(4)
const users_arr = JSON.parse(localStorage.getItem('users')) || []
const found_user = users_arr.find((item)=> item.id == user_id)
document.body.innerHTML = `
    <h1>User:${user_id}-${found_user.name}</h1>
    <p>${JSON.stringify(found_user)}</p>
    <a href="/FB.html">
    <button>О нас</button>
    </a>
    <a href="/index.html">
    <button>На главную</button>
    </a>`