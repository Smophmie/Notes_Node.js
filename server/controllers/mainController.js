// Get Homepage
exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes NodeJS",
        description: "Application de notes sous NodeJS"
    };
    res.render('index', locals);
}


// Get About page
exports.about = async (req, res) => {
    const locals = {
        title: "A propos - Notes NodeJS",
        description: "Application de notes sous NodeJS"
    };
    res.render('about', locals);
}