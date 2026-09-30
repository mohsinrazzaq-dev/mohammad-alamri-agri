const products = [
    { name: "بذور النخيل", cat: "trees", price: "2.000 ر.ع", img: "images/palm seeds.avif" },
    { name: "بذور الريحان", cat: "herbs", price: "1.000 ر.ع", img: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=700&q=80" },
    { name: "بذور الخيار", cat: "vegetables", price: "0.800 ر.ع", img: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=700&q=80" },
    { name: "بذور الطماطم", cat: "vegetables", price: "0.800 ر.ع", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80" },
    { name: "بذور القطيفة", cat: "flowers", price: "1.000 ر.ع", img: "images/marigold seeds.avif" },
    { name: "بذور الأقحوان", cat: "flowers", price: "1.200 ر.ع", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80" },
    { name: "بذور أشجار مختارة", cat: "trees", price: "1.500 ر.ع", img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=700&q=80" },
    { name: "بذور الأعشاب العطرية", cat: "herbs", price: "0.900 ر.ع", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80" }
];
const card = p => `<article class="product-card"><img loading="lazy" src="${p.img}" alt="${p.name}"><div class="product-body"><h3>${p.name}</h3><p>جودة مختارة للزراعة</p><span class="price">${p.price}</span><div class="product-actions"><a class="btn btn-green" target="_blank" href="https://wa.me/96893669592?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن " + p.name)}">اطلب الآن</a><a class="btn btn-light" href="contact.html">تفاصيل</a></div></div></article>`;
function render(list, id) { const el = document.getElementById(id); if (el) el.innerHTML = list.map(card).join("") }
render(products.slice(0, 4), "featured-products"); render(products, "all-products");
document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter").forEach(x => x.classList.remove("active")); b.classList.add("active"); render(b.dataset.filter === "all" ? products : products.filter(p => p.cat === b.dataset.filter), "all-products") }));
document.querySelector(".menu-toggle")?.addEventListener("click", () => document.querySelector(".nav-links")?.classList.toggle("open"));
document.getElementById("year")?.append(new Date().getFullYear());
