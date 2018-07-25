

const qS = (selector, node = document) => node.querySelector(selector);

const qSA = (selector, node = document) => node.querySelectorAll(selector);

const HOST = "localhost:3000";
const API_BASE = "/api/v1";
const BASE_URL = `http://${HOST}${API_BASE}`;

const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {credentials: "include"}).then(
            res => res.json()
        );
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {credentials: "include"}).then(
            res => res.json()
        );
    },
    create(params) {
        return fetch(`${BASE_URL}/products/`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            method: "POST",
            // credentials: "include",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

//views

const viewProducts = (products = []) => {
    return products
        .map(
            product =>
            `<li>
                <a class="product-link" href="#" data-id="${product.id}">
                    ${product.title}
                </a>
            </li>`
        )
        .join("");
};

const viewProductDetails = product => {
    return `
        <div>
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <p>
            <small>Favourited ${product.favourite_count} time(s)</small> 
            <small>Created at ${product.created_at}</small>
            <small>Updated at ${product.updated_at}</small>
            </p>
        </div>
    `;
};

const navigateTo = domId => {
    qSA(".page").forEach(node => {
        if (domId === node.id) {
            node.classList.add("active");
        } else {
            node.classList.remove("active");
        }
    });
};

Session.create({ email: "js@winterfell.gov", password: "supersecret" });

const refreshProductIndex = () => {
    Product.all().then(products => {
        qS(".product-list").innerHTML = viewProducts(products);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // index
    refreshProductIndex();

    //Show
    qS(".product-list").addEventListener("click", event => {
        const { target } = event;

        if (target.closest(".product-link")){
            event.preventDefault();
            const id = target.dataset.id;
    
            Product.one(id).then(product => {
                qS("#product-show").innerHTML = viewProductDetails(product);
                navigateTo("product-show");
            });
        }
    });

    // Nav Bar
    qSA("a[data-target]").forEach(node => {
        node.addEventListener("click", event => {
            event.preventDefault();

            const { target } = event;
            const domId = target.dataset.target;
            navigateTo(domId);
        });
    });

    // Create
    qS("#product-new-form").addEventListener("submit", event => {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        Product.create({
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price")
        })
        .then( data => {
            const id = data.id;
            currentTarget.reset();

            return Product.one(id);
        })
        .then(product => {
            qS("#product-show").innerHTML = viewProductDetails(product);
            navigateTo("product-show");
            refreshProductIndex();
        });
    })
});