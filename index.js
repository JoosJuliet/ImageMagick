const im = require('imagemagick');

// 시간기준은 잘 안된다
exports.helloWorld = (req, res) => {
    require('./p5.min.js');
    let draw = () => {
        try{
            ellipse(50, 50, 80, 80);
        } catch( e ) {
            res.status(400).send("e",e);
        } finally {
            console.log("1");
        }
        console.log("2");

    };

    draw();



    // im.identify('./dog.png', function(err, features){
    //     if (err) {
    //         console.log(err);
    //     };
    //     // res.send(tefeatures);
    // });

};


// function disk가 있따 임시공간 운이 좋음 꺼낼 수도 있다. cache같은 것
// buffer
