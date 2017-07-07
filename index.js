const im = require('imagemagick');
const p5 = require('./p5.min.js');
// 시간기준은 잘 안된다
exports.helloWorld = (req, res) => {

    let draw = () => {
        try{
            p5.ellipse(50, 50, 80, 80);
        } catch( e ) {
            res.status(400).send("e");
        } finally {
            console.log("1");
        }
        console.log("2");

    }

    p5.draw();

    // res.writeHead(200, {
    //     'Content-Type': 'image/png'
    // });
    // res.end(data);




    im.identify('./dog.png', function(err, features){
        if (err) {
            console.log(err);
        };
        res.send(tefeatures);
    });

};


// function disk가 있따 임시공간 운이 좋음 꺼낼 수도 있다. cache같은 것
// buffer
