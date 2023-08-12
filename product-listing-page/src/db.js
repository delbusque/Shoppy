const db = {
    categories: [
        {
            "id": 1,
            "name": "Jackets",
            "desc": "Cosy up in our selection of men’s winter coats or cool down with a lightweight jacket – whichever season you're shopping in, we have what you need",
        },
        {
            "id": 2,
            "name": "Shoes",
            "desc": "We've got a style for every mood and personality. Go for classic brogues at the office or a special occasion, leather slip-ons on warm-weather days and causal trainers for off-duty looks",
        },
        {
            "id": 3,
            "name": "Trousers",
            "desc": "We’ve got mens chinos, cargo pants, smart trousers & even joggers from the biggest brands & designers for a steal",
        },
        {
            "id": 4,
            "name": "T-Shirts",
            "desc": "Modernise your wardrobe with a graphic tee or go for a classic style with a plain designer top. A crew neck teams well with jeans, while a polo shirt looks great with chinos",
        },
        {
            "id": 5,
            "name": "Shorts",
            "desc": "As the weather warms up, it’s time to free your legs and don a pair of summer shorts. From men’s cargo shorts to casual men's denim shorts, we have what you’re looking for ",
        },
    ],
    products: [
        {
            "id": 1,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 52,
            "discountPercentage": 50,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"
        },
        {
            "id": 2,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 44.99,
            "discountPercentage": 0,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 3,
            "category": "t-shirts",
            "name": "Half T shirts",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 13,
            "discountPercentage": 10,
            "rating": 2,
            "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/y0pys5jfozblhxlsqzxq/dri-fit-fitness-t-shirt-0VRmcF.png",
            "color": "black"
        },
        {
            "id": 4,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 25.89,
            "discountPercentage": 0,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 5,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 55.89,
            "discountPercentage": 55.76,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 6,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 0,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 7,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 35.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 8,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 0,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 331,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"

        },
        {
            "id": 332,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 333,
            "category": "t-shirts",
            "name": "Half T shirts",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 23,
            "discountPercentage": 12.76,
            "rating": 2,
            "img": "https://m.media-amazon.com/images/I/61CxNab4MWL._AC_SX466_.jpg",
            "color": "black"

        },
        {
            "id": 334,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 335,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 15.89,
            "discountPercentage": 0,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 336,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 55.76,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 337,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 0,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 338,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 0,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 1111,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"

        },
        {
            "id": 1112,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 1113,
            "category": "t-shirts",
            "name": "Half T shirts",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 23,
            "discountPercentage": 0,
            "rating": 2,
            "img": "https://cdn.tom-tailor.com/img/832_1108/1037741_20000_5.jpg",
            "color": "white"

        },
        {
            "id": 1114,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 1115,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 15.89,
            "discountPercentage": 55.76,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 1116,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 55.76,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 1117,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 0,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 1118,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 1331,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 0,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"

        },
        {
            "id": 1332,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 1333,
            "category": "t-shirts",
            "name": "Tom Tailor",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 43,
            "discountPercentage": 0,
            "rating": 2,
            "img": "https://cdn.tom-tailor.com/img/832_1108/1037810_14302_5.jpg",
            "color": "red"

        },
        {
            "id": 1334,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 105.89,
            "discountPercentage": 50,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 1335,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 15.89,
            "discountPercentage": 0,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 1336,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 55.76,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 1337,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 35.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 1338,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 0,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"
        },
        {
            "id": 109,
            "category": "trousers",
            "name": "American Stitch",
            "desc": "Khaki Tapered Fit Joggers",
            "price": 19.89,
            "discountPercentage": 0,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/92835724-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMzQ4fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDcxL2gyMi8xMzMyOTg1MzM0OTkxOC5qcGd8ZTEwNGU0NWRkYjZjYTRiZGQ0MjM5ZGQ2M2Y0OTk4ODM2MTNlMDYwZTY4YWRlMzVkZGNlZDllYjcyMmEwMDI3MA",
            "color": "brown"
        },
        {
            "id": 110,
            "category": "trousers",
            "name": "Adidas Cuffed",
            "desc": "Blue Cuffed Drawstring Joggers",
            "price": 29.89,
            "discountPercentage": 32.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/31556498-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMDEwfGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaGEyL2g0OS8xMzMwNDM3Mjk1MzExOC5qcGd8N2I5OThjNjIyOWE0NWU0YjRkOWU4NjU0ZGRiNWFkMGY2NDdlNjU4MzQ0NzI2M2Y2M2RlYWNkMTk2MDUyODhhOQ",
            "color": "blue"
        },
        {
            "id": 9,
            "category": "trousers",
            "name": "American Stitch",
            "desc": "Khaki Tapered Fit Joggers",
            "price": 19.89,
            "discountPercentage": 22.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/92835724-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMzQ4fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDcxL2gyMi8xMzMyOTg1MzM0OTkxOC5qcGd8ZTEwNGU0NWRkYjZjYTRiZGQ0MjM5ZGQ2M2Y0OTk4ODM2MTNlMDYwZTY4YWRlMzVkZGNlZDllYjcyMmEwMDI3MA",
            "color": "brown"
        },
        {
            "id": 10,
            "category": "trousers",
            "name": "Adidas Cuffed",
            "desc": "Blue Cuffed Drawstring Joggers",
            "price": 29.89,
            "discountPercentage": 32.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/31556498-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMDEwfGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaGEyL2g0OS8xMzMwNDM3Mjk1MzExOC5qcGd8N2I5OThjNjIyOWE0NWU0YjRkOWU4NjU0ZGRiNWFkMGY2NDdlNjU4MzQ0NzI2M2Y2M2RlYWNkMTk2MDUyODhhOQ",
            "color": "blue"
        },
        {
            "id": 309,
            "category": "trousers",
            "name": "American Stitch",
            "desc": "Khaki Tapered Fit Joggers",
            "price": 19.89,
            "discountPercentage": 22.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/92835724-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMzQ4fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDcxL2gyMi8xMzMyOTg1MzM0OTkxOC5qcGd8ZTEwNGU0NWRkYjZjYTRiZGQ0MjM5ZGQ2M2Y0OTk4ODM2MTNlMDYwZTY4YWRlMzVkZGNlZDllYjcyMmEwMDI3MA",
            "color": "brown"
        },
        {
            "id": 310,
            "category": "trousers",
            "name": "Adidas Cuffed",
            "desc": "Blue Cuffed Drawstring Joggers",
            "price": 29.89,
            "discountPercentage": 32.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/31556498-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMDEwfGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaGEyL2g0OS8xMzMwNDM3Mjk1MzExOC5qcGd8N2I5OThjNjIyOWE0NWU0YjRkOWU4NjU0ZGRiNWFkMGY2NDdlNjU4MzQ0NzI2M2Y2M2RlYWNkMTk2MDUyODhhOQ",
            "color": "blue"
        },
        {
            "id": 209,
            "category": "trousers",
            "name": "American Stitch",
            "desc": "Khaki Tapered Fit Joggers",
            "price": 19.89,
            "discountPercentage": 22.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/92835724-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMzQ4fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDcxL2gyMi8xMzMyOTg1MzM0OTkxOC5qcGd8ZTEwNGU0NWRkYjZjYTRiZGQ0MjM5ZGQ2M2Y0OTk4ODM2MTNlMDYwZTY4YWRlMzVkZGNlZDllYjcyMmEwMDI3MA",
            "color": "brown"

        },
        {
            "id": 210,
            "category": "trousers",
            "name": "Adidas Cuffed",
            "desc": "Blue Cuffed Drawstring Joggers",
            "price": 29.89,
            "discountPercentage": 32.76,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/31556498-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIyMDEwfGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaGEyL2g0OS8xMzMwNDM3Mjk1MzExOC5qcGd8N2I5OThjNjIyOWE0NWU0YjRkOWU4NjU0ZGRiNWFkMGY2NDdlNjU4MzQ0NzI2M2Y2M2RlYWNkMTk2MDUyODhhOQ",
            "color": "blue"

        },
        {
            "id": 2111,
            "category": "shoes",
            "name": "TOMMY HILFIGER",
            "desc": "Desert Sky Suede Trainers",
            "price": 149.89,
            "discountPercentage": 0,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/27249388-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI5MzU0fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDc4L2g3Yy8xMzM0MTExMDkyNzM5MC5qcGd8MTYwZmM2NjJmMTg4NjE4NTVmNTRjNGEzNDQ1ZDY5NzU0NzQ1Y2I3NjdhYmJkZjc2NTA5MTA0N2I1NWJlZDFjYg",
            "color": "blue"

        },
        {
            "id": 2112,
            "category": "shoes",
            "name": "ST Runner V3",
            "desc": "Puma Mens ST Runner V3 Mesh Trainers Peacoat/​Puma White",
            "price": 29.89,
            "discountPercentage": 0,
            "rating": 4,
            "img": "https://resources.mandmdirect.com/Images/_default/p/u/3/pu33722_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 11,
            "category": "shoes",
            "name": "TOMMY HILFIGER",
            "desc": "Desert Sky Suede Trainers",
            "price": 49.89,
            "discountPercentage": 55,
            "rating": 2,
            "img": "https://img.tkmaxx.com/medias/27249388-search-wl-01.jpg?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI5MzU0fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDc4L2g3Yy8xMzM0MTExMDkyNzM5MC5qcGd8MTYwZmM2NjJmMTg4NjE4NTVmNTRjNGEzNDQ1ZDY5NzU0NzQ1Y2I3NjdhYmJkZjc2NTA5MTA0N2I1NWJlZDFjYg",
            "color": "blue"

        },
        {
            "id": 12,
            "category": "shoes",
            "name": "ST Runner V3",
            "desc": "Puma Mens ST Runner V3 Mesh Trainers Peacoat/​Puma White",
            "price": 29.89,
            "discountPercentage": 25,
            "rating": 4,
            "img": "https://resources.mandmdirect.com/Images/_default/p/u/3/pu33722_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 13,
            "category": "shorts",
            "name": "Tech Graphic",
            "desc": "Under Armour Mens UA Tech Graphic Shorts Black",
            "price": 12.89,
            "discountPercentage": 15,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/u/j/3/uj30066_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 14,
            "category": "shorts",
            "name": "Essentials Fleece",
            "desc": "Puma Mens Essentials Fleece Shorts Grey",
            "price": 14.89,
            "discountPercentage": 25,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/p/u/6/pu6620_1_cloudzoom.jpg",
            "color": "white"

        },
        {
            "id": 15,
            "category": "jackets",
            "name": "Qikpac Waterproof",
            "desc": "Trespass Womens Qikpac Waterproof Jacket Raspberry",
            "price": 19.89,
            "discountPercentage": 25,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/q/w/1/qw1439_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 16,
            "category": "jackets",
            "name": "Hooded Windbreak",
            "desc": "Womens Own The Run Hooded Running Windbreaker Wonder Steel",
            "price": 29.89,
            "discountPercentage": 55,
            "rating": 4,
            "img": "https://resources.mandmdirect.com/Images/_default/a/d/3/ad35827_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 81,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"
        },
        {
            "id": 82,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 83,
            "category": "t-shirts",
            "name": "Half T shirts",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 13,
            "discountPercentage": 12.76,
            "rating": 2,
            "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/y0pys5jfozblhxlsqzxq/dri-fit-fitness-t-shirt-0VRmcF.png",
            "color": "black"
        },
        {
            "id": 84,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 85,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 15.89,
            "discountPercentage": 55.76,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 86,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 55.76,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 87,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 35.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 88,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 8331,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"

        },
        {
            "id": 8332,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 51,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"
        },
        {
            "id": 52,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 53,
            "category": "t-shirts",
            "name": "Half T shirts",
            "desc": "Many store is creating new designs and trend every month and every year Many store is creating new designs and trend every month and every year",
            "price": 13,
            "discountPercentage": 12.76,
            "rating": 2,
            "img": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/y0pys5jfozblhxlsqzxq/dri-fit-fitness-t-shirt-0VRmcF.png",
            "color": "black"
        },
        {
            "id": 54,
            "name": "Long Line",
            "desc": "LUKE 1977 Mens Dreward Long Line Hooded Jacket Black",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/u/3/lu30311_1_cloudzoom.jpg",
            "color": "black"
        },
        {
            "id": 55,
            "name": "Sherpa Checked",
            "desc": "Fluid Mens Sherpa Lined Checked Overshirt Black/​White",
            "price": 15.89,
            "discountPercentage": 55.76,
            "rating": 5,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/f/d/3/fd31024_1_cloudzoom.jpg",
            "color": "black"

        },
        {
            "id": 56,
            "name": "Vintage Softshell",
            "desc": "Lyle And Scott Vintage Mens Softshell Jacket Sea Mint",
            "price": 45.99,
            "discountPercentage": 55.76,
            "rating": 3,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/l/t/3/lt30834_1_cloudzoom.jpg",
            "color": "green"

        },
        {
            "id": 57,
            "name": "Rainforest Pocket",
            "desc": "Napapijri Mens Rainforest Pocket 3 Jacket Red Cherry",
            "price": 125.89,
            "discountPercentage": 35.76,
            "rating": 4,
            "category": "jackets",
            "img": "https://resources.mandmdirect.com/Images/_default/n/3/3/n330252_1_cloudzoom.jpg",
            "color": "red"

        },
        {
            "id": 58,
            "category": "jackets",
            "name": "Micro Fleece",
            "desc": "Berghaus Mens Prism Micro Fleece 1/​2 Zip Blue/​Blue",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/b/e/3/be30300_1_cloudzoom.jpg",
            "color": "blue"

        },
        {
            "id": 5331,
            "category": "jackets",
            "name": "Adicolor 70S",
            "desc": "Originals Mens Adicolor 70S New Montreal 22 Track Top Brown Desert",
            "price": 25.89,
            "discountPercentage": 12.76,
            "rating": 1,
            "img": "https://resources.mandmdirect.com/Images/_default/a/o/3/ao34345_1_cloudzoom.jpg",
            "color": "brown"

        },
        {
            "id": 5332,
            "category": "jackets",
            "name": "Shiny Jacket",
            "desc": "French Connection Mens Row Shiny Jacket Black",
            "price": 25.89,
            "discountPercentage": 55.76,
            "rating": 3,
            "img": "https://resources.mandmdirect.com/Images/_default/n/n/3/nn30748_1_cloudzoom.jpg",
            "color": "black"

        },
    ]
}

export default db;