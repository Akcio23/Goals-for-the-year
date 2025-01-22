export const getMetasFromRequest = (req) => {
    return {
        metaOne: req.body.metaOne,
        metaTwo: req.body.metaTwo,
        metaThree: req.body.metaThree,
        metaFour: req.body.metaFour,
        metaFive: req.body.metaFive,
        metaSix: req.body.metaSix,
        metaSeven: req.body.metaSeven,
        metaEight: req.body.metaEight,
        metaNine: req.body.metaNine,
        metaTen: req.body.metaTen,
    };
};