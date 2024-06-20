
const users_arr = JSON.parse(localStorage.getItem('users')) || [];

reload(users_arr);
console.log(users_arr);
function reload(arr) {
	for (let item of arr) {
		document.querySelector('.users').innerHTML += `
			<div class="user" id=${item.id}><h3>${item.name}</h3>
			<p>Company: ${JSON.stringify(item.company.name).slice(1,-1)}</p>
			<p>Website: ${JSON.stringify(item.website).slice(1,-1)}</p>
			<p>Company: ${JSON.stringify(item.phone).slice(1,-1)}</p>

			<a href="/user.html?id=${item.id}">
				<button>Подробнее</button>
			</a></div>
		`
	}
}