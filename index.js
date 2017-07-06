const im = require('imagemagick');

// 시간기준은 잘 안된다
exports.helloWorld = (req, res) => {
    im.readMetadata('./dog.png', function(err, metadata){
        if (err) throw err;
        res.send('Shot at '+metadata.exif.dateTimeOriginal);
    });

};


// function disk가 있따 임시공간 운이 좋음 꺼낼 수도 있다. cache같은 것
// buffer
