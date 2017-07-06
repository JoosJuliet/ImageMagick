const im = require('imagemagick');

// 시간기준은 잘 안된다
exports.helloWorld = (req, res) => {
    im.identify('./dog.png', function(err, features){
        if (err) {
            console.log(err);
        };
        res.send('Shot at '+features);
    });

};


// function disk가 있따 임시공간 운이 좋음 꺼낼 수도 있다. cache같은 것
// buffer
