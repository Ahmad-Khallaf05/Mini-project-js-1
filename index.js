const container = document.querySelector('.book-list');

function fetchPosts() {
    fetch('http://localhost:3000/ahmad')
        .then(res => res.json())
        .then(data => {
            let template = '';
            data.forEach(element => {
                template += `
                <div class="post">
                    <h3>${element.name}</h3>
                    <p>${element.apout}</p>
                    <button class="delete-book">delete-book</button>
                </div>
            `;
            });

            container.innerHTML = template;
        })
}

fetchPosts();


//-----post-----


async function addData() {
    const titlee = document.getElementById('name').value;
    const bodye = document.getElementById('apout').value;
    const obj = {
        name: titlee,
        apout: bodye

    }
    const response = await fetch("http://localhost:3000/ahmad",
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }
    )
}

const btn = document.getElementById('submitt');
btn.addEventListener('click', addData);

//-----delete-----


async function deleteData() {
    const titlee = document.getElementById('name').value;

    const response = await fetch(`http://localhost:3000/ahmad?name=${titlee}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        fetchPosts();0
    }
}
const btnDelete = document.getElementById('delete-book');
btnDelete.addEventListener('click', deleteData);