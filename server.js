const express = require('express');
const e = require("express");
const app = new express();

app.use(e.json())
app.use(e.urlencoded({extended: true}))
app.use(e.static(__dirname + '/img/'));
app.set("view engine", "ejs");

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
app.get("/", function (request, response) {
    response.send("<h1>Nfactorial News</h1>");
});
app.get("/panda", function (request, response) {
    response.send(getPandaCode());
});
app.get("/akku", function (request, response) {
    response.send(getAkkuCode());
});

app.post("/news", function (req, res) {
    if (req.body.id == null)
        res.status(500).send("Invalid request");
    else
        res.status(200).send({
            "id": "1",
            "category": "Entrepreneur",
            "author": "Bella Gonza",
            "readTime": "12 mins",
            "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5331/live/c7170070-c1cb-11ef-8ca3-5548a50c5056.jpg.webp",
            "title": "The Rise of New Entrepreneurs"
        });
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
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5331/live/c7170070-c1cb-11ef-8ca3-5548a50c5056.jpg.webp",
                "title": "The Rise of New Entrepreneurs"
            },
            {
                "id": "2",
                "category": "Marketing",
                "author": "John Smith",
                "readTime": "15 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/cb11/live/e4472d80-c1eb-11ef-aff0-072ce821b6ab.jpg.webp",
                "title": "Effective Marketing Strategies in 2024"
            },
            {
                "id": "3",
                "category": "Technology",
                "author": "Ellen Brown",
                "readTime": "18 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/2a9a/live/dc3fe690-c1c8-11ef-a0f2-fd81ae5962f4.jpg.webp",
                "title": "Innovations in AI and Their Future Impact"
            },
            {
                "id": "4",
                "category": "Design",
                "author": "Alice White",
                "readTime": "20 mins",
                "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/e7f2/live/aa572a20-c1e7-11ef-a2ca-e99d0c9a24e3.jpg.webp",
                "title": "Trends in Modern Design"
            },
            {
                "id": "5",
                "category": "Blockchain",
                "author": "Michael Turner",
                "readTime": "14 mins",
                "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/de68/live/5487f0e0-bee8-11ef-aff0-072ce821b6ab.jpg.webp",
                "title": "Blockchain and Its Potential to Revolutionize Industries"
            },
            {
                "id": "6",
                "category": "Entrepreneur",
                "author": "Sophia Green",
                "readTime": "10 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7cc9/live/dc0ae1f0-c1ca-11ef-a2ca-e99d0c9a24e3.jpg.webp",
                "title": "Building a Sustainable Startup"
            },
            {
                "id": "7",
                "category": "Marketing",
                "author": "David Clark",
                "readTime": "16 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/70fa/live/6e8443c0-c124-11ef-a2ca-e99d0c9a24e3.jpg.webp",
                "title": "The Evolution of Digital Marketing"
            },
            {
                "id": "8",
                "category": "AI & Robotics",
                "author": "Olivia Harris",
                "readTime": "22 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/e6ac/live/33762130-c157-11ef-b200-e594162e2327.jpg.webp",
                "title": "AI and Robotics in the Workplace"
            },
            {
                "id": "9",
                "category": "Leadership",
                "author": "James Lee",
                "readTime": "19 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/75e3/live/4840f3b0-c152-11ef-a2ca-e99d0c9a24e3.jpg.webp",
                "title": "Leadership Skills for the Modern Era"
            },
            {
                "id": "10",
                "category": "Design",
                "author": "Emma Davis",
                "readTime": "13 mins",
                "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/70fa/live/6e8443c0-c124-11ef-a2ca-e99d0c9a24e3.jpg.webp",
                "title": "Creating Impactful Designs"
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
function getAkkuCode(){
    return "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
        "    <title>Поздравление для Акку</title>\n" +
        "    <style>\n" +
        "        body {\n" +
        "            font-family: Arial, sans-serif;\n" +
        "            background-color: #fdf6e3;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            display: flex;\n" +
        "            flex-direction: column;\n" +
        "            align-items: center;\n" +
        "            justify-content: center;\n" +
        "            height: 100vh;\n" +
        "        }\n" +
        "        .card {\n" +
        "            text-align: center;\n" +
        "            background: white;\n" +
        "            border-radius: 10px;\n" +
        "            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n" +
        "            padding: 20px;\n" +
        "            max-width: 400px;\n" +
        "        }\n" +
        "        .card img {\n" +
        "            border-radius: 10px;\n" +
        "            width: 100%;\n" +
        "            height: auto;\n" +
        "        }\n" +
        "        .message {\n" +
        "            margin-top: 15px;\n" +
        "            font-size: 1.2em;\n" +
        "            color: #333;\n" +
        "        }\n" +
        "        .footer {\n" +
        "            margin-top: 20px;\n" +
        "            font-size: 0.9em;\n" +
        "            color: #777;\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "<body>\n" +
        "    <div class=\"card\">\n" +
        "        <img src=\"https://nfactorial.onrender.com/akku.jpg\" alt=\"Акку\">\n" +
        "        <div class=\"message\">\n" +
        "            <p>Дорогая Акку!</p>\n" +
        "            <p>Поздравляем тебя с прошедшим праздником!<br>\n" +
        "            Пусть каждый день будет наполнен радостью,<br>\n" +
        "            улыбками и теплом близких людей.</p>\n" +
        "        </div>\n" +
        "        <div class=\"footer\">С наилучшими пожеланиями, <br> твои друзья 💖</div>\n" +
        "    </div>\n" +
        "</body>\n" +
        "</html>\n"
}

function getPandaCode(){
    return "<!DOCTYPE html>\n" +
        "<html lang=\"ru\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
        "    <title>Панда Диас</title>\n" +
        "    <style>\n" +
        "        body {\n" +
        "            font-family: 'Arial', sans-serif;\n" +
        "            background-color: #f0f8ff;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            display: flex;\n" +
        "            flex-direction: column;\n" +
        "            align-items: center;\n" +
        "            justify-content: center;\n" +
        "            height: 100vh;\n" +
        "        }\n" +
        "        h1 {\n" +
        "            font-size: 3em;\n" +
        "            color: #2c3e50;\n" +
        "            text-align: center;\n" +
        "            margin-top: 20px;\n" +
        "        }\n" +
        "        .container {\n" +
        "            display: flex;\n" +
        "            flex-direction: column;\n" +
        "            align-items: center;\n" +
        "            background-color: #ffffff;\n" +
        "            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\n" +
        "            border-radius: 15px;\n" +
        "            padding: 30px;\n" +
        "            margin-top: 20px;\n" +
        "            width: 80%;\n" +
        "            max-width: 800px;\n" +
        "        }\n" +
        "        .container img {\n" +
        "            border-radius: 15px;\n" +
        "            width: 80%;\n" +
        "            max-width: 600px;\n" +
        "            margin-bottom: 20px;\n" +
        "        }\n" +
        "        .description {\n" +
        "            font-size: 1.5em;\n" +
        "            color: #34495e;\n" +
        "            text-align: center;\n" +
        "            line-height: 1.6;\n" +
        "        }\n" +
        "        .button {\n" +
        "            background-color: #2ecc71;\n" +
        "            color: white;\n" +
        "            padding: 15px 30px;\n" +
        "            border-radius: 25px;\n" +
        "            border: none;\n" +
        "            font-size: 1.2em;\n" +
        "            cursor: pointer;\n" +
        "            transition: background-color 0.3s ease;\n" +
        "        }\n" +
        "        .button:hover {\n" +
        "            background-color: #27ae60;\n" +
        "        }\n" +
        "        /* Модальное окно */\n" +
        "        .modal {\n" +
        "            display: none; /* Скрыто по умолчанию */\n" +
        "            position: fixed;\n" +
        "            z-index: 1;\n" +
        "            left: 0;\n" +
        "            top: 0;\n" +
        "            width: 100%;\n" +
        "            height: 100%;\n" +
        "            background-color: rgba(0, 0, 0, 0.5);\n" +
        "        }\n" +
        "        .modal-content {\n" +
        "            background-color: #fff;\n" +
        "            margin: 15% auto;\n" +
        "            padding: 20px;\n" +
        "            border-radius: 10px;\n" +
        "            width: 80%;\n" +
        "            max-width: 600px;\n" +
        "            text-align: center;\n" +
        "        }\n" +
        "        .modal img {\n" +
        "            max-width: 100%;\n" +
        "            border-radius: 10px;\n" +
        "        }\n" +
        "        .close {\n" +
        "            color: #aaa;\n" +
        "            font-size: 28px;\n" +
        "            font-weight: bold;\n" +
        "            position: absolute;\n" +
        "            top: 10px;\n" +
        "            right: 25px;\n" +
        "            cursor: pointer;\n" +
        "        }\n" +
        "        .close:hover,\n" +
        "        .close:focus {\n" +
        "            color: black;\n" +
        "            text-decoration: none;\n" +
        "            cursor: pointer;\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "<body>\n" +
        "\n" +
        "    <h1>Панда Диас</h1>\n" +
        "\n" +
        "    <div class=\"container\">\n" +
        "        <img src=\"data:image/jpeg;base64,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\" alt=\"Панда с бамбуком\">\n" +
        "        <div class=\"description\">\n" +
        "            <p>Меня зовут Диас и я большая пухлая панда, которая любит бамбук. Я обожаю отдыхать на зеленых лугах и наслаждаться спокойствием.</p>\n" +
        "        </div>\n" +
        "        <button class=\"button\" id=\"showModalBtn\">Познакомиться с Диасом</button>\n" +
        "    </div>\n" +
        "\n" +
        "    <!-- Модальное окно -->\n" +
        "    <div id=\"myModal\" class=\"modal\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <span class=\"close\" id=\"closeModal\">&times;</span>\n" +
        "            <img src=\"https://nfactorial.onrender.com/panda.jpg\" alt=\"Панда с бамбуком\" height=\"600\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "\n" +
        "    <footer>\n" +
        "        <p>&copy; 2024 Все права защищены. Создано с любовью.</p>\n" +
        "    </footer>\n" +
        "\n" +
        "    <script>\n" +
        "        // Получаем элементы\n" +
        "        const modal = document.getElementById(\"myModal\");\n" +
        "        const btn = document.getElementById(\"showModalBtn\");\n" +
        "        const closeBtn = document.getElementById(\"closeModal\");\n" +
        "\n" +
        "        // Открытие модального окна при клике на кнопку\n" +
        "        btn.onclick = function() {\n" +
        "            modal.style.display = \"block\";\n" +
        "        }\n" +
        "\n" +
        "        // Закрытие модального окна при клике на \"X\"\n" +
        "        closeBtn.onclick = function() {\n" +
        "            modal.style.display = \"none\";\n" +
        "        }\n" +
        "\n" +
        "        // Закрытие модального окна при клике за его пределами\n" +
        "        window.onclick = function(event) {\n" +
        "            if (event.target == modal) {\n" +
        "                modal.style.display = \"none\";\n" +
        "            }\n" +
        "        }\n" +
        "    </script>\n" +
        "\n" +
        "</body>\n" +
        "</html>\n"
}
