const express = require('express');
const e = require("express");
const app = new express();
app.use(e.json())
app.use(e.urlencoded({extended: true}))

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
app.get("/", function (request, response) {
    response.send("<h1>Nfactorial News</h1>");
});

app.post("/news", function (req, res) {
    if (req.body.id == null)
        res.status(500).send("Invalid request");
    else
        res.status(200).send("Successfully added");
})
app.get("/news", function (request, response) {
    const type = request.query.type;

    if (type === "row") {
        response.status(200).send(getRowData());
    } else if (type === "column") {
        response.status(200).send(getColumnData());
    } else
        response.status(500).send("Invalid request type");

});
app.get("/news/:id", function (request, response) {
    const type = request.query.type;
    const id = request.params['id'];

    if (type === "row") {
        try {
            response.status(200).send(getRowData().items[id])
        } catch (error) {
            response.status(500).send(error.message)
        }
    } else if (type === "column") {
        try {
            response.status(200).send(getColumnData().items[id])
        } catch (error) {
            response.status(500).send(error.message)
        }
    } else
        response.status(500).send("Invalid request type");
});
app.listen(3000);

function getColumnData() {
    return {
        "items": [
            {
                "id": "1",
                "category": "Entrepreneur",
                "author": "Bella Gonza",
                "readTime": "12 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5331/live/c7170070-c1cb-11ef-8ca3-5548a50c5056.jpg.webp"
            },
            {
                "id": "2",
                "category": "Marketing",
                "author": "John Smith",
                "readTime": "15 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/cb11/live/e4472d80-c1eb-11ef-aff0-072ce821b6ab.jpg.webp"
            },
            {
                "id": "3",
                "category": "Technology",
                "author": "Ellen Brown",
                "readTime": "18 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/2a9a/live/dc3fe690-c1c8-11ef-a0f2-fd81ae5962f4.jpg.webp"
            },
            {
                "id": "4",
                "category": "Design",
                "author": "Alice White",
                "readTime": "20 mins",
                "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/e7f2/live/aa572a20-c1e7-11ef-a2ca-e99d0c9a24e3.jpg.webp"
            },
            {
                "id": "5",
                "category": "Blockchain",
                "author": "Michael Turner",
                "readTime": "14 mins",
                "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/de68/live/5487f0e0-bee8-11ef-aff0-072ce821b6ab.jpg.webp"
            },
            {
                "id": "6",
                "category": "Entrepreneur",
                "author": "Sophia Green",
                "readTime": "10 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7cc9/live/dc0ae1f0-c1ca-11ef-a2ca-e99d0c9a24e3.jpg.webp"
            },
            {
                "id": "7",
                "category": "Marketing",
                "author": "David Clark",
                "readTime": "16 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/70fa/live/6e8443c0-c124-11ef-a2ca-e99d0c9a24e3.jpg.webp"
            },
            {
                "id": "8",
                "category": "AI & Robotics",
                "author": "Olivia Harris",
                "readTime": "22 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/e6ac/live/33762130-c157-11ef-b200-e594162e2327.jpg.webp"
            },
            {
                "id": "9",
                "category": "Leadership",
                "author": "James Lee",
                "readTime": "19 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/75e3/live/4840f3b0-c152-11ef-a2ca-e99d0c9a24e3.jpg.webp"
            },
            {
                "id": "10",
                "category": "Design",
                "author": "Emma Davis",
                "readTime": "13 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/70fa/live/6e8443c0-c124-11ef-a2ca-e99d0c9a24e3.jpg.webp"
            }
        ]
    }
}

function getRowData() {
    return {
        "items": [
            {
                "id": "1",
                "title": "Material Design",
                "subTitle": "Discover the best practices in Material Design",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1f4c/live/5afc1540-c1eb-11ef-a0f2-fd81ae5962f4.png.webp"
            },
            {
                "id": "2",
                "title": "Technology Science",
                "subTitle": "Latest innovations in technology and science",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0kdcjr3.jpg.webp"
            },
            {
                "id": "3",
                "title": "Design Thinking",
                "subTitle": "Learn creative problem-solving techniques",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0dnyf44.jpg.webp"
            },
            {
                "id": "4",
                "title": "Artificial Intelligence",
                "subTitle": "Explore the future of AI and its applications",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0kcs9q7.jpg.webp"
            },
            {
                "id": "5",
                "title": "Digital Marketing",
                "subTitle": "Master strategies to grow your business online",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0h6fhp8.jpg.webp"
            },
            {
                "id": "6",
                "title": "Blockchain Technology",
                "subTitle": "Understand how blockchain is transforming industries",
                "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/acbc/live/42976bd0-bfcf-11ef-a0f2-fd81ae5962f4.jpg.webp"
            },
            {
                "id": "7",
                "title": "User Experience Design",
                "subTitle": "Improve your skills in designing user-friendly interfaces",
                "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/5ba0/live/87eb2e30-c1d0-11ef-aff0-072ce821b6ab.jpg.webp"
            },
            {
                "id": "8",
                "title": "Cybersecurity Essentials",
                "subTitle": "Learn how to protect your digital assets",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0kcs9y8.jpg.webp"
            },
            {
                "id": "9",
                "title": "Cloud Computing",
                "subTitle": "Explore the power of cloud technology",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0l9yq69.jpg.webp"
            },
            {
                "id": "10",
                "title": "Data Science and AI",
                "subTitle": "Dive into the world of data analysis and AI integration",
                "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0xps0m3.jpg.webp"
            }
        ]
    }
}
