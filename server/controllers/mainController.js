// Get Homepage
exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes NodeJS",
        description: "Application de notes sous NodeJS"
    };
    res.render('index', locals);
}